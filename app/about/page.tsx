import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Sentinel Algo',
  description:
    'Sentinel Algo is an independent quantitative trading research lab. We build, test, and publish regime-aware algorithmic strategies — including our failures. Sharpe 4.29. 5.5 years walk-forward validated.',
  openGraph: {
    title: 'About — Sentinel Algo',
    description:
      'Independent quant lab. Sharpe 4.29 Pyramidal Coherence Strategy. 5.5-year walk-forward validation. 23,520+ strategies tested. We publish the failures too.',
    type: 'website',
    images: ['/sentinel-hero-logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — Sentinel Algo',
    description: 'Independent quant lab. Sharpe 4.29. 5.5 years walk-forward. We publish the failures too.',
    images: ['/sentinel-hero-logo.jpg'],
  },
};

const stats = [
  { value: 'Sharpe 4.29', label: 'Peak live-validated Sharpe ratio (PCS strategy)' },
  { value: '5.5 Years', label: 'Walk-forward validation window' },
  { value: '23,520+', label: 'Strategy configurations tested' },
  { value: '96.7%', label: 'Failure rate — the lessons that made PCS possible' },
  { value: '10 Months', label: 'From zero to first live sim trade' },
  { value: '100%', label: 'Transparency — we publish the losses too' },
];

export default function About() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About <span className="text-blue-400">Sentinel Algo</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            Independent quantitative trading research lab. We build, test, and publish
            regime-aware algorithmic strategies — <em>including every failure along the way</em>.
          </p>
        </div>

        {/* Who We Are */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
            Who We Are
          </h2>
          <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
            <p>
              Sentinel Algo is a solo quantitative research project building the infrastructure
              and discipline to trade algorithmically at a professional level — without institutional
              backing.
            </p>
            <p>
              We are not a hedge fund. We are not a signal service. We are researchers who
              document the real process: the dead-ends, the overfitting traps, the strategies
              that looked great in backtests and failed immediately live.
            </p>
            <p>
              Over 10 months of systematic research, we tested{' '}
              <span className="text-white font-semibold">23,520+ strategy configurations</span>,
              discovered that <span className="text-red-400 font-semibold">96.7% of them lost money</span>,
              and used every failure to build something that didn&apos;t.
            </p>
          </div>
        </section>

        {/* Credibility Stats */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
            The Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What We Built */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
            What We Built
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-800/40 border border-blue-900/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-blue-400 font-bold text-lg">PCS</span>
                <span className="text-slate-400 text-sm">Pyramidal Coherence Strategy</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-3">
                Our flagship MES futures strategy. Sharpe ratio of <strong className="text-white">4.29</strong>{' '}
                across a <strong className="text-white">5.5-year walk-forward validation window</strong>.
                Two-layer adaptive architecture: a macro drawdown-from-peak stress controller sitting
                above a pyramidal coherence micro-regime detector.
              </p>
              <p className="text-slate-400 text-sm">
                Currently live on Sim101. First live trades placed February 16, 2026.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-green-900/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-green-400 font-bold text-lg">Bobby</span>
                <span className="text-slate-400 text-sm">AI Trade Manager</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-3">
                A 3-tier AI trade manager that turned PCS from a -$2.68/trade average into a
                profit engine. Intelligent exit management via trailing stops, partial targets,
                and volatility-aware profit booking.
              </p>
              <Link href="/blog/bobby-trade-manager" className="text-green-400 hover:text-green-300 text-sm font-semibold transition-colors">
                Read the full story →
              </Link>
            </div>

            <div className="bg-slate-800/40 border border-purple-900/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-purple-400 font-bold text-lg">Sentinel Shield</span>
                <span className="text-slate-400 text-sm">Overfitting &amp; Bias Detector</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-3">
                AI-powered audit system that analyzes backtest results for look-ahead bias,
                overfitting, and selection bias. Detected $300K+ in phantom profits from
                backtests with data leakage issues.
              </p>
              <Link href="/tools" className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors">
                See all tools →
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
            The Philosophy
          </h2>
          <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
            <p>
              Most algo traders hide their losses. We publish ours. Not because we enjoy
              documenting failure, but because the failure modes are exactly what make the
              eventual edge real.
            </p>
            <p>
              We believe markets are not one game — they are multiple games running concurrently,
              switching without warning. Strategies that don&apos;t account for regime are not
              strategies; they are luck dressed up as edge.
            </p>
            <p className="text-white font-semibold text-xl border-l-4 border-blue-500 pl-4 italic">
              &ldquo;Radical transparency is the only honest path to edge-finding.&rdquo;
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Follow the Journey
          </h2>
          <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
            Weekly strategy testing results, regime research, and live trading updates.
            Free newsletter, every Sunday at 7 PM CT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://twitter.com/Sentinel_Algo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition flex items-center gap-2"
            >
              𝕏 Follow @Sentinel_Algo
            </a>
            <Link
              href="/#waitlist"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Subscribe to Newsletter
            </Link>
            <Link
              href="/blog"
              className="text-blue-400 hover:text-blue-300 font-semibold transition"
            >
              Read the Blog →
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
