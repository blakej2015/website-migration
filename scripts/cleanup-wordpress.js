#!/usr/bin/env node
/**
 * Clean up WordPress block markup from markdown files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '..', 'src', 'content', 'pages');

function cleanWordPressBlocks(content) {
  return content
    // Remove WordPress block comments
    .replace(/<!-- wp:\w+[^>]*>/g, '')
    .replace(/<!-- \/wp:\w+ -->/g, '')
    .replace(/<!-- wp:separator[^>]*>\s*<hr[^>]*>\s*<!-- \/wp:separator -->/g, '\n---\n')
    .replace(/<!-- wp:heading[^>]*>\s*<h([1-6])[^>]*>(.*?)<\/h[1-6]>\s*<!-- \/wp:heading -->/g, '\n## $2\n')
    .replace(/<!-- wp:paragraph[^>]*>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<!-- \/wp:paragraph -->/g, '\n$1\n')
    .replace(/<!-- wp:image[^>]*>\s*<figure[^>]*>\s*\[?Image\]?\(([^)]+)\)[^<]*<\/figure>\s*<!-- \/wp:image -->/g, '\n![Image]($1)\n')
    // Remove empty figcaptions
    .replace(/<figcaption[^>]*>\s*<br>\s*<\/figcaption>/g, '')
    // Clean up image URLs (remove query strings)
    .replace(/\/images\/([^?]+)\?w=\d+/g, '/images/$1')
    // Remove WordPress classes from HTML tags
    .replace(/ class="wp-block-\w+"/g, '')
    .replace(/ class="has-[\w-]+-font-size"/g, '')
    // Clean up excessive whitespace
    .replace(/\n{3,}/g, '\n\n')
    // Remove remaining HTML comments
    .replace(/<!--[\s\S]*?-->/g, '');
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
  
  // Clean the body
  const cleanedBody = cleanWordPressBlocks(body);
  
  // Reconstruct file
  const newContent = `---\n${frontmatter}\n---\n${cleanedBody}`;
  
  // Write back
  fs.writeFileSync(filePath, newContent);
  console.log(`✅ Cleaned: ${path.basename(filePath)}`);
}

// Process all markdown files
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

console.log(`Cleaning ${files.length} markdown files...\n`);

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  processFile(filePath);
});

console.log('\n✅ All files cleaned!');
console.log('Run: npm run build && npm run preview');
