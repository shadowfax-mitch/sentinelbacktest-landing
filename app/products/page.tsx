'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

const products = [
  {
    name: 'Regime Classifier API',
    icon: '🌐',
    tagline: 'Real-time market regime classification',
    description:
      'REST API for real-time market regime detection. Know if the market is trending, mean-reverting, or choppy before you enter a trade. The same regime logic that powers our Sharpe 4.29 PCS strategy.',
    features: [
      'Real-time regime classification (MES, ES, NQ)',
      'Historical regime data for backtesting',
      'Volatility state detection',
      'Sub-second response times',
      'JSON API with code samples (Python, C#, JavaScript)',
    ],
    pricing: [
      { tier: 'Basic', price: '$19/mo', features: ['1,000 API calls/day', 'MES/ES support', 'Email support'] },
      { tier: 'Pro', price: '$49/mo', features: ['10,000 calls/day', 'All instruments', 'Priority support', 'Historical data'] },
      { tier: 'Enterprise', price: '$99/mo', features: ['Unlimited calls', 'Custom integrations', 'SLA guarantee', 'Phone support'] },
    ],
    cta: 'View on GitHub',
    ctaHref: 'https://github.com/shadowfax-mitch/regime-api',
    color: 'blue',
    status: 'live',
  },
  {
    name: 'MCP Servers',
    icon: '🤖',
    tagline: 'AI agent tools for market intelligence',
    description:
      'Model Context Protocol (MCP) servers that give Claude and other AI agents access to real-time market regimes and Kalshi prediction markets. Open source, free forever.',
    features: [
      'Regime MCP: Live market regime classification for AI agents',
      'Kalshi MCP: Prediction market data (elections, Fed rates, etc.)',
      'Easy integration with Claude Desktop, OpenClaw, and MCP-compatible agents',
      'Zero-config setup with environment variables',
      'Active maintenance and community support',
    ],
    pricing: [
      { tier: 'Open Source', price: 'FREE', features: ['100% open source', 'Community support', 'Self-hosted'] },
    ],
    cta: 'Regime MCP →',
    ctaHref: 'https://github.com/shadowfax-mitch/regime-mcp-server',
    secondaryCta: 'Kalshi MCP →',
    secondaryHref: 'https://github.com/shadowfax-mitch/kalshi-mcp-server',
    color: 'green',
    status: 'live',
  },
  {
    name: 'PCS Regime Indicator for NinjaTrader 8',
    icon: '📊',
    tagline: 'Real-time regime classification overlay',
    description:
      'A NinjaTrader 8 indicator that displays real-time market regime classification directly on your charts. See trending, mean-reverting, or choppy conditions as they happen. Perfect for discretionary traders and strategy developers.',
    features: [
      'Real-time regime overlay on NT8 charts',
      'Color-coded regime zones (trend/mean-revert/chop)',
      'Regime change alerts (audio + visual)',
      'Compatible with any NinjaTrader strategy',
      'Includes historical regime labeling for backtesting',
    ],
    pricing: [
      { tier: 'Single License', price: '$99', features: ['1 machine', 'Lifetime updates', 'Email support'] },
      { tier: 'Multi License', price: '$249', features: ['3 machines', 'Lifetime updates', 'Priority support'] },
      { tier: 'Pro', price: '$499', features: ['Unlimited machines', 'Source code included', 'Custom regime tuning'] },
    ],
    cta: 'Join Waitlist',
    ctaHref: '/#waitlist',
    color: 'purple',
    status: 'coming',
  },
  {
    name: 'Sentinel Shield',
    icon: '🛡️',
    tagline: 'AI agent runtime security',
    description:
      'Prevent AI agents from leaking secrets, spending money without approval, or executing destructive commands. Built for OpenClaw, compatible with any MCP-based agent framework. Protect your infrastructure from agentic chaos.',
    features: [
      'Command whitelisting and approval flows',
      'Secret detection (API keys, tokens, passwords)',
      'Spending caps and transaction alerts',
      'Audit logging of all agent actions',
      'Community rules + custom policy engine',
    ],
    pricing: [
      { tier: 'Community', price: 'FREE', features: ['Basic command filtering', 'Secret detection', 'Community rule sets'] },
      { tier: 'Pro', price: '$19/mo', features: ['Custom policies', 'Advanced audit logs', 'Priority support', 'Team sync'] },
    ],
    cta: 'Get on ClawHub',
    ctaHref: 'https://clawhub.com',
    color: 'red',
    status: 'live',
  },
];

const services = [
  {
    name: 'Custom Trading Bot Development',
    icon: '⚙️',
    tagline: 'Automated strategies built to your specs',
    description:
      'We build custom trading bots in Python, C#, or NinjaScript. Options, futures, equities. Mean reversion, breakout, regime-aware hybrids. You define the logic, we handle the execution, risk management, and testing.',
    deliverables: [
      'Strategy coded in your preferred platform (NinjaTrader, Python, etc.)',
      'Backtested with regime analysis and walk-forward validation',
      'Risk management (stop-loss, position sizing, drawdown limits)',
      'Live deployment support and 30-day bug fixes',
      'Documentation and strategy logic explanation',
    ],
    startingPrice: 'Starting at $100',
    timeline: '1-2 weeks typical turnaround',
    cta: 'Email Us',
    ctaHref: 'mailto:sentinelalgotrading@gmail.com?subject=Custom Bot Development Inquiry',
    color: 'blue',
  },
  {
    name: 'AI Agent Consulting',
    icon: '🧠',
    tagline: 'OpenClaw setup, custom skills, automation',
    description:
      'Get your AI agents doing real work. We help you set up OpenClaw, build custom MCP servers, automate trading research, backtest validation, and integrate with your existing tools (NinjaTrader, Tastyworks, IBKR).',
    deliverables: [
      'OpenClaw installation and configuration',
      'Custom MCP skill development (trading APIs, data feeds, etc.)',
      'Agent automation workflows (backtesting, signal generation, reporting)',
      'Integration with existing platforms and tools',
      '1-month post-launch support',
    ],
    startingPrice: 'Starting at $50',
    timeline: '1-3 days typical setup',
    cta: 'Email Us',
    ctaHref: 'mailto:sentinelalgotrading@gmail.com?subject=AI Agent Consulting Inquiry',
    color: 'purple',
  },
  {
    name: '0DTE Signals (Beta)',
    icon: '⚡',
    tagline: 'AI-powered daily iron condor alerts',
    description:
      'Daily alerts for 0DTE SPX iron condor setups. Entry windows identified by regime analysis + IV skew + expected move calculations. Delivered every morning before market open. High-probability, low-stress same-day options trading.',
    deliverables: [
      'Daily morning alert (pre-market) with setup details',
      'Strike selection based on regime + IV analysis',
      'Entry timing window and risk parameters',
      'Exit guidance (profit target, stop-loss, time-based)',
      'Weekly performance review and regime commentary',
    ],
    startingPrice: '$97/mo',
    timeline: 'Daily alerts, cancel anytime',
    cta: 'Join Beta',
    ctaHref: '#signals-signup',
    color: 'orange',
    isBeta: true,
    hasSignupForm: true,
  },
];

const colorMap: Record<string, { badge: string; border: string; cta: string; heading: string; ctaSecondary?: string }> = {
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
    ctaSecondary: 'bg-green-700/50 hover:bg-green-700',
    heading: 'text-green-400',
  },
  red: {
    badge: 'bg-red-900/40 text-red-300 border border-red-800/50',
    border: 'border-red-900/50',
    cta: 'bg-red-600 hover:bg-red-700',
    heading: 'text-red-400',
  },
  orange: {
    badge: 'bg-orange-900/40 text-orange-300 border border-orange-800/50',
    border: 'border-orange-900/50',
    cta: 'bg-orange-600 hover:bg-orange-700',
    heading: 'text-orange-400',
  },
};

export default function ProductsPage() {
  const [signalEmail, setSignalEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('https://api.convertkit.com/v3/forms/9082725/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: 'Ak1AieraF9kC-T-CxNMmYA',
          email: signalEmail,
          tags: ['0dte-signals-beta']
        })
      });
      
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">

        {/* Back */}
        <div className="mb-10">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            ← sentinel-algo.com
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-blue-400">Products</span> & <span className="text-green-400">Services</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Tools and services built from 10 months of rigorous quant research. 
            We test everything live. You benefit from what survived.
          </p>
        </div>

        {/* Products Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            <span className="text-blue-400">Products</span>
          </h2>

          <div className="space-y-10">
            {products.map((product) => {
              const colors = colorMap[product.color];
              return (
                <div
                  key={product.name}
                  className={`bg-slate-800/50 border ${colors.border} rounded-xl p-8`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{product.icon}</span>
                      <div>
                        <h3 className={`text-2xl font-bold ${colors.heading}`}>{product.name}</h3>
                        <p className="text-slate-400 text-sm">{product.tagline}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                      {product.status === 'live' ? 'Available Now' : 'Coming Soon'}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">{product.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">Pricing:</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {product.pricing.map((tier) => (
                        <div key={tier.tier} className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                          <div className="font-bold text-white mb-1">{tier.tier}</div>
                          <div className={`text-2xl font-bold ${colors.heading} mb-3`}>{tier.price}</div>
                          <ul className="space-y-1">
                            {tier.features.map((f) => (
                              <li key={f} className="text-slate-400 text-xs flex items-start gap-1">
                                <span className="text-green-400 mt-0.5">•</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={product.ctaHref}
                      target={product.ctaHref.startsWith('http') ? '_blank' : undefined}
                      rel={product.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-block ${colors.cta} text-white font-semibold px-6 py-3 rounded-lg transition text-sm`}
                    >
                      {product.cta} →
                    </a>
                    {product.secondaryCta && product.secondaryHref && (
                      <a
                        href={product.secondaryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block ${colors.ctaSecondary || colors.cta} text-white font-semibold px-6 py-3 rounded-lg transition text-sm`}
                      >
                        {product.secondaryCta}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            <span className="text-green-400">Services</span>
          </h2>

          <div className="space-y-10">
            {services.map((service) => {
              const colors = colorMap[service.color];
              return (
                <div
                  key={service.name}
                  id={service.hasSignupForm ? 'signals-signup' : undefined}
                  className={`bg-slate-800/50 border ${colors.border} rounded-xl p-8`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className={`text-2xl font-bold ${colors.heading}`}>{service.name}</h3>
                        <p className="text-slate-400 text-sm">{service.tagline}</p>
                      </div>
                    </div>
                    {service.isBeta && (
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                        Beta
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What You Get:</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mb-6 flex flex-wrap justify-between items-center gap-4">
                    <div>
                      <div className="text-slate-400 text-xs mb-1">Pricing</div>
                      <div className={`text-2xl font-bold ${colors.heading}`}>{service.startingPrice}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs mb-1">Timeline</div>
                      <div className="text-white font-semibold">{service.timeline}</div>
                    </div>
                  </div>

                  {/* CTA or Signup Form */}
                  {service.hasSignupForm ? (
                    <div className="bg-slate-900/30 border border-orange-800/30 rounded-lg p-6">
                      {!isSubmitted ? (
                        <>
                          <h4 className="text-white font-bold mb-2">Join the 0DTE Signals Beta</h4>
                          <p className="text-slate-400 text-sm mb-4">
                            Limited spots available. First 20 users get lifetime $97/mo pricing (locks in forever).
                          </p>
                          <form onSubmit={handleSignupSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                              type="email"
                              placeholder="your.email@example.com"
                              value={signalEmail}
                              onChange={(e) => setSignalEmail(e.target.value)}
                              required
                              className="flex-1 bg-slate-800 border border-slate-600 text-white px-4 py-3 rounded-lg text-sm"
                            />
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className={`${colors.cta} text-white font-semibold px-6 py-3 rounded-lg transition text-sm disabled:opacity-50 whitespace-nowrap`}
                            >
                              {isSubmitting ? 'Joining...' : 'Join Beta →'}
                            </button>
                          </form>
                        </>
                      ) : (
                        <div className="text-center py-4">
                          <div className="text-4xl mb-2">✓</div>
                          <p className="text-xl font-bold text-green-400 mb-2">You're in!</p>
                          <p className="text-slate-300 text-sm">
                            Check your email for beta access details and payment instructions.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={service.ctaHref}
                      className={`inline-block ${colors.cta} text-white font-semibold px-6 py-3 rounded-lg transition text-sm`}
                    >
                      {service.cta} →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions? Custom Needs?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Need something not listed here? Want to discuss a custom project or partnership? 
            We read every email and respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:sentinelalgotrading@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              ✉️ Email Us
            </a>
            <a
              href="https://twitter.com/Sentinel_Algo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition"
            >
              𝕏 DM on Twitter
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
