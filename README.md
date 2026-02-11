# SentinelBacktest Landing Page

**Live Demo:** [Coming soon - Vercel deployment URL]

Production-ready landing page for SentinelBacktest - an automated backtest bias detection service for algorithmic traders.

## 🎯 Project Overview

SentinelBacktest helps algo traders find hidden biases in their backtests before going live. This landing page is designed to capture early beta users and demonstrate the $296K problem we solve.

### Key Messaging

- **Hero Hook:** "I found $296K in fake profits hiding in one backtest"
- **Core Problem:** Same-bar entry, grace period bias, missing slippage
- **Target Audience:** Serious algo traders (NinjaTrader, Python, TradeStation users)
- **Pricing:** $49/month beta (lock-in for life), $99/month after launch

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Shadcn UI
- **Deployment:** Vercel
- **Form Integration:** ConvertKit (placeholder - needs configuration)

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/[username]/sentinelbacktest-landing.git
cd sentinelbacktest-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SentinelBacktest landing page"
   git remote add origin https://github.com/[username]/sentinelbacktest-landing.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Environment Variables (if needed):**
   - Add ConvertKit API key when ready
   - Add analytics tokens (Plausible, Google Analytics, etc.)

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📧 Email Capture Integration

The form currently logs to console. To integrate with ConvertKit:

1. **Sign up for ConvertKit:** [convertkit.com](https://convertkit.com)

2. **Get API credentials:**
   - Navigate to Settings → Advanced → API Secret
   - Copy your API key and Form ID

3. **Update the form handler** in `app/page.tsx`:
   ```typescript
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     
     const response = await fetch('https://api.convertkit.com/v3/forms/[FORM_ID]/subscribe', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         api_key: process.env.NEXT_PUBLIC_CONVERTKIT_KEY,
         email: email,
         fields: { platform: platform }
       })
     });
     
     if (response.ok) setIsSubmitted(true);
   };
   ```

4. **Add environment variable:**
   ```bash
   # .env.local
   NEXT_PUBLIC_CONVERTKIT_KEY=your_key_here
   ```

## 🎨 Design Features

- **Mobile Responsive:** Optimized for all screen sizes
- **Dark Mode:** Professional dark theme (traders' preference)
- **Fast Loading:** <3 second load time target
- **Accessibility:** Semantic HTML, proper contrast ratios
- **SEO Optimized:** Meta tags, Open Graph, structured data

## 📊 Analytics Setup (Optional)

### Vercel Analytics

Already integrated! Just enable in Vercel dashboard.

### Plausible Analytics

```bash
npm install next-plausible
```

Add to `app/layout.tsx`:
```typescript
import PlausibleProvider from 'next-plausible'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <PlausibleProvider domain="sentinelbacktest.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🧪 Testing Checklist

Before going live, verify:

- [ ] All copy matches approved messaging
- [ ] Mobile layout works on phone (375px width)
- [ ] Email form validation works
- [ ] Smooth scrolling to waitlist section
- [ ] All links functional (Twitter, etc.)
- [ ] No console errors
- [ ] Page load <3 seconds (check with Lighthouse)
- [ ] SEO meta tags present
- [ ] Dark mode looks professional

## 📝 Content Sections

1. **Hero Section:** $296K hook + main CTA
2. **Problem Section:** 3 biases (same-bar, grace period, slippage)
3. **Case Study:** Strategy #2 before/after comparison
4. **How It Works:** 3-step process (Upload → Scan → Audit)
5. **Pricing:** Beta $49/month, post-beta $99/month
6. **Waitlist Form:** Email + platform selection
7. **Footer:** Attribution + social links

## 🔧 Customization

### Updating Copy

Edit `app/page.tsx` - all content is in the main component.

### Changing Colors

Modify `app/globals.css` for theme colors (Shadcn uses CSS variables).

### Adding Components

```bash
npx shadcn@latest add [component-name]
```

## 📄 License

MIT License - feel free to use as template for your own projects.

## 🤝 Contributing

This is a production landing page for SentinelBacktest. For issues or suggestions, open a GitHub issue.

## 📞 Contact

- **Twitter:** [@Sentinel_Algo](https://twitter.com/Sentinel_Algo)
- **Email:** [Add email when available]

---

**Built by a trader who lost money trusting backtests.**
