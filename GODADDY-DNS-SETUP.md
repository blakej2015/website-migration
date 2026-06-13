# GoDaddy DNS Setup for Blake-Jones.com

## Quick Reference

**Domain:** blake-jones.com  
**Current host:** GoDaddy  
**Target host:** Netlify

---

## Step-by-Step DNS Configuration

### 1. Log Into GoDaddy
1. Go to https://www.godaddy.com
2. Click **Sign In** (top right)
3. Enter your username/email and password
4. Click **My Products**

### 2. Access DNS Management
1. Find **Domains** section
2. Click **DNS** next to `blake-jones.com`
3. (Or click the domain name, then look for "Manage DNS")

### 3. Clear Existing Records
**Look for and DELETE these if they exist:**

**A Records for @ (root):**
- Any A record where "Name" is `@` or blank
- These point your root domain to old hosting

**CNAME Records for www:**
- Any CNAME where "Name" is `www`

**To delete:**
1. Find the record
2. Click the **pencil icon** (edit) or **trash icon** (delete)
3. Confirm deletion

### 4. Add New DNS Records

Click **"Add"** button and create these records:

#### Record 1: Root Domain (A Record)
| Field | Value |
|-------|-------|
| Type | **A** |
| Name | **@** (or leave blank for root) |
| Value | **75.2.60.5** |
| TTL | **600 seconds** (or 1/2 hour) |

Click **Save**

#### Record 2: WWW Subdomain (CNAME Record)
| Field | Value |
|-------|-------|
| Type | **CNAME** |
| Name | **www** |
| Value | **blake-jones.netlify.app** |
| TTL | **600 seconds** (or 1/2 hour) |

Click **Save**

### 5. Verify Records
Your DNS should now show:

```
Type    Name    Value                        TTL
A       @       75.2.60.5                    600 seconds
CNAME   www     blake-jones.netlify.app      600 seconds
```

### 6. Save Changes
- Click **Save** if there's a save button
- Some interfaces save automatically
- Wait for confirmation

---

## Verification Steps

### Check DNS Propagation
Use these tools to verify DNS is updating:

1. **WhatsMyDNS**: https://whatsmydns.net
   - Enter: `blake-jones.com`
   - Select: **A** record
   - Should show: `75.2.60.5` (or checkmarks)

2. **Command Line** (Mac/Linux):
   ```bash
   dig blake-jones.com
   ```
   Look for: `75.2.60.5`

3. **Command Line** (Windows):
   ```cmd
   nslookup blake-jones.com
   ```
   Look for: `75.2.60.5`

### Clear DNS Cache
If you don't see changes, clear your DNS cache:

**Windows:**
```cmd
ipconfig /flushdns
```

**Mac:**
```bash
sudo killall -HUP mDNSResponder
```

**Chrome Browser:**
1. Go to: `chrome://net-internals/#dns`
2. Click: **"Clear host cache"**

---

## Common Issues

### Issue: "A record already exists"
**Solution:** Delete the existing A record first, then add the new one.

### Issue: "CNAME conflict"
**Solution:** You can't have both A and CNAME for the same name. For `www`, use CNAME. For `@` (root), use A record.

### Issue: Changes not taking effect
**Solution:** 
1. DNS propagation takes time (15 min - 48 hours)
2. Check with WhatsMyDNS (not just your browser)
3. Try different network (mobile hotspot)

### Issue: "Cannot add this record"
**Solution:** Some GoDaddy plans have limitations. Contact GoDaddy support or check if you're using their "Website Builder" (which locks DNS).

---

## What These Records Do

### A Record (75.2.60.5)
- Points your root domain `blake-jones.com` to Netlify's servers
- This is Netlify's load balancer IP address
- Tells visitors where to find your site

### CNAME Record (blake-jones.netlify.app)
- Points `www.blake-jones.com` to your Netlify site
- When someone types www version, they get redirected to Netlify
- Must match your actual Netlify site URL

---

## After DNS is Set

### In Netlify Dashboard:
1. Go to Site settings → Domain management
2. You should see: `blake-jones.com` listed
3. Status: **"DNS verification successful"** or **"Waiting for DNS"**
4. Once verified: **"HTTPS certificate provisioned"**

### Test Your Site:
1. Open: `https://blake-jones.com`
2. Should show your Astro site
3. Check: Lock icon in browser (HTTPS working)

### Force HTTPS:
1. Netlify → Site settings → HTTPS
2. Enable: **"Force HTTPS"**
3. This redirects HTTP to HTTPS automatically

---

## Backup Your GoDaddy Settings

Before making changes, consider exporting your DNS zone:
1. GoDaddy DNS management
2. Look for **"Export Zone File"** (sometimes under Advanced)
3. Save as backup

Or just take screenshots of current records.

---

## Need Help?

**GoDaddy Support:**
- https://godaddy.com/help
- Phone: 1-480-505-8877
- Live chat available 24/7

**Netlify Support:**
- https://docs.netlify.com
- Community forums: https://answers.netlify.com

**Check Status:**
- Netlify status: https://netlifystatus.com
- GoDaddy status: Check their Twitter @GoDaddyHelp

---

## Quick Reference Card

```
┌─────────────────────────────────────────┐
│  Blake-Jones.com DNS Settings           │
├─────────────────────────────────────────┤
│                                         │
│  Type: A                                │
│  Name: @                                │
│  Value: 75.2.60.5                       │
│  TTL: 600 seconds                       │
│                                         │
│  Type: CNAME                            │
│  Name: www                              │
│  Value: blake-jones.netlify.app         │
│  TTL: 600 seconds                       │
│                                         │
└─────────────────────────────────────────┘
```

**Save this! You'll need these exact values when configuring GoDaddy.**
