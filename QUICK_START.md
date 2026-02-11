# ⚡ QUICK START - Deploy in 10 Minutes

## 🎯 Goal
Get SentinelBacktest landing page live on the internet ASAP.

## 📋 Prerequisites
- GitHub account
- Vercel account (free, sign up with GitHub)

---

## 🚀 3 STEPS TO LIVE SITE

### Step 1: Push to GitHub (3 minutes)

**Create Repository:**
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `sentinelbacktest-landing`
3. Visibility: **PUBLIC** ✅
4. **Do NOT** add README, .gitignore, or license (we have them)
5. Click "Create repository"

**Push Code:**
```bash
cd /home/shado/.openclaw/workspace/sentinel-output/landing-page/

# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/sentinelbacktest-landing.git

# Push
git push -u origin main
```

✅ **Done!** Code is on GitHub.

---

### Step 2: Deploy to Vercel (5 minutes)

**Connect Vercel:**
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel

**Deploy Project:**
1. Click **"New Project"** (or "Add New...")
2. Find `sentinelbacktest-landing` in the list
3. Click **"Import"**
4. Vercel will auto-detect Next.js settings ✅
5. Click **"Deploy"** (don't change anything)

**Wait 2-3 minutes** for build to complete...

✅ **Done!** You'll get a URL like:
```
https://sentinelbacktest-landing-abc123.vercel.app
```

---

### Step 3: Test Live Site (2 minutes)

**Open the URL and verify:**
- [ ] Page loads
- [ ] All sections visible (scroll through)
- [ ] Dark mode looks good
- [ ] Click "Join Waitlist" button (should smooth scroll)
- [ ] Submit test email in form (will log to console for now)
- [ ] Check on mobile (use phone or Chrome DevTools → Toggle device toolbar)

**Share the URL:**
- Copy the Vercel URL
- Share on Twitter: "Landing page is live! [URL]"
- Share in Discord/Reddit when you post content
- Send to beta testers

✅ **LIVE!** 🎉

---

## 🎨 Optional: Custom Domain (10 minutes)

**Buy Domain:**
- Recommended: `sentinelbacktest.com`
- Buy from: Namecheap, Google Domains, Cloudflare

**Connect to Vercel:**
1. In Vercel dashboard: Project → Settings → Domains
2. Enter your domain: `sentinelbacktest.com`
3. Vercel shows DNS records to add
4. Go to your domain registrar → DNS settings
5. Add the A/CNAME records Vercel specified
6. Wait 24-48 hours for DNS propagation

---

## 📧 Optional: Email Integration (15 minutes)

**ConvertKit Setup:**
1. Sign up at [convertkit.com](https://convertkit.com) (free <1,000 subscribers)
2. Create new Form: "SentinelBacktest Beta Waitlist"
3. Get API key: Settings → Advanced → API Secret
4. Get Form ID: Forms → Your Form → Settings (ID in URL)

**Add to Vercel:**
1. Project → Settings → Environment Variables
2. Add: `NEXT_PUBLIC_CONVERTKIT_KEY` = [your API key]
3. Add: `NEXT_PUBLIC_CONVERTKIT_FORM_ID` = [your form ID]

**Update Code:**
See `DEPLOYMENT.md` for exact code changes to make in `app/page.tsx`.

**Redeploy:**
```bash
git add .
git commit -m "Add ConvertKit integration"
git push
```

Vercel auto-redeploys. Form now captures real emails!

---

## ❓ Troubleshooting

**Issue: Build fails on Vercel**
- Check build logs in Vercel dashboard
- Verify it builds locally: `npm run build`
- Check for TypeScript errors

**Issue: Page looks broken**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache
- Check browser console for errors

**Issue: Form doesn't submit**
- Email integration not set up yet (logs to console)
- Follow "Email Integration" steps above

**Issue: Can't push to GitHub**
- Check remote URL: `git remote -v`
- Verify you replaced YOUR-USERNAME with your actual username
- Check GitHub permissions

---

## 📞 Need Help?

1. Check `DEPLOYMENT.md` for detailed instructions
2. Check `README.md` for dev setup
3. Check `HANDOFF.md` for complete documentation
4. Google error messages
5. Ask ChatGPT: "I'm deploying Next.js to Vercel and getting [error]"

---

## 🎯 You're Done!

Landing page is live. Now:
1. ✅ Share the URL
2. ✅ Post on Reddit/Twitter (use Day 2 content)
3. ✅ Collect beta signups
4. ✅ Watch Vercel Analytics for traffic

**Time spent:** 10 minutes  
**Result:** Professional landing page live on the internet  

**LET'S GO!** 🚀
