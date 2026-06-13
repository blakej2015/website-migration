# Blake-Jones.com Migration Guide

## Your Site Migration: WordPress → Astro

**Domain:** blake-james.com  
**Current:** www.blake-jones.com (WordPress)  
**Target:** blake-jones.com (Astro + Netlify)

---

## Phase 1: Prepare & Export WordPress

### Step 1: Backup Your WordPress Site
1. Log into your WordPress admin at `www.blake-jones.com/wp-admin`
2. Install plugin: **"All-in-One WP Migration"** or **"UpdraftPlus"**
3. Create full backup (files + database)
4. Download backup to your computer

### Step 2: Export Content
1. WordPress Admin → **Tools → Export**
2. Select **"All content"**
3. Click **Download Export File**
4. Save as `blake-jones-export.xml`

### Step 3: Export Images/Media
Option A: Use plugin **"Export Media Library"**
- Download all images as ZIP
- Extract to `website-migration/public/images/`

Option B: Manual download
- Use FTP or File Manager to download `/wp-content/uploads/`
- Copy images to `website-migration/public/images/`

---

## Phase 2: Set Up Local Development

### Step 1: Install Node.js
1. Download from https://nodejs.org (LTS version)
2. Install with default settings

### Step 2: Install Dependencies
```bash
cd /Users/stuartblakejones/CascadeProjects/website-migration
npm install
```

### Step 3: Convert WordPress Export
```bash
npm run migrate blake-jones-export.xml
```

This creates:
- `src/content/blog/*.md` - All blog posts
- `src/content/pages/*.md` - All pages

### Step 4: Review & Fix Content
1. Check converted Markdown files
2. Update image paths:
   - OLD: `https://www.blake-jones.com/wp-content/uploads/...`
   - NEW: `/images/filename.jpg`
3. Test locally:
   ```bash
   npm run dev
   ```
   Open http://localhost:4321

---

## Phase 3: Customize Your Site

### Update Site Identity

**1. Layout.astro** - Update navigation:
```astro
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/work">Work</a>  <!-- Add your sections -->
  <a href="/blog">Blog</a>
  <a href="/contact">Contact</a>
</nav>
```

**2. Footer** - Update copyright:
```astro
<footer>
  <p>&copy; {new Date().getFullYear()} Blake-Jones</p>
</footer>
```

**3. Colors** - Edit in `src/layouts/Layout.astro`:
```css
:root {
  --accent: 220, 20, 60;        /* Crimson - change to your color */
  --accent-light: 255, 99, 71;   /* Tomato */
  --accent-dark: 139, 0, 0;      /* Dark Red */
}
```

### Update Homepage
Edit `src/pages/index.astro`:
- Change hero text
- Add your tagline
- Link to your work/portfolio

### Update Contact Info
Edit `src/pages/contact.astro`:
- Your email
- Phone number
- Social links

---

## Phase 4: Deploy to Netlify

### Step 1: Create GitHub Repository
```bash
cd /Users/stuartblakejones/CascadeProjects/website-migration

# Initialize git
git init
git add .
git commit -m "Initial commit - Blake-Jones migration"

# Create repo on GitHub (manually or via gh CLI)
# Then:
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/blake-jones-site.git
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub**
4. Choose `blake-jones-site` repository
5. Netlify auto-detects settings from `netlify.toml`
6. Click **Deploy site**

### Step 3: Set Site Name
1. Site settings → General → Site details
2. Change site name to: `blake-jones`
3. This gives you: `blake-jones.netlify.app`

---

## Phase 5: Configure Custom Domain

### Step 1: Add Domain in Netlify
1. Site settings → Domain management
2. Click **"Add custom domain"**
3. Enter: `blake-jones.com`
4. Click **Verify**

### Step 2: Configure GoDaddy DNS

**Log into GoDaddy:**
1. Go to https://godaddy.com and log in
2. My Products → DNS
3. Find `blake-jones.com`
4. Click **DNS** (or Manage DNS)

**Delete existing records** (if any):
- Delete any A records for `@`
- Delete any CNAME records for `www`

**Add new DNS records:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 600 seconds |
| CNAME | www | blake-jones.netlify.app | 600 seconds |

**Save changes**

### Step 3: Verify in Netlify
1. Back in Netlify, wait for verification
2. Should show: "Waiting for DNS propagation"
3. Can take 15 minutes to 48 hours (usually fast)

### Step 4: Enable HTTPS
1. Once domain is connected, Netlify auto-provisions SSL
2. Site settings → Domain management → HTTPS
3. Should show: "SSL certificate by Let's Encrypt"
4. Enable **"Force HTTPS"** (redirects HTTP to HTTPS)

---

## Phase 6: Set Up CMS (Decap)

### Step 1: Enable Identity
1. Netlify dashboard → Site settings → Identity
2. Click **"Enable Identity"**
3. Select **"Git Gateway"** as registration preference

### Step 2: Enable Git Gateway
1. Go to Services → Git Gateway
2. Click **"Enable Git Gateway"**
3. This allows CMS to save changes to GitHub

### Step 3: Configure Registration
1. Identity → Settings
2. Registration: **"Invite only"** (recommended for security)
3. External providers: Enable Google/GitHub if desired

### Step 4: Invite Yourself
1. Identity → Users
2. Click **"Invite users"**
3. Enter your email
4. Accept invitation, set password

### Step 5: Access CMS
1. Go to `https://blake-jones.com/admin`
2. Login with your credentials
3. You can now edit content visually!

---

## Phase 7: Go Live Checklist

### Before Switching DNS:
- [ ] All pages created and reviewed
- [ ] Images uploaded and working
- [ ] Contact form tested (submissions go to Netlify Forms)
- [ ] Mobile responsive test passed
- [ ] Speed test (should be 90+ on PageSpeed Insights)
- [ ] CMS login working
- [ ] HTTPS certificate issued

### Switching DNS:
- [ ] DNS records updated in GoDaddy
- [ ] Waited for propagation (check with: https://whatsmydns.net)
- [ ] Site loads at `https://blake-jones.com`
- [ ] `www.blake-jones.com` redirects to `blake-jones.com`

### After Going Live:
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test CMS editing
- [ ] Set up redirects from old WordPress URLs (if needed)
- [ ] Update Google Analytics/Search Console
- [ ] Cancel WordPress hosting (after confirming everything works)

---

## URL Redirects (Important for SEO)

If you want to redirect old WordPress URLs:

Add to `netlify.toml`:
```toml
[[redirects]]
  from = "/wp-content/uploads/*"
  to = "/images/:splat"
  status = 301

[[redirects]]
  from = "/category/*"
  to = "/blog"
  status = 301

[[redirects]]
  from = "/tag/*"
  to = "/blog"
  status = 301
```

---

## Troubleshooting

### DNS Not Propagating?
- Check: https://whatsmydns.net
- Flush DNS cache:
  - Windows: `ipconfig /flushdns`
  - Mac: `sudo killall -HUP mDNSResponder`

### Images Not Showing?
- Check paths in Markdown files
- Ensure images are in `public/images/`
- Case sensitivity matters!

### CMS Login Not Working?
- Ensure Identity is enabled
- Check Git Gateway is enabled
- Try clearing browser cookies

### Site Not Building?
- Check Netlify build logs
- Ensure `netlify.toml` is in root
- Verify Node.js version compatibility

---

## Post-Migration

### Cancel WordPress Hosting
Once everything is working:
1. Export any final content from WordPress
2. Backup everything
3. Cancel hosting with your WordPress provider
4. Let `www.blake-jones.com` domain expire (or redirect it)

### Monitor Performance
- PageSpeed Insights: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com
- Should see dramatic improvement vs WordPress

---

## Need Help?

- **Astro docs**: https://docs.astro.build
- **Decap CMS docs**: https://decapcms.org/docs
- **Netlify docs**: https://docs.netlify.com
- **GoDaddy support**: https://godaddy.com/help

---

**Estimated Timeline:**
- Export & setup: 2-4 hours
- Content migration: 2-6 hours (depending on content volume)
- Customization: 2-4 hours
- Testing & deployment: 1-2 hours
- **Total: 1-2 days of work**

**Ready to start? Begin with Phase 1: Export your WordPress content.**
