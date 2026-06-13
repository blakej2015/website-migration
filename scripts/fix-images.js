#!/usr/bin/env node
/**
 * Fix markdown images inside HTML blocks
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '..', 'src', 'content', 'pages');

function fixImages(content) {
  return content
    // Convert markdown images inside HTML to proper img tags
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%;height:auto;border-radius:8px;margin:1.5rem 0;" />')
    // Fix YouTube embeds - convert plain URLs to iframes
    .replace(/<div>\s*https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)\s*<\/div>/g, 
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="max-width:100%;border-radius:8px;margin:1.5rem 0;"></iframe>')
    // Remove empty figcaptions
    .replace(/<figcaption[^>]*>\s*<br\s*\/?>\s*<\/figcaption>/gi, '')
    // Clean up empty paragraphs
    .replace(/<p>\s*<\/p>/g, '')
    // Remove WordPress classes
    .replace(/ class="wp-block-[\w-]+"/g, '')
    .replace(/ class="wp-embed-[\w-]+"/g, '')
    .replace(/ class="is-[\w-]+"/g, '')
    .replace(/ class="size-[\w-]+"/g, '')
    .replace(/ class="align[\w-]+"/g, '')
    .replace(/ class="wp-element-[\w-]+"/g, '');
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) {
    console.log(`Skipping ${path.basename(filePath)} - no frontmatter found`);
    return;
  }
  
  const frontmatter = frontmatterMatch[1];
  const body = frontmatterMatch[2];
  
  // Fix images
  const fixedBody = fixImages(body);
  
  // Reconstruct file
  const newContent = `---\n${frontmatter}\n---\n${fixedBody}`;
  
  // Write back
  fs.writeFileSync(filePath, newContent);
  console.log(`✅ Fixed images: ${path.basename(filePath)}`);
}

// Process all markdown files
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

console.log(`Fixing images in ${files.length} markdown files...\n`);

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  processFile(filePath);
});

console.log('\n✅ All images fixed!');
console.log('Run: npm run build && npm run preview');
