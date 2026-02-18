import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools — Sentinel Algo',
  description:
    'Free and upcoming quantitative trading tools from Sentinel Algo: market regime classifier, 0DTE options scanner, and Sentinel Shield backtest auditor.',
  openGraph: {
    title: 'Tools — Sentinel Algo',
    description:
      'Free and upcoming quant trading tools: regime classifier, 0DTE scanner, Sentinel Shield. Built by traders, for traders.',
    type: 'website',
    images: ['/sentinel-hero-logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools — Sentinel Algo',
    description: 'Free quant trading tools: regime classifier, 0DTE scanner, Sentinel Shield backtest auditor.',
    images: ['/sentinel-hero-logo.jpg'],
  },
};

const tools = [
  {
    name: 'Sentinel Shield',
    status: 'beta' as const,
    statusLabel: 'Beta',
    icon: '🛡️',
    tagline: 'Backtest Bias & Overfitting Detector',
    description:
      'AI-powered audit system that analyzes your backtest results for look-ahead bias, overfitting, small-sample deception, and curve-fitting artifacts. We caught $300K+ in phantom profits from backtests before they went live.',
    features: [
      'Look-ahead bias detection',
      'Overfitting / curve-fit scoring',
      'Walk-forward validation analysis',
      'Regime-sensitivity breakdown',
      'Sample-size adequacy check (100+ trades)',
    ],
    cta: 'Join Waitlist',
    ctaHref: '/#waitlist',
    color: 'purple',
  },
  {
    name: 'Regime Classifier',
    status: 'coming' as const,
    statusLabel: 'Coming Soon',
    icon: '🌐',
    tagline: 'Real-Time Market Regime Detection',
    description:
      'The same regime-detection layer that powers our Pyramidal Coherence Strategy — exposed as a standalone tool. Classify MES/ES market conditions as trending, mean-reverting, or choppy in real time. Know which game the market is playing before you place a trade.',
    features: [
      'Live regime classification (MES, ES, NQ)',
      'Volatility-state detection',
      'Drawdown-from-peak macro stress gauge',
      'Historical regime labeling for backtesting',
      'API access for NinjaTrader / Python integration',
    ],
    cta: 'Join Waitlist',
    ctaHref: '/#waitlist',
    color: 'blue',
  },
  {
    name: '0DTE Scanner',
    status: 'coming' as const,
    statusLabel: 'Coming Soon',
    icon: '⚡',
    tagline: 'Same-Day Expiry Options Intelligence',
    description:
      'A regime-aware scanner for 0DTE SPX/SPY options. Identifies high-probability entry windows based on intraday regime state, implied volatility skew, and historical same-expiry behavior. Built on the research that found 96.7% of static strategies fail.',
    features: [
      'Regime-filtered 0DTE setups',
      'IV rank & skew monitoring',
      'Expected move vs. realized move analysis',
      'Pre-market regime assessment',
      'Alert system for high-confidence windows',
    ],
    cta: 'Get Notified',
    ctaHref: '/#waitlist',
    color: 'green',
  },
];

const colorMap: Record<string, { badge: string; border: string; cta: string; heading: string }> = {
  purple: {
    badge: 'bg-purple-900/40 text-purple-300 border border-purple-800/50',
    border: 'border-purple-900/50',
    cta: 'bg-purple-600 hover:bg-purple-700',
    heading: 'text-purple-400',
  },
  blue: {
    badge: 'bg-blue-900/40 text-blue-300 border border-blue-800/50',
    border: 'border-blue-900/50',
    cta: 'bg-blue-600 hover:bg-blue-700',
    heading: 'text-blue-400',
  },
  green: {
    badge: 'bg-green-900/40 text-green-300 border border-green-800/50',
    border: 'border-green-900/50',
    cta: 'bg-green-600 hover:bg-green-700',
    heading: 'text-green-400',
  },
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">

        {/* Back */}
        <div className="mb-10">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            ← sentinel-algo.com
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-blue-400">Tools</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            The infrastructure we built to survive 23,520+ strategy tests — now becoming
            standalone tools for serious algo traders. Free where possible, fair pricing everywhere else.
          </p>
        </div>

        {/* Tools */}
        <div className="space-y-10 mb-16">
          {tools.map((tool) => {
            const colors = colorMap[tool.color];
            return (
              <div
                key={tool.name}
                className={`bg-slate-800/50 border ${colors.border} rounded-xl p-8`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <div>
                      <h2 className={`text-2xl font-bold ${colors.heading}`}>{tool.name}</h2>
                      <p className="text-slate-400 text-sm">{tool.tagline}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                    {tool.statusLabel}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-6">{tool.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {tool.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={tool.ctaHref}
                  className={`inline-block ${colors.cta} text-white font-semibold px-6 py-3 rounded-lg transition text-sm`}
                >
                  {tool.cta} →
                </Link>
              </div>
            );
          })}
        </div>

        {/* Philosophy box */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Why We Build Tools</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Every tool here came from a real pain point we hit during the 10-month development
            of PCS. Sentinel Shield exists because we needed to catch our own biases. The Regime
            Classifier exists because we couldn&apos;t trust a strategy without knowing which market
            game was being played.
          </p>
          <p className="text-slate-300 leading-relaxed">
            We&apos;re building the infrastructure for ourselves first. You benefit because the best
            tools get built by people who actually need them.
          </p>
        </div>

        {/* CTA strip */}
        <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get Early Access</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Join the waitlist to be first in line when tools launch. Early supporters get
            lifetime discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/#waitlist"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Join Waitlist
            </Link>
            <a
              href="https://twitter.com/Sentinel_Algo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition"
            >
              𝕏 Follow for updates
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
