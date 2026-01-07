# 🚀 GitHub Pages Deployment Guide

## Quick Deploy (3 Steps)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Repository settings:
   - **Name**: `hackwarts-hackathon-2026` (or any name you prefer)
   - **Description**: "Hackwarts Hackathon 2026 - Harry Potter themed inter-college hackathon website"
   - **Visibility**: Public (required for free GitHub Pages)
   - **Do NOT** initialize with README (we already have one)
4. Click **"Create repository"**

---

### Step 2: Push Your Code

Copy and paste these commands in PowerShell (in your project directory):

```powershell
# Add GitHub as remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/hackwarts-hackathon-2026.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push code to GitHub
git push -u origin main
```

> 💡 **Tip**: Replace `YOUR-USERNAME` with your actual GitHub username!

---

### Step 3: Enable GitHub Pages

1. On your GitHub repository page, click **Settings** (top right)
2. Scroll down and click **Pages** (left sidebar)
3. Under **"Source"**:
   - Select **"Deploy from a branch"**
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes for deployment

Your site will be live at:
```
https://YOUR-USERNAME.github.io/hackwarts-hackathon-2026/
```

---

## Verification Checklist

After deployment, test these:

- [ ] Homepage loads with magical hero section
- [ ] All house cards display correctly
- [ ] House detail pages (Gryffindor, Slytherin, etc.) open
- [ ] Registration form displays all steps
- [ ] **Payment QR code** shows correctly in Step 4
- [ ] UPI ID `satyasisir@axl` is visible
- [ ] Mobile view works (use Chrome DevTools or phone)
- [ ] Bottom navigation works

---

## Troubleshooting

### Images Not Loading?
- All paths are relative and should work automatically
- Check browser console (F12) for errors
- Verify files are in `assets/images/` folder

### Payment QR Not Showing?
- File is located at: `assets/images/payment-qr.jpeg`
- Reference in HTML: `<img src="assets/images/payment-qr.jpeg">`
- Clear browser cache and refresh

### Registration Form Issues?
- Form uses localStorage (client-side only)
- To connect to a backend, modify `js/form.js`
- Current setup: data saved in browser only

---

## Custom Domain (Optional)

Want to use your own domain like `hackathon.yoursite.com`?

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Add a `CNAME` file in your repository root:
   ```
   hackathon.yoursite.com
   ```
3. In GitHub Pages settings, enter your domain
4. Configure DNS at your registrar:
   - Type: `CNAME`
   - Name: `hackathon` (or `@` for root)
   - Value: `YOUR-USERNAME.github.io`

---

## Future Updates

To update your website after initial deployment:

```powershell
# Make changes to your files, then:
git add .
git commit -m "Update: describe your changes"
git push
```

GitHub Pages will automatically rebuild in 1-2 minutes!

---

## Support

- **GitHub Pages Docs**: https://docs.github.com/pages
- **Troubleshooting**: https://docs.github.com/pages/getting-started-with-github-pages/troubleshooting-404-errors

---

**Ready to go live! 🎉✨**
