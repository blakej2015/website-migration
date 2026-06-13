# WordPress to Astro Migration Guide

## Overview
This guide helps you migrate from WordPress to a fast, free static site using Astro + Decap CMS.

**Benefits:**
- **Cost**: Free hosting on Netlify
- **Speed**: Much faster than WordPress
- **Security**: No database = nothing to hack
- **CMS**: Visual editor at `/admin` (similar to WordPress)
- **Domain**: Works with your GoDaddy domain

---

## Step 1: Export Your WordPress Content

### Option A: Use WordPress Export Tool (Simple)
1. Log into your WordPress admin
2. Go to **Tools → Export**
3. Select **All content**
4. Download the `.xml` file
5. This exports posts, pages, comments, and media references

### Option B: Use Plugin for Better Export
Install "WordPress Export to Markdown" plugin:
1. Install plugin from WordPress repository
2. Go to plugin settings
3. Export posts as Markdown files
4. These can be copied directly into `src/content/blog/`

---

## Step 2: Prepare Your Content

### Convert WordPress XML to Markdown

**Online tools:**
- https://wordpress2markdown.com
- Upload your XML, download Markdown files

**Or use Node.js script:**
```bash
npm install -g wordpress-export-to-markdown
wordpress-export-to-markdown your-export.xml
```

### Organize Content

1. Copy blog posts to `src/content/blog/`
2. Copy pages to `src/content/pages/`
3. Upload images to `public/images/`

### Format Frontmatter

Each post needs this at the top:
```yaml
---
title: "Your Post Title"
description: "Brief description"
pubDate: 2024-01-15
author: "Your Name"
image: "/images/your-image.jpg"  # optional
---
```

---

## Step 3: Set Up Development Environment

### Install Node.js
1. Download from https://nodejs.org (LTS version)
2. Install with default settings

### Install Dependencies
```bash
cd website-migration
npm install
```

### Run Development Server
```bash
npm run dev
```
Open http://localhost:4321 to see your site

---

## Step 4: Configure Decap CMS

### Set Up Git Gateway

Decap CMS needs authentication to save content. For Netlify:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repo
   - Build settings are already configured in `netlify.toml`

3. **Enable Git Gateway:**
   - In Netlify dashboard: Site settings → Identity
   - Click "Enable Identity"
   - Go to Services → Git Gateway → Enable
   - This allows the CMS to save changes

4. **Invite yourself:**
   - In Identity tab, invite your email
   - Accept invitation, set password

---

## Step 5: Connect GoDaddy Domain

### In Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain: `yourdomain.com`

### In GoDaddy:
1. Log into GoDaddy
2. Go to My Products → DNS
3. Find your domain, click "DNS"
4. Delete any existing A records for `@` and `www`
5. Add new records:

   **For root domain (@):**
   - Type: A
   - Name: @
   - Value: 75.2.60.5 (Netlify's load balancer)
   - TTL: 600 seconds

   **For www:**
   - Type: CNAME
   - Name: www
   - Value: your-netlify-site-name.netlify.app
   - TTL: 600 seconds

6. Save changes

### Back in Netlify:
1. Wait for DNS to propagate (can take up to 48 hours, usually 15 minutes)
2. Click "Verify" on the custom domain
3. Enable HTTPS (Netlify provides free SSL automatically)

---

## Step 6: Migrate Content

### Copy Your Content
1. Place blog posts in `src/content/blog/`
2. Place pages in `src/content/pages/`
3. Add images to `public/images/`

### Update Links
- Search and replace old WordPress URLs with new ones
- Update internal links to match new structure

### Test Everything
```bash
npm run build
npm run preview
```

---

## Step 7: Deploy

### Push to GitHub
```bash
git add .
git commit -m "Add migrated content"
git push
```

Netlify will automatically build and deploy your site!

---

## Using the CMS

### Access the Admin Panel
Go to `https://yourdomain.com/admin`

### Login
Use the email/password you set up in Netlify Identity

### Create/Edit Content
- Visual editor similar to WordPress
- Supports Markdown
- Drag and drop images
- Auto-saves to GitHub

---

## Cost Breakdown

| Item | Cost |
|------|------|
| Netlify hosting | **FREE** |
| Decap CMS | **FREE** |
| SSL certificate | **FREE** (Netlify provides) |
| GoDaddy domain | ~$12-15/year (you already have this) |
| **Total** | **$12-15/year** |

Compare to WordPress hosting: $5-30/month ($60-360/year)

---

## Troubleshooting

### Site not building?
- Check Netlify build logs
- Ensure `netlify.toml` is in root
- Check Node.js version (should be 18+)

### CMS not working?
- Ensure Git Gateway is enabled in Netlify
- Check Identity is enabled
- Verify you're logged in at `/admin`

### Domain not connecting?
- DNS changes take time to propagate
- Check A record points to 75.2.60.5
- Try clearing DNS cache: `ipconfig /flushdns` (Windows) or `sudo killall -HUP mDNSResponder` (Mac)

### Images not showing?
- Place images in `public/images/`
- Reference as `/images/filename.jpg`
- CMS uploads go to same location

---

## Next Steps

1. **Customize design**: Edit `src/layouts/Layout.astro`
2. **Add analytics**: Google Analytics, Plausible, etc.
3. **SEO**: Update meta tags, add sitemap
4. **Backup**: Your content is in GitHub - automatically backed up

---

## Need Help?

- Astro docs: https://docs.astro.build
- Decap CMS docs: https://decapcms.org/docs
- Netlify docs: https://docs.netlify.com
