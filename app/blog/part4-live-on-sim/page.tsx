import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live on the Sim — What's Next — Sentinel Algo",
  description:
    'Part 4 of "10 Months to Sharpe 4.29". PCS is live on Sim101. First session MFE/MAE: $61.88 average MFE confirms real inflection point detection. Exits need work. Bobby trade manager is next.',
  openGraph: {
    title: "Live on the Sim — What's Next (Part 4 of 4) — 10 Months to Sharpe 4.29",
    description:
      'PCS is live on Sim101. $61.88 average MFE. Entries are finding real edges — exits still need Bobby.',
    type: 'article',
    publishedTime: '2026-03-16',
    authors: ['Sentinel Algo'],
    images: ['/sentinel-hero-logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Live on the Sim — Sentinel Algo",
    description: 'PCS Sim101: first real MFE data. Entries are working. Now we fix exits.',
    images: ['/sentinel-hero-logo.jpg'],
  },
};

export default function Part4() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        {/* Back navigation */}
        <div className="mb-8">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            ← Back to Blog
          </Link>
        </div>

        {/* Series badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-semibold text-blue-400 bg-blue-900/30 border border-blue-800/50 rounded px-3 py-1">
            Part 4 of 4
          </span>
          <span className="text-sm text-slate-500">10 Months to Sharpe 4.29</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Live on the Sim — What&apos;s Next
        </h1>
        <p className="text-slate-400 mb-12">March 16, 2026 · By Mitch, Sentinel Algo</p>

        {/* Content */}
        <article className="space-y-8 text-lg text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">February 16, 2026</h2>
            <p>The market opened. Sim101 was live. PCS was running.</p>
            <p className="mt-4">
              NinjaTrader&apos;s Sim101 isn&apos;t a backtest — it processes real market data in real
              time through the actual market feed, accounting for real bid-ask spreads and slippage.
              Fills in Sim101 are as close to live fills as you get without real money on the line.
            </p>
            <p className="mt-4">
              Ten months of development. 5.5 years of walk-forward OOS testing. Sharpe 4.29 in the
              historical record. Now we find out if it works in the present.
            </p>
            <p className="mt-4">PCS fired its first trades.</p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What the MFE/MAE Data Revealed</h2>
            <p>
              The first thing I pulled after the opening session wasn&apos;t P&amp;L. It was MFE/MAE
              data — Maximum Favorable Excursion and Maximum Adverse Excursion for each trade.
            </p>
            <p className="mt-4">
              MFE tells you how far in-the-money a trade moved before it closed. MAE tells you how far
              it moved against you before it resolved. Together, they tell you whether your entries are
              right and whether your exits are capturing the available edge.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-400 mb-3">✓ Entries: Right</h3>
                <div className="text-3xl font-bold text-green-400 mb-2">$61.88</div>
                <p className="text-slate-300 text-base">
                  Average MFE per trade. The market is moving in the predicted direction by nearly $62
                  before the trade closes. That&apos;s regime detection working in real time.
                </p>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-3">⚠ Exits: Constrained</h3>
                <p className="text-slate-300 text-base">
                  The system is giving back a meaningful portion of that $61.88. Exits are leaving
                  money on the table. A specific, addressable problem.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-6">
              <p className="text-white font-semibold">This is actually good news.</p>
              <p className="text-slate-300 mt-2">
                The system isn&apos;t wrong about direction. It&apos;s premature about timing the
                close. That&apos;s a solvable problem. And we have a solution in development.
              </p>
            </div>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Bobby Trade Manager</h2>
            <p>
              The next major development is a trade management module called Bobby.
            </p>
            <p className="mt-4">
              Bobby&apos;s job: dynamic exit management using the same real-time regime classification
              that drives entries. Instead of fixed targets and stops, Bobby will read coherence state
              as the trade develops, extend targets when the regime suggests continuation, and tighten
              exits when coherence breaks down mid-trade.
            </p>
            <p className="mt-4">
              The MFE data confirms the opportunity. If the average trade reaches $61.88 in the right
              direction, smarter exits should recover a meaningful portion of the give-back. Even
              15–20% recovery has significant impact at multi-contract scale.
            </p>
            <p className="mt-4 font-semibold text-white">
              Entries are working. Now we optimize what we do with them.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Path to $500/Week</h2>
            <p>Let&apos;s talk about the math.</p>
            <p className="mt-4">
              At one contract, PCS&apos;s historical performance projects to approximately{' '}
              <strong className="text-white">$1,895 per year</strong>. That&apos;s the OOS
              walk-forward number — real, unoptimistic, and net of the noise that comes with a
              $5/point instrument.
            </p>
            <p className="mt-4">
              At five contracts:{' '}
              <strong className="text-white">$9,475 per year</strong>. That&apos;s $182/week.
            </p>
            <p className="mt-4">
              $182/week is not $500/week. But it&apos;s the baseline — before Bobby&apos;s exit
              optimization, before any parameter refinement from live data, before scaling beyond five
              contracts.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  step: '1',
                  title: 'Sim Validation',
                  desc: 'PCS needs to prove it works live, not just historically. Target: 90 days of live sim data that matches the OOS return profile within acceptable variance.',
                },
                {
                  step: '2',
                  title: 'Bobby Deployment',
                  desc: 'Improved exit management should close a meaningful portion of the gap between MFE and realized P&L.',
                },
                {
                  step: '3',
                  title: 'Contract Scaling',
                  desc: '10 contracts at current projected returns reaches $365/week before any exit improvements. Bobby and 10 contracts gets close to the target.',
                },
                {
                  step: '4',
                  title: 'Live Account Transition',
                  desc: 'Once sim data confirms the edge is real and stable, move to a live account. Real fills, real slippage, real stakes.',
                },
              ].map((m) => (
                <div key={m.step} className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 flex gap-4">
                  <div className="text-2xl font-bold text-blue-400 w-8 flex-shrink-0 text-center">
                    {m.step}
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">{m.title}</div>
                    <div className="text-slate-300 text-base">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-slate-400 italic">
              None of this is guaranteed. That&apos;s the point of the live phase.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What Live Trading Will Prove (or Disprove)
            </h2>
            <p>
              The backtest is a closed question. The walk-forward validation is as rigorous as I know
              how to make it. But only live data can answer the real questions:
            </p>
            <ul className="mt-6 space-y-4">
              {[
                {
                  q: 'Is the edge real-time detectable?',
                  a: 'Regime classifiers work on historical data. Live markets have latency and feed anomalies that backtests don\'t capture.',
                },
                {
                  q: 'Does slippage eat the edge?',
                  a: 'MES is liquid, but at 10 contracts we\'ll find out what that actually costs.',
                },
                {
                  q: 'Is the $459 max drawdown realistic?',
                  a: 'That number over 5.5 years is extraordinary. Live trading will either confirm it or reveal the scenario historical data missed.',
                },
                {
                  q: 'Does Bobby actually help?',
                  a: 'The MFE data says the opportunity is there. Execution will determine whether we capture it.',
                },
              ].map((item) => (
                <li key={item.q} className="bg-slate-800/30 border border-slate-700 rounded-lg p-5">
                  <p className="font-semibold text-white mb-2">{item.q}</p>
                  <p className="text-slate-300 text-base">{item.a}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              I expect surprises. The question isn&apos;t whether anything unexpected will happen —
              it&apos;s whether the system&apos;s framework is robust enough to handle what we
              haven&apos;t anticipated. The architecture is designed for regime change, not regime
              assumption.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Follow the Journey</h2>
            <p>This is the beginning of the live chapter, not the end of the story.</p>
            <p className="mt-4">
              We&apos;ll publish live performance data, trade logs, MFE/MAE updates, and Bobby
              development as they happen. Real numbers. No cherry-picking. If PCS has a bad month, we
              report it and explain it.
            </p>
            <p className="mt-4">
              Ten months to Sharpe 4.29. Now we find out what that actually looks like in the real
              world.
            </p>
            <div className="bg-blue-900/20 border border-blue-600/50 rounded-lg p-6 mt-6 text-center">
              <p className="text-white font-semibold text-lg mb-4">The system is running.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://twitter.com/Sentinel_Algo"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  Follow @Sentinel_Algo →
                </a>
                <Link
                  href="/"
                  className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  Subscribe at sentinel-algo.com →
                </Link>
              </div>
            </div>
          </section>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 text-sm text-slate-400">
            <p>
              <em>
                This is Part 4 of a 4-part series. Start with{' '}
                <Link href="/blog/part1-the-gamble" className="text-blue-400 hover:text-blue-300">
                  Part 1: &quot;The 10-Month Gamble&quot;
                </Link>{' '}
                for the full story from the beginning.
              </em>
            </p>
          </div>
        </article>

        {/* Series navigation */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex justify-between items-center">
            <Link
              href="/blog/part3-meta-controller"
              className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-600/50 rounded-lg px-6 py-4 transition-all"
            >
              <div className="text-xs text-slate-500 mb-1">Previous: Part 3</div>
              <div className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                ← Building the Meta-Controller
              </div>
            </Link>
            <div />
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
              ← View all articles
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
