# Steps 1-4: Export Your WordPress Site

## ⚠️ Important: You Must Do These Steps

These steps require **you to log into your WordPress admin**. I cannot do this remotely - only you have the login credentials.

**Estimated time:** 15-30 minutes  
**Difficulty:** Easy (just clicking buttons)

---

## Step 1: Log Into WordPress Admin

### What to do:
1. Open your web browser
2. Go to: **https://www.blake-jones.com/wp-admin**
3. Enter your WordPress username and password
4. Click **"Log In"**

### ✅ Success check:
You see the WordPress Dashboard with the left sidebar menu.

---

## Step 2: Create a Full Backup

### Why:
This is your safety net. If anything goes wrong, you can restore.

### What to do:

**Option A: Using Plugin (Recommended)**

1. In the left sidebar, click **Plugins**
2. Click **Add New**
3. In the search box, type: **All-in-One WP Migration**
4. Find the plugin with the orange airplane icon
5. Click **Install Now**
6. Wait for installation, then click **Activate**
7. In the left sidebar, find **"All-in-One WP Migration"** (near bottom)
8. Click on it
9. Click **Export**
10. Under "Export To", click **File**
11. Wait for the export to complete (may take 1-5 minutes)
12. Click **Download**
13. Save the file as: **blake-jones-backup.wpress**
14. Keep this file safe!

**Option B: Manual Export**
1. Tools → Export
2. Click "All content"
3. Download Export File
4. Also manually backup your /wp-content/uploads/ folder via FTP

### ✅ Success check:
You have a file named `blake-jones-backup.wpress` on your computer.

---

## Step 3: Export Content for Migration

### What to do:

1. In the WordPress left sidebar, click **Tools**
2. Click **Export**
3. Under "Choose what to export", select:
   - ☑️ **All content**
4. Click **Download Export File**
5. Save the file as: **blake-jones-export.xml**
6. Move this file to your **website-migration** folder:
   - Mac: `/Users/stuartblakejones/CascadeProjects/website-migration/`

### ✅ Success check:
You have `blake-jones-export.xml` in the website-migration folder.

---

## Step 4: Export Your Images

### Why:
Your WordPress images need to be copied to the new site.

### Option A: Plugin Method (Easiest)

1. In WordPress, go to **Plugins → Add New**
2. Search: **Export Media Library**
3. Install and activate the plugin
4. Go to **Tools → Export Media Library**
5. Choose format: **Folder (with year/month structure)** or **Single folder**
6. Click **Download Zip**
7. Extract the zip file
8. Copy all images to:
   - **website-migration/public/images/**

### Option B: FTP/SFTP Method

1. Connect to your web hosting via FTP (use FileZilla, Cyberduck, or similar)
2. Navigate to: `/wp-content/uploads/`
3. Download all folders (years like 2020, 2021, 2022, etc.)
4. Copy all images into:
   - **website-migration/public/images/**

### Option C: cPanel File Manager

1. Log into your web hosting cPanel
2. Open **File Manager**
3. Navigate to: `public_html/wp-content/uploads/`
4. Select all folders/files
5. Click **Compress** (create a zip)
6. Download the zip file
7. Extract and move images to:
   - **website-migration/public/images/**

### ✅ Success check:
Your images are in the `website-migration/public/images/` folder.

---

## Quick Verification

After completing Steps 1-4, you should have:

```
website-migration/
├── blake-jones-export.xml     ✅ Step 3
├── public/
│   └── images/
│       ├── photo1.jpg         ✅ Step 4
│       ├── photo2.jpg         ✅ Step 4
│       └── ...                ✅ Step 4
└── blake-jones-backup.wpress  ✅ Step 2 (keep safe!)
```

---

## Next: Run the Automation

Once you've completed Steps 1-4, run the automated migration:

### On Mac:
```bash
cd /Users/stuartblakejones/CascadeProjects/website-migration
./quick-migrate.sh
```

### On Windows:
```cmd
cd C:\Users\YourName\CascadeProjects\website-migration
quick-migrate.bat
```

This will:
- ✅ Install dependencies
- ✅ Convert your WordPress content
- ✅ Fix image paths
- ✅ Build the site
- ✅ Start a preview server

---

## Troubleshooting

### "I can't log into wp-admin"
- Try: https://www.blake-jones.com/wp-login.php
- Check your email for WordPress login credentials
- Use "Lost your password?" link if needed

### "The export is taking forever"
- Large sites take longer
- If it times out, try exporting in chunks:
  - Tools → Export → Posts only
  - Tools → Export → Pages only

### "I don't know how to download images"
- Contact your web host support
- Ask: "How do I download my wp-content/uploads folder?"
- Or ask me for help with a specific method

### "The migration script fails"
- Make sure `blake-jones-export.xml` is in the right folder
- Check that images are in `public/images/`
- Tell me the error message and I'll help

---

## Need Help?

**Stuck on a step?** Tell me:
1. Which step you're on
2. What you tried
3. What error you see (screenshot helps)

**I'll guide you through it!**

---

## After You Complete Steps 1-4

1. Run the automation script
2. Preview your site at http://localhost:4321
3. Tell me how it looks
4. We'll move to **Phase 2: Customize and Deploy**

**Ready? Start with Step 1: Log into your WordPress admin.**
