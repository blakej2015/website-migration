#!/usr/bin/env node
/**
 * WordPress XML to Markdown Converter
 * 
 * Usage: node wordpress-export.js wordpress-export.xml
 */

import fs from 'fs';
import path from 'path';
import { parseString } from 'xml2js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function sanitizeFilename(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function escapeYaml(str) {
  if (!str) return '';
  return str.replace(/"/g, '\\"');
}

function convertToMarkdown(post) {
  const title = post.title[0];
  const content = post['content:encoded'][0];
  const pubDate = new Date(post.pubDate[0]).toISOString().split('T')[0];
  const creator = post['dc:creator'][0];
  
  // Extract description from content (first 150 chars)
  const plainText = content.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
  
  let markdown = `---
`;
  markdown += `title: "${escapeYaml(title)}"
`;
  markdown += `description: "${escapeYaml(plainText)}"
`;
  markdown += `pubDate: ${pubDate}
`;
  markdown += `author: "${escapeYaml(creator)}"
`;
  
  // Extract featured image if present
  if (post['wp:postmeta']) {
    const featuredImage = post['wp:postmeta'].find(meta => meta['wp:meta_key'][0] === '_thumbnail_id');
    if (featuredImage) {
      // Would need to lookup attachment by ID
      // For now, leave empty for manual filling
    }
  }
  
  markdown += `---

`;
  
  // Convert basic HTML to Markdown
  let body = content
    .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
    .replace(/<h1>(.*?)<\/h1>/g, '# $1\n\n')
    .replace(/<h2>(.*?)<\/h2>/g, '## $1\n\n')
    .replace(/<h3>(.*?)<\/h3>/g, '### $1\n\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<b>(.*?)<\/b>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<i>(.*?)<\/i>/g, '*$1*')
    .replace(/<a href="([^"]*)">(.*?)<\/a>/g, '[$2]($1)')
    .replace(/<img[^>]*src="([^"]*)"[^>]*>/g, '![Image]($1)')
    .replace(/<ul>/g, '')
    .replace(/<\/ul>/g, '')
    .replace(/<li>(.*?)<\/li>/g, '- $1\n')
    .replace(/<ol>/g, '')
    .replace(/<\/ol>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
  
  markdown += body;
  
  return {
    filename: `${sanitizeFilename(title)}.md`,
    content: markdown,
    date: pubDate,
    title: title
  };
}

async function processExport(xmlFile) {
  console.log(`Processing ${xmlFile}...`);
  
  const xmlContent = fs.readFileSync(xmlFile, 'utf-8');
  
  parseString(xmlContent, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      process.exit(1);
    }
    
    const channel = result.rss.channel[0];
    const items = channel.item || [];
    
    const posts = items.filter(item => 
      item['wp:post_type'] && item['wp:post_type'][0] === 'post'
    );
    
    const pages = items.filter(item => 
      item['wp:post_type'] && item['wp:post_type'][0] === 'page'
    );
    
    console.log(`Found ${posts.length} posts and ${pages.length} pages`);
    
    // Create output directories
    const blogDir = path.join(__dirname, '..', 'src', 'content', 'blog');
    const pagesDir = path.join(__dirname, '..', 'src', 'content', 'pages');
    
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }
    if (!fs.existsSync(pagesDir)) {
      fs.mkdirSync(pagesDir, { recursive: true });
    }
    
    // Process posts
    posts.forEach(post => {
      const md = convertToMarkdown(post);
      const outputPath = path.join(blogDir, md.filename);
      fs.writeFileSync(outputPath, md.content);
      console.log(`Created: ${outputPath}`);
    });
    
    // Process pages
    pages.forEach(page => {
      const md = convertToMarkdown(page);
      const outputPath = path.join(pagesDir, md.filename);
      fs.writeFileSync(outputPath, md.content);
      console.log(`Created: ${outputPath}`);
    });
    
    console.log('\nDone! Check:');
    console.log(`  - ${blogDir}`);
    console.log(`  - ${pagesDir}`);
    console.log('\nNext steps:');
    console.log('  1. Review converted content');
    console.log('  2. Update image paths');
    console.log('  3. Run: npm run dev');
  });
}

// Main
const xmlFile = process.argv[2];
if (!xmlFile) {
  console.log('Usage: node wordpress-export.js <wordpress-export.xml>');
  console.log('\nFirst, export your WordPress content:');
  console.log('  1. WordPress Admin → Tools → Export');
  console.log('  2. Download "All content"');
  console.log('  3. Run this script on the downloaded file');
  process.exit(1);
}

if (!fs.existsSync(xmlFile)) {
  console.error(`File not found: ${xmlFile}`);
  process.exit(1);
}

processExport(xmlFile);
