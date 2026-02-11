# Deployment Guide - SentinelBacktest Landing Page

## ✅ Pre-Deployment Checklist

- [x] Project builds successfully (`npm run build`)
- [x] All copy matches approved messaging
- [x] Mobile responsive design
- [x] Dark mode theme applied
- [x] SEO meta tags configured
- [x] Email capture form implemented
- [ ] ConvertKit integration (needs API key)
- [ ] GitHub repository created
- [ ] Vercel deployment
- [ ] Custom domain configured (optional)

## 🚀 Quick Deploy (5 minutes)

### Step 1: Create GitHub Repository

```bash
# In the project directory
git init
git add .
git commit -m "Initial commit: SentinelBacktest landing page"

# Create a new repository on GitHub named: sentinelbacktest-landing
# Make it PUBLIC

# Then push:
git branch -M main
git remote add origin https://github.com/[YOUR-USERNAME]/sentinelbacktest-landing.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Import `sentinelbacktest-landing` repository
4. Vercel will auto-detect Next.js - no config needed
5. Click **"Deploy"**
6. Wait 2-3 minutes for deployment

**You'll get a live URL like:** `https://sentinelbacktest-landing-abc123.vercel.app`

### Step 3: Test the Deployment

Visit your Vercel URL and verify:
- [ ] Page loads quickly (<3 seconds)
- [ ] All sections visible
- [ ] Mobile layout works (use browser dev tools)
- [ ] Email form works (submit test email)
- [ ] Smooth scroll to waitlist section
- [ ] No console errors

## 📧 ConvertKit Integration (Optional - Can do later)

### Get ConvertKit Credentials

1. Sign up at [convertkit.com](https://convertkit.com) (free tier OK for <1,000 subscribers)
2. Create a new Form in ConvertKit dashboard
3. Get your:
   - API Secret Key (Settings → Advanced → API Secret)
   - Form ID (from the form you created)

### Add to Vercel

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Environment Variables**
3. Add:
   ```
   Name: NEXT_PUBLIC_CONVERTKIT_KEY
   Value: [your API key]
   ```
4. Add:
   ```
   Name: NEXT_PUBLIC_CONVERTKIT_FORM_ID
   Value: [your form ID]
   ```

### Update Code

In `app/page.tsx`, replace the `handleSubmit` function:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: process.env.NEXT_PUBLIC_CONVERTKIT_KEY,
          email: email,
          fields: { platform: platform }
        })
      }
    );
    
    if (response.ok) {
      setIsSubmitted(true);
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('Something went wrong. Please try again.');
  }
};
```

Push the changes:
```bash
git add .
git commit -m "Add ConvertKit integration"
git push
```

Vercel will auto-redeploy.

## 🎨 Custom Domain (Optional)

### Add Custom Domain

1. Buy domain (e.g., `sentinelbacktest.com` on Namecheap, Google Domains)
2. In Vercel dashboard: **Settings** → **Domains**
3. Add your domain
4. Vercel will show DNS records to add
5. Add the records in your domain registrar's DNS settings
6. Wait 24-48 hours for DNS propagation

### Recommended Domain

`sentinelbacktest.com` or `sentinel-backtest.com`

## 📊 Analytics Setup (Optional)

### Vercel Analytics (Built-in, Free)

1. In Vercel dashboard: **Analytics** tab
2. Click **Enable Analytics**
3. Done! You'll see page views, visitors, performance

### Plausible (Recommended for better insights)

```bash
npm install next-plausible
```

Add to `.env.local`:
```
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=sentinelbacktest.com
```

Update `app/layout.tsx`:
```typescript
import PlausibleProvider from 'next-plausible'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN!} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

## 🧪 Post-Deployment Testing

Use these tools to verify quality:

### 1. Google Lighthouse (Performance)

- Open deployed site in Chrome
- Right-click → Inspect → Lighthouse tab
- Run audit
- **Target scores:**
  - Performance: 90+
  - Accessibility: 95+
  - SEO: 100
  - Best Practices: 90+

### 2. Mobile Testing

- Use Chrome DevTools mobile emulation
- Test on iPhone SE (375px) and iPhone 14 Pro Max (430px)
- Verify all sections readable and CTAs tappable

### 3. Form Testing

- Submit test email
- Check ConvertKit dashboard for new subscriber
- Verify platform field captured correctly

## 🔧 Common Issues & Fixes

### Issue: Page loads slowly

**Fix:** Enable Vercel's Image Optimization
- Make sure you're using Next.js `<Image>` component (we don't have images yet, so this is OK)

### Issue: Form not submitting

**Check:**
1. ConvertKit API key is correct
2. Form ID is correct
3. Environment variables are set in Vercel
4. You've redeployed after adding env vars

### Issue: Dark mode not working

**Fix:** Verify `className="dark"` is on `<html>` tag in `app/layout.tsx`

### Issue: Build fails on Vercel

**Check:**
1. `npm run build` works locally
2. All dependencies in `package.json`
3. No TypeScript errors
4. Node version compatible (18+)

## 📈 Success Metrics to Track

Once live, monitor:

| Metric | Target | Check |
|--------|--------|-------|
| Page Views | Track daily | Vercel Analytics |
| Bounce Rate | <60% | Plausible |
| Time on Page | >30 seconds | Plausible |
| Conversion Rate | 3-8% | Signups ÷ Visitors |
| Load Time | <3 seconds | Lighthouse |

## 🎯 Next Steps After Deployment

1. **Share the URL** in Reddit posts, Twitter threads, Discord
2. **Test the funnel:** Visit → Read → Sign up
3. **Monitor signups:** Check ConvertKit daily
4. **Iterate on copy:** If conversion <3%, test new messaging
5. **Add social proof:** Once you have beta users, add testimonials

## 📞 Support

If you run into issues:

1. Check Vercel deployment logs
2. Test locally first (`npm run dev`)
3. Verify environment variables
4. Check browser console for errors

---

**DELIVERABLES COMPLETED:**

✅ Landing page built (Next.js 14 + TypeScript + Tailwind + Shadcn UI)  
✅ All 7 sections included (Hero, Problem, Case Study, How It Works, Pricing, Email Form, Footer)  
✅ Mobile responsive  
✅ Dark mode theme  
✅ SEO optimized  
✅ Production build successful  
✅ README with setup instructions  
✅ Deployment guide created  

**READY TO DEPLOY:** Just need GitHub repo creation + Vercel connection (5 minutes)
