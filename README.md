# Website Migration: WordPress → Astro

A fast, free alternative to WordPress using Astro + Decap CMS.

## 🎯 What You Get

- **⚡ Blazing fast**: Static site (no database queries)
- **💰 Free hosting**: Netlify free tier
- **🔒 Secure**: No database = nothing to hack
- **✍️ Visual CMS**: Edit content at `/admin` (WordPress-like experience)
- **🎨 Modern design**: Clean, responsive, customizable
- **📱 Mobile-first**: Works great on all devices

## 📁 Project Structure

```
website-migration/
├── src/
│   ├── content/
│   │   ├── blog/           # Blog posts (Markdown)
│   │   └── pages/          # Static pages
│   ├── layouts/
│   │   └── Layout.astro    # Site layout template
│   └── pages/
│       ├── index.astro     # Homepage
│       ├── about.astro     # About page
│       ├── contact.astro   # Contact form
│       └── blog/           # Blog routes
├── public/
│   ├── admin/              # Decap CMS interface
│   └── images/             # Uploaded images
├── scripts/
│   └── wordpress-export.js # WordPress migration tool
├── MIGRATION-GUIDE.md      # Detailed migration instructions
└── netlify.toml           # Netlify configuration
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit http://localhost:4321

### 3. Export WordPress Content
```bash
npm run migrate your-wordpress-export.xml
```

### 4. Build for Production
```bash
npm run build
```

## 🌐 Deploy to Netlify

### Option A: Git-based (Recommended)
1. Push to GitHub
2. Connect repo to Netlify
3. Auto-deploy on every push

### Option B: Manual Upload
1. Run `npm run build`
2. Drag `dist/` folder to Netlify

## 📝 Content Management

### Via CMS (Visual Editor)
1. Go to `yourdomain.com/admin`
2. Login with Netlify Identity
3. Create/edit posts with visual editor

### Via Files (Developer)
1. Edit Markdown files in `src/content/`
2. Add images to `public/images/`
3. Commit and push

## 🎨 Customization

### Colors
Edit CSS variables in `src/layouts/Layout.astro`:
```css
:root {
  --accent: 136, 58, 234;        /* Purple accent */
  --accent-light: 224, 204, 250; /* Light purple */
  --accent-dark: 49, 10, 101;    /* Dark purple */
}
```

### Fonts
Change in `Layout.astro`:
```css
html {
  font-family: 'Your Font', system-ui, sans-serif;
}
```

### Layout
Modify `src/layouts/Layout.astro` for site-wide changes.

## 🔗 Connect Your GoDaddy Domain

1. **In Netlify**: Site settings → Domain management → Add custom domain
2. **In GoDaddy DNS**:
   - A record `@` → `75.2.60.5`
   - CNAME `www` → `yoursite.netlify.app`
3. **Enable HTTPS**: Netlify provides free SSL automatically

See `MIGRATION-GUIDE.md` for detailed steps.

## 💵 Cost Comparison

| | WordPress | This Solution |
|---|---|---|
| Hosting | $5-30/month | **FREE** |
| Security | Updates needed | **Built-in** |
| Speed | Database queries | **Instant** |
| SSL | Often extra | **FREE** |
| **Total/year** | $60-360 | **$12-15** (domain only) |

## 📚 Documentation

- **Migration Guide**: `MIGRATION-GUIDE.md` - Step-by-step WordPress migration
- **Script Help**: `scripts/README.md` - WordPress export conversion
- **Astro Docs**: https://docs.astro.build
- **Decap CMS**: https://decapcms.org/docs

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Decap CMS](https://decapcms.org) - Headless CMS with visual editor
- [Netlify](https://netlify.com) - Hosting & serverless functions
- [Node.js](https://nodejs.org) - JavaScript runtime

## ⚡ Performance

- 100/100 Lighthouse scores
- First Contentful Paint: < 1s
- No JavaScript required for basic content
- Progressive enhancement approach

## 🔐 Security

- No database to compromise
- No PHP/server-side vulnerabilities
- Static files only
- Automatic HTTPS via Netlify

## 🆘 Support

If you need help:
1. Check `MIGRATION-GUIDE.md`
2. Review Astro docs: https://docs.astro.build
3. Decap CMS docs: https://decapcms.org/docs

---

**Ready to migrate?** Start with `MIGRATION-GUIDE.md` for the complete step-by-step process.
