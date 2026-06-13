# Migration Scripts

## WordPress Export Script

Convert WordPress XML export to Markdown files for Astro.

### Prerequisites
```bash
npm install xml2js
```

### Usage
1. Export your WordPress content:
   - WordPress Admin → Tools → Export
   - Select "All content"
   - Download the XML file

2. Run the converter:
```bash
node scripts/wordpress-export.js your-export.xml
```

3. This creates:
   - `src/content/blog/*.md` - All blog posts
   - `src/content/pages/*.md` - All pages

### Manual Cleanup Needed
After conversion, you should:
1. Review the Markdown files
2. Update image paths (WordPress paths won't work)
3. Add featured images to frontmatter
4. Fix any complex HTML that didn't convert well

### Download Images
WordPress images need to be downloaded separately:
1. Find all image URLs in your content
2. Download them to `public/images/`
3. Update references from WordPress URLs to `/images/filename.jpg`

### Alternative: Use Online Tool
If the script doesn't work well, try:
- https://wordpress2markdown.com
- https://github.com/lonekorean/wordpress-export-to-markdown
