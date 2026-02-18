import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building the Meta-Controller — Sentinel Algo',
  description:
    "Part 3 of '10 Months to Sharpe 4.29'. One regime layer wasn't enough. Two-layer solution: drawdown-from-peak macro stress controller + pyramidal coherence micro regime. Sharpe jumped from 2.31 to 4.29.",
  openGraph: {
    title: 'Building the Meta-Controller (Part 3 of 4) — 10 Months to Sharpe 4.29',
    description:
      'Sharpe 2.31 → 4.29 with a two-layer adaptive architecture. Here\'s how the meta-controller was built.',
    type: 'article',
    publishedTime: '2026-03-09',
    authors: ['Sentinel Algo'],
    images: ['/sentinel-hero-logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building the Meta-Controller — Sentinel Algo',
    description: 'Sharpe 2.31 → 4.29. Two-layer regime architecture that changed everything.',
    images: ['/sentinel-hero-logo.jpg'],
  },
};

export default function Part3() {
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
            Part 3 of 4
          </span>
          <span className="text-sm text-slate-500">10 Months to Sharpe 4.29</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Building the Meta-Controller
        </h1>
        <p className="text-slate-400 mb-12">March 9, 2026 · By Mitch, Sentinel Algo</p>

        {/* Content */}
        <article className="space-y-8 text-lg text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Problem With One Layer</h2>
            <p>
              After the Inverted Shield discovery, I had a working strategy. Sharpe 2.31. Good enough
              to trade. Not good enough to be proud of.
            </p>
            <p className="mt-4">
              The issue wasn&apos;t the signal. The Inverted Shield, properly filtered for the
              both-types sub-regime, was producing real edge. The issue was that the strategy was
              deploying that signal regardless of the macro environment. In calm, low-stress markets, it
              performed well. During macro stress periods — sustained drawdowns, extended trend regimes,
              structural market dislocations — it bled.
            </p>
            <p className="mt-4">
              One regime classifier isn&apos;t enough. MES doesn&apos;t live in a single behavioral
              state. It has layers: the micro-level pattern (what&apos;s happening right now in price
              structure) and the macro-level context (where are we in the broader market stress cycle).
              Treating them the same was costing me roughly two full Sharpe points.
            </p>
            <p className="mt-4">
              The fix was a second layer of intelligence sitting above the first.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Drawdown-From-Peak: The Macro Stress Signal
            </h2>
            <p>
              The meta-controller is built around one primary variable: drawdown from peak in the
              strategy&apos;s equity curve.
            </p>
            <p className="mt-4">
              Not the market&apos;s drawdown. The strategy&apos;s own drawdown from its recent equity
              peak. This is the macro stress signal because it captures something simple and important:
              when the strategy is in drawdown, the market conditions that produced the edge have
              temporarily shifted. The regime classifier at the micro level might still be firing
              signals, but the macro context says those signals are less reliable right now.
            </p>
            <p className="mt-4">
              The meta-controller uses the drawdown-from-peak reading to classify the current
              environment into macro stress states. Each stress state maps to a different portfolio of
              active strategies. In low-stress states, the system is aggressive — more strategies
              active, more capital deployed. In high-stress states, the system contracts — fewer
              strategies, smaller exposure, tighter filters.
            </p>
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 mt-6">
              <p className="text-blue-300 font-semibold">
                This is not a stop-loss. It&apos;s a regime-adaptive portfolio selector.
              </p>
              <p className="text-slate-300 mt-3">
                A stop-loss pauses all trading at a fixed dollar threshold. The meta-controller
                dynamically adjusts which strategies are running based on a continuous stress reading.
                It doesn&apos;t turn the system off. It changes the system&apos;s posture.
              </p>
            </div>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Four-Strategy Architecture</h2>
            <p>
              PCS ultimately resolved into four distinct strategies, each optimized for a specific
              combination of macro and micro conditions:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  num: '1',
                  name: 'Inverted Shield Fades',
                  desc: 'Long-only mean reversion in instability regimes, both-types signals only',
                  color: 'text-green-400',
                  border: 'border-green-900',
                },
                {
                  num: '2',
                  name: 'Momentum Continuation',
                  desc: 'Trend-following in coherent, low-instability regimes',
                  color: 'text-blue-400',
                  border: 'border-blue-900',
                },
                {
                  num: '3',
                  name: 'Monday Momentum',
                  desc: 'A specialized variant using weekday dominance — Monday PF 1.919 vs. next best 1.115',
                  color: 'text-purple-400',
                  border: 'border-purple-900',
                },
                {
                  num: '4',
                  name: 'Defensive Regime',
                  desc: 'Reduced exposure, tighter parameters during macro stress states',
                  color: 'text-orange-400',
                  border: 'border-orange-900',
                },
              ].map((s) => (
                <div
                  key={s.num}
                  className={`bg-slate-800/50 border ${s.border} rounded-lg p-5 flex gap-4`}
                >
                  <div
                    className={`text-2xl font-bold ${s.color} w-8 flex-shrink-0 text-center`}
                  >
                    {s.num}
                  </div>
                  <div>
                    <div className={`font-bold ${s.color} mb-1`}>{s.name}</div>
                    <div className="text-slate-300 text-base">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6">
              The meta-controller routes capital across these four strategies in real time. The regime
              multiplexer (the micro layer) handles the signal detection within each strategy. Together,
              they form a two-layer adaptive system where each layer is doing a job the other
              layer can&apos;t do.
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 mt-4">
              <p className="text-white font-semibold">Monday Dominance</p>
              <p className="text-slate-300 mt-2 text-base">
                Breaking down momentum trades by day of week, Monday wasn&apos;t slightly better — it
                was dominant. Monday profit factor: <span className="text-green-400 font-bold">1.919</span>.
                Next best day: <span className="text-slate-300 font-semibold">1.115</span>. That spread
                doesn&apos;t happen by accident. It likely reflects weekend gap dynamics and
                institutional positioning resets. PCS treats Monday as its own regime.
              </p>
            </div>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The OR Logic Principle</h2>
            <p>
              This is the discovery that nearly killed a good system through well-intentioned
              engineering.
            </p>
            <p className="mt-4">
              When multiple regime detectors were producing signals, my first instinct was to combine
              them: weight them, average them, build a composite score. That was wrong.
            </p>
            <p className="mt-4">
              Weighted-summing uncorrelated detectors dilutes each one&apos;s edge. Two detectors
              catching different market phenomena produce independent catches — they see different
              things. A composite score turns two sharp signals into one mushy one that catches neither
              phenomenon reliably.
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-6">
              <p className="text-white font-semibold mb-3">The correct combination is OR logic:</p>
              <p className="text-slate-300">
                If Detector A fires <strong className="text-white">OR</strong> Detector B fires,
                respond. Don&apos;t average. Don&apos;t weight. Let each detector do its specific job.
              </p>
            </div>
            <p className="mt-6">
              The practical impact: switching from weighted combination to OR logic was responsible for
              a meaningful portion of the Sharpe improvement. Each strategy in PCS has its own
              dedicated regime classifier. The meta-controller switches between them — it
              doesn&apos;t average across them.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Sharpe 2.31 → 4.29</h2>
            <p>
              The performance improvement from adding the meta-controller layer was not incremental. It
              was transformative.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-slate-400 font-semibold">Configuration</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-semibold">Sharpe</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-semibold">Calmar</th>
                    <th className="text-right py-3 pl-4 text-slate-400 font-semibold">Max DD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-3 pr-4 text-slate-300">Inverted Shield alone</td>
                    <td className="py-3 px-4 text-right text-white">~1.4</td>
                    <td className="py-3 px-4 text-right text-slate-500">—</td>
                    <td className="py-3 pl-4 text-right text-slate-500">—</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-300">+ Sub-regime filter</td>
                    <td className="py-3 px-4 text-right text-white">~1.9</td>
                    <td className="py-3 px-4 text-right text-slate-500">—</td>
                    <td className="py-3 pl-4 text-right text-slate-500">—</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-300">+ OR Logic architecture</td>
                    <td className="py-3 px-4 text-right text-white">2.31</td>
                    <td className="py-3 px-4 text-right text-slate-500">—</td>
                    <td className="py-3 pl-4 text-right text-slate-500">—</td>
                  </tr>
                  <tr className="bg-green-900/20">
                    <td className="py-3 pr-4 font-bold text-white">+ Meta-controller</td>
                    <td className="py-3 px-4 text-right font-bold text-green-400">4.29</td>
                    <td className="py-3 px-4 text-right font-bold text-green-400">4.13</td>
                    <td className="py-3 pl-4 text-right font-bold text-green-400">$459</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6">
              Each layer added real edge. The meta-controller roughly doubled the Sharpe ratio on its
              own. That&apos;s what happens when you stop fighting macro stress and start routing around
              it.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Walk-Forward Validation</h2>
            <p>
              Every configuration in that table was validated using rolling walk-forward out-of-sample
              testing across 5.5 years of MES data. No parameter is allowed to &quot;know&quot; about
              the test window it&apos;s being evaluated on. Each window trains on prior data only. All
              years were profitable.
            </p>
            <p className="mt-4">
              The Sharpe and Calmar numbers above are OOS, not backtest artifacts. The final
              configuration has never been fitted to the full dataset. That&apos;s the only kind of
              confidence worth having.
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-6 grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">~$1,895</div>
                <div className="text-slate-400 text-sm mt-1">Per year (1 contract)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">~$9,475</div>
                <div className="text-slate-400 text-sm mt-1">Per year (5 contracts)</div>
              </div>
            </div>
          </section>
        </article>

        {/* Series navigation */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex justify-between items-center">
            <Link
              href="/blog/part2-inverted-shield"
              className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-600/50 rounded-lg px-6 py-4 transition-all"
            >
              <div className="text-xs text-slate-500 mb-1">Previous: Part 2</div>
              <div className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                ← The Inverted Shield Discovery
              </div>
            </Link>
            <Link
              href="/blog/part4-live-on-sim"
              className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-600/50 rounded-lg px-6 py-4 transition-all text-right"
            >
              <div className="text-xs text-slate-500 mb-1">Next: Part 4</div>
              <div className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                Live on the Sim — What&apos;s Next →
              </div>
            </Link>
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
