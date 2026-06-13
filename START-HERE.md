# 🚀 Start Here: Blake-Jones.com Migration

## Your Migration is Ready

This folder contains everything you need to migrate **www.blake-jones.com** from WordPress to a fast, free Astro site hosted on Netlify.

---

## 📋 Quick Overview

**What you're getting:**
- ⚡ **Lightning-fast** static site (vs slow WordPress)
- 💰 **FREE hosting** on Netlify
- 🔒 **More secure** (no database to hack)
- ✍️ **Visual CMS** at `/admin` (edit like WordPress)
- 🎨 **Modern design** (customizable)
- 🔗 **Your domain** blake-jones.com (via GoDaddy)

**Total annual cost:** ~$12-15 (just the domain, no hosting fees!)

---

## 📚 Your Migration Documents

### 1. **DEPLOY-BLAKE-JONES.md** ← START HERE
Complete step-by-step migration guide:
- Export WordPress content
- Set up local development
- Customize your site
- Deploy to Netlify
- Connect your GoDaddy domain
- Go live checklist

### 2. **GODADDY-DNS-SETUP.md**
Specific DNS configuration for GoDaddy:
- Exact steps to update DNS records
- How to verify changes
- Troubleshooting common issues

### 3. **MIGRATION-GUIDE.md**
General migration guide (more technical details)

### 4. **README.md**
Project overview and quick reference

---

## 🎯 Migration Roadmap

### Phase 1: Export (Today)
- [ ] Export WordPress content
- [ ] Download all images
- [ ] Backup everything

### Phase 2: Setup (Today/Tomorrow)
- [ ] Install Node.js
- [ ] Install dependencies: `npm install`
- [ ] Convert WordPress export: `npm run migrate`
- [ ] Review and fix content

### Phase 3: Customize (1-2 days)
- [ ] Update colors to match your brand
- [ ] Add your logo/images
- [ ] Customize navigation
- [ ] Update contact info

### Phase 4: Deploy (1 day)
- [ ] Push to GitHub
- [ ] Connect to Netlify
- [ ] Configure domain

### Phase 5: Go Live (1 day)
- [ ] Test everything
- [ ] Update GoDaddy DNS
- [ ] Wait for propagation
- [ ] Cancel WordPress hosting

---

## 🛠️ What You Need to Install

1. **Node.js** (to run the site locally)
   - Download: https://nodejs.org
   - Get the LTS version

2. **Git** (to push to GitHub)
   - Download: https://git-scm.com
   - Or use GitHub Desktop: https://desktop.github.com

3. **Visual Studio Code** (recommended editor)
   - Download: https://code.visualstudio.com
   - Free, powerful code editor

---

## ⚡ Quick Start Commands

Once you have Node.js installed:

```bash
# 1. Navigate to project
cd /Users/stuartblakejones/CascadeProjects/website-migration

# 2. Install dependencies
npm install

# 3. Run local development server
npm run dev

# 4. Open browser to http://localhost:4321
```

---

## 📁 Project Structure

```
website-migration/
├── 📄 START-HERE.md              ← You are here
├── 📄 DEPLOY-BLAKE-JONES.md      ← Main migration guide
├── 📄 GODADDY-DNS-SETUP.md       ← DNS configuration
├── 📄 MIGRATION-GUIDE.md         ← General guide
├── 📄 README.md                  ← Project overview
│
├── 📁 src/
│   ├── 📁 content/
│   │   ├── 📁 blog/              ← Your blog posts go here
│   │   └── 📁 pages/             ← Your pages go here
│   ├── 📁 layouts/
│   │   └── Layout.astro          ← Site template (edit colors here)
│   └── 📁 pages/
│       ├── index.astro           ← Homepage
│       ├── about.astro         ← About page
│       ├── contact.astro       ← Contact page
│       └── 📁 blog/              ← Blog listing & posts
│
├── 📁 public/
│   ├── 📁 admin/                 ← CMS interface
│   └── 📁 images/                ← Upload images here
│
├── 📁 scripts/
│   └── wordpress-export.js       ← WordPress converter
│
├── 📝 package.json               ← Dependencies
├── ⚙️  astro.config.mjs           ← Site config (domain set)
└── 🌐 netlify.toml               ← Netlify settings
```

---

## 🎨 Customization Quick Wins

### Change Colors
Edit `src/layouts/Layout.astro`:
```css
:root {
  --accent: 220, 20, 60;        /* Change these RGB values */
  --accent-light: 255, 99, 71;
  --accent-dark: 139, 0, 0;
}
```

### Update Navigation
Edit `src/layouts/Layout.astro`:
```astro
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/work">Your Work</a>
  <a href="/blog">Blog</a>
  <a href="/contact">Contact</a>
</nav>
```

### Change Homepage
Edit `src/pages/index.astro`

### Update Contact Info
Edit `src/pages/contact.astro`

---

## 🔗 Domain Setup Summary

**Your domain:** blake-jones.com (at GoDaddy)

**DNS records to add:**

| Type | Name | Value |
|------|------|-------|
| A | @ | 75.2.60.5 |
| CNAME | www | blake-jones.netlify.app |

See `GODADDY-DNS-SETUP.md` for exact steps.

---

## 💡 Pro Tips

1. **Test locally first** - Use `npm run dev` to preview before deploying
2. **Use the CMS** - Edit at `/admin` after deployment (no coding needed)
3. **Keep WordPress running** until you confirm everything works
4. **Backup everything** before making DNS changes
5. **DNS takes time** - Don't panic if changes don't show immediately

---

## 🆘 Getting Help

**Stuck on something?**

1. Check `DEPLOY-BLAKE-JONES.md` - it has detailed steps
2. Check `GODADDY-DNS-SETUP.md` - specific DNS help
3. Google the error message + "astro" or "netlify"
4. Ask me! Just describe what you're trying to do and where you're stuck.

---

## ✅ Your Next Step

**Read `DEPLOY-BLAKE-JONES.md` and start with Phase 1: Export your WordPress content.**

---

## 📞 Questions?

Just ask! I'm here to help with:
- Understanding the migration process
- Troubleshooting issues
- Customizing the design
- Any questions about DNS, hosting, or deployment

---

**Ready? Let's migrate blake-jones.com! 🚀**
