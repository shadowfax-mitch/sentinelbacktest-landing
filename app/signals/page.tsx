'use client';

import { useState } from 'react';

// ─── Kit (ConvertKit) form ID ───────────────────────────────────────────────
const KIT_FORM_ID = '9082725';
const KIT_API_KEY = 'Ak1AieraF9kC-T-CxNMmYA';

// ─── Pricing Tiers ──────────────────────────────────────────────────────────
const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/forever',
    badge: null,
    tagline: 'Get a feel for the regime.',
    features: [
      'Daily HMM regime report (email)',
      'Market condition summary (Bull / Bear / Chop)',
      'Weekly educational breakdown',
      'Community Discord access',
    ],
    cta: 'Join Free',
    ctaStyle: 'border',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$97',
    period: '/month',
    badge: 'Most Popular',
    tagline: 'Real alerts. Real entries. Real exits.',
    features: [
      'Everything in Free',
      'Real-time 0DTE iron condor alerts (SMS + email)',
      'Exact entry prices, strikes, & expiry',
      'Stop-loss and profit-target levels',
      'Regime confidence score on every alert',
      'Trade journal export (CSV)',
    ],
    cta: 'Start Pro — $97/mo',
    ctaStyle: 'solid',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$197',
    period: '/month',
    badge: 'Best Value',
    tagline: 'Alerts + live coaching to internalize the edge.',
    features: [
      'Everything in Pro',
      'Weekly 30-min strategy call with Mitch',
      'Portfolio-level position sizing guidance',
      'Early access to new scanner outputs',
      'Priority Slack/Discord support',
      'Monthly performance attribution report',
    ],
    cta: 'Go Premium — $197/mo',
    ctaStyle: 'outline-gold',
    highlight: false,
  },
];

// ─── Social Proof Stats ─────────────────────────────────────────────────────
const stats = [
  { value: '4.29', label: 'Sharpe Ratio', sub: 'walk-forward tested' },
  { value: '5.5yr', label: 'Test Window', sub: 'out-of-sample data' },
  { value: '23,520+', label: 'Strategies Tested', sub: 'to find this edge' },
  { value: '0DTE', label: 'Focus', sub: 'S&P 500 iron condors' },
];

// ─── How It Works Steps ─────────────────────────────────────────────────────
const steps = [
  {
    num: '01',
    title: 'HMM Reads the Regime',
    body: 'Our Hidden Markov Model analyzes volatility, breadth, and momentum to classify the market state in real time: Trending, Ranging, or High-Volatility.',
    icon: '🧠',
  },
  {
    num: '02',
    title: 'Scanner Finds the Setup',
    body: 'The 0DTE iron condor scanner only fires when the regime says "range-bound." No setups in trending markets. No fighting the tape.',
    icon: '🎯',
  },
  {
    num: '03',
    title: 'You Get the Alert',
    body: 'Exact strikes, entry price, stops, and targets — delivered via SMS and email before market open. No charts to read. No guessing.',
    icon: '📲',
  },
];

// ─── FAQ ────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is a 0DTE iron condor?',
    a: 'A same-day options trade that profits when the market stays in a range. You sell an out-of-the-money call spread and put spread on SPX/SPY that both expire worthless at end of day. Max profit is the premium collected. Max loss is defined and capped.',
  },
  {
    q: 'Why does the regime classifier matter?',
    a: 'Iron condors get crushed in trending markets. Most alert services send signals regardless of conditions — that\'s how you blow up. Our HMM classifier sits between the scanner and you: no signal fires unless the market is in a range-bound state. Most services tell you WHAT. We tell you WHEN.',
  },
  {
    q: 'What broker do I need?',
    a: 'Any broker with SPX/SPY 0DTE options and a Level 3 or 4 options approval. Tastytrade, IBKR, TD Ameritrade (thinkorswim), and Schwab all work well.',
  },
  {
    q: 'How much capital do I need?',
    a: 'Minimum ~$5,000 to trade one iron condor on SPY. SPX requires more (~$25k+). Pro tip: paper trade for the first 2 weeks to understand the alerts before going live.',
  },
  {
    q: 'Is this financial advice?',
    a: 'No. Sentinel Signals is an educational alert service. All trades are for informational purposes only. Options trading involves significant risk. Past performance does not guarantee future results.',
  },
];

// ─── Waitlist Form Component ─────────────────────────────────────────────────
function WaitlistForm({ tier }: { tier?: string }) {
  const [email, setEmail] = useState('');
  const [selectedTier, setSelectedTier] = useState(tier || 'Pro');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: KIT_API_KEY,
            email,
            fields: { tier: selectedTier, source: 'sentinel-signals-page' },
            tags: ['sentinel-signals', `signals-${selectedTier.toLowerCase()}`],
          }),
        }
      );

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Connection error. Check your internet and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 px-6 bg-green-950/50 border border-green-700 rounded-xl">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-400 mb-2">You&apos;re on the list!</h3>
        <p className="text-slate-300">
          We&apos;ll email you when <strong>Sentinel Signals {selectedTier}</strong> launches.
          Watch for a confirmation from <em>sentinelalgotrading@gmail.com</em>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="tier" className="block text-sm font-medium text-slate-300 mb-1">
          Which tier interests you?
        </label>
        <select
          id="tier"
          value={selectedTier}
          onChange={(e) => setSelectedTier(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="Free">Free — Daily regime report</option>
          <option value="Pro">Pro — $97/mo, real-time alerts</option>
          <option value="Premium">Premium — $197/mo, alerts + strategy calls</option>
        </select>
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-lg transition-colors"
      >
        {isSubmitting ? 'Joining...' : 'Join the Waitlist →'}
      </button>

      <p className="text-xs text-slate-500 text-center">
        No spam. Unsubscribe anytime. This is a waitlist — no charge until launch.
      </p>
    </form>
  );
}

// ─── FAQ Item ────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-slate-800/50 transition-colors"
      >
        <span className="font-medium text-slate-200">{q}</span>
        <span className="text-slate-400 text-xl ml-4">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-400 leading-relaxed border-t border-slate-700 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function SignalsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-bold text-blue-400 text-lg tracking-tight">⬡ Sentinel Algo</span>
          <a
            href="#waitlist"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-semibold transition-colors"
          >
            Join Waitlist →
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-4 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950 border border-blue-700 text-blue-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Now accepting early access waitlist
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          <span className="text-white">Regime-Filtered</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            0DTE Alerts
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed">
          Our HMM classifier tells you <strong className="text-blue-300">WHEN</strong> to trade.
          <br className="hidden md:block" />
          Most services just tell you <em className="text-slate-400">what</em>.
        </p>

        <p className="text-slate-500 text-base max-w-2xl mx-auto mb-10">
          We only send alerts when the market regime is right for iron condors.
          That's the edge most 0DTE services are missing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl text-lg font-bold transition-colors shadow-lg shadow-blue-900/40"
          >
            Join the Waitlist — Free →
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 border border-slate-600 hover:border-slate-400 rounded-xl text-lg font-medium transition-colors text-slate-300"
          >
            How It Works ↓
          </a>
        </div>
      </section>

      {/* ── SOCIAL PROOF STATS ── */}
      <section className="py-12 px-4 border-y border-slate-800 bg-slate-950/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="text-3xl md:text-4xl font-extrabold text-blue-400">{s.value}</div>
              <div className="text-slate-200 font-semibold mt-1">{s.label}</div>
              <div className="text-slate-500 text-sm">{s.sub}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-6">
          Sharpe 4.29 over 5.5 years of walk-forward testing — not cherry-picked backfits.
        </p>
      </section>

      {/* ── DIFFERENTIATION ── */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* What others do */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
            <div className="text-2xl mb-4">❌</div>
            <h3 className="text-xl font-bold text-slate-300 mb-4">Other Alert Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                Send alerts based on technical patterns alone
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                Ignore market regime — trade trending and ranging days the same way
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                No walk-forward validation — backtests are optimized in-sample
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                Black box signals — no explanation of why a trade was taken
              </li>
            </ul>
          </div>

          {/* What we do */}
          <div className="bg-blue-950/40 border border-blue-700 rounded-2xl p-8">
            <div className="text-2xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-blue-300 mb-4">Sentinel Signals</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                HMM regime gate — alerts only fire in range-bound conditions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                5.5 years of walk-forward testing on out-of-sample data
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                Sharpe 4.29 — risk-adjusted, not just raw returns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                Full transparency: entry, strikes, stops, targets, & regime confidence
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 px-4 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Two layers of intelligence. One clean alert. Trade with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center space-y-4">
                <div className="text-5xl">{step.icon}</div>
                <div className="text-blue-400 text-sm font-mono font-bold">{step.num}</div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Start free. Upgrade when you&apos;re convinced. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 border flex flex-col ${
                tier.highlight
                  ? 'bg-blue-950/60 border-blue-500 shadow-xl shadow-blue-900/30'
                  : 'bg-slate-900/80 border-slate-700'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      tier.highlight
                        ? 'bg-blue-500 text-white'
                        : 'bg-yellow-500 text-yellow-950'
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-400 pb-1">{tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm">{tier.tagline}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-colors ${
                  tier.ctaStyle === 'solid'
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : tier.ctaStyle === 'outline-gold'
                    ? 'border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10'
                    : 'border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          🔒 Stripe-powered payments. Cancel anytime. No contracts.
        </p>
      </section>

      {/* ── TESTIMONIAL / AUTHORITY ── */}
      <section className="py-16 px-4 bg-slate-950/80 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <blockquote className="text-xl md:text-2xl italic text-slate-300 leading-relaxed">
            &ldquo;After 23,520+ strategy tests, we discovered iron condors don&apos;t fail because
            of bad strikes — they fail because of bad timing. The HMM regime layer is
            the difference between a Sharpe of 0.6 and 4.29.&rdquo;
          </blockquote>
          <div>
            <div className="font-bold text-slate-200">Mitch</div>
            <div className="text-slate-500 text-sm">Founder, Sentinel Algo</div>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-4 max-w-md mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">4.29</div>
              <div className="text-xs text-slate-500">Sharpe Ratio</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">5.5yr</div>
              <div className="text-xs text-slate-500">Walk-Forward</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">0DTE</div>
              <div className="text-xs text-slate-500">Same-Day Edge</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAITLIST FORM ── */}
      <section id="waitlist" className="py-20 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Waitlist
            </h2>
            <p className="text-slate-400">
              We&apos;re launching Sentinel Signals to a limited number of early subscribers.
              Lock in your spot now — launch pricing guaranteed.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
            <WaitlistForm />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>✓ No credit card required</span>
            <span>✓ Unsubscribe anytime</span>
            <span>✓ Launch pricing locked in</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Stop Trading Blind. <br />
            <span className="text-blue-400">Know the Regime First.</span>
          </h2>
          <p className="text-slate-400">
            14 subscribers at $147/month funds ongoing research. Every subscriber
            helps us publish more, build better tools, and beat the market together.
          </p>
          <a
            href="#waitlist"
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl text-lg font-bold transition-colors shadow-lg shadow-blue-900/40"
          >
            Join the Waitlist →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-800 py-10 px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex justify-center gap-6 text-sm text-slate-400">
            <a href="https://twitter.com/Sentinel_Algo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              @Sentinel_Algo
            </a>
            <a href="mailto:sentinelalgotrading@gmail.com" className="hover:text-blue-400 transition-colors">
              sentinelalgotrading@gmail.com
            </a>
          </div>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Sentinel Signals is an educational alert service.
            Nothing here constitutes financial advice. Options trading involves significant
            risk of loss and is not appropriate for all investors. Past performance does
            not guarantee future results. Trade responsibly.
          </p>
          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} Sentinel Algo. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
