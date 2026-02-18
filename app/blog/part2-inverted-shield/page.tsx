import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Inverted Shield Discovery — Sentinel Algo',
  description:
    'Part 2 of "10 Months to Sharpe 4.29". A volatility filter built to keep us out of dangerous markets turned out to label the most profitable regime. Profit factor: 0.332 vs 3.288 — a 10x difference hiding inside the same signal.',
  openGraph: {
    title: 'The Inverted Shield Discovery (Part 2 of 4) — 10 Months to Sharpe 4.29',
    description:
      'Profit factor 0.332 in the poison regime. 3.288 in the gold regime. A 10x difference hiding in one signal.',
    type: 'article',
    publishedTime: '2026-03-02',
    authors: ['Sentinel Algo'],
    images: ['/sentinel-hero-logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Inverted Shield Discovery — Sentinel Algo',
    description: 'A "filter" turned out to be the most powerful regime signal we had.',
    images: ['/sentinel-hero-logo.jpg'],
  },
};

export default function Part2() {
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
            Part 2 of 4
          </span>
          <span className="text-sm text-slate-500">10 Months to Sharpe 4.29</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          The Inverted Shield Discovery
        </h1>
        <p className="text-slate-400 mb-12">March 2, 2026 · By Mitch, Sentinel Algo</p>

        {/* Content */}
        <article className="space-y-8 text-lg text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Plan Was Simple</h2>
            <p>Early in the PCS build, I designed something I called the Shield.</p>
            <p className="mt-4">
              The concept: detect periods of abnormal market instability — rapid price acceleration,
              incoherent volatility spikes — and use that signal to stay out of the market. When the
              shield activates, step aside. Protect capital.
            </p>
            <p className="mt-4">Logical. Prudent. Completely wrong.</p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What the Shield Was Supposed to Do
            </h2>
            <p>The Shield detected two types of instability signals in MES:</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span>
                  <strong className="text-white">Acceleration signals</strong> — price moving with
                  unusual velocity, accelerating rather than trending smoothly
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span>
                  <strong className="text-white">Coherence breakdown signals</strong> — the pyramidal
                  structure of price movement losing its ordered layering
                </span>
              </li>
            </ul>
            <p className="mt-4">
              The theory: when these signals fire, the market is in a chaotic state. Chaotic markets
              are unpredictable markets. Unpredictable markets lose money. Therefore, when the Shield
              activates, sit on your hands.
            </p>
            <p className="mt-4">
              I built it, tested it, and expected it to reduce drawdown by keeping us out of the noise.
            </p>
            <p className="mt-4 font-semibold text-white">
              Then I looked at what was actually happening on the other side of the Shield.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Shock</h2>
            <p>
              I split the data: trades taken when the Shield was OFF (normal conditions) vs. trades
              taken when the Shield was ON (instability detected).
            </p>
            <p className="mt-4">
              The &quot;safe&quot; periods — normal, non-flagged market conditions — were mediocre.
              Fine. Tradeable. Nothing special.
            </p>
            <p className="mt-4">
              The &quot;dangerous&quot; periods — the ones the Shield was supposed to protect us from —
              were printing money.
            </p>
            <div className="bg-slate-800/50 border border-yellow-700/50 rounded-lg p-6 mt-6">
              <p className="text-yellow-300 font-semibold">
                Not a little better. Dramatically better. The Shield wasn&apos;t detecting danger. It
                was labeling the most profitable trade conditions in the entire dataset.
              </p>
            </div>
            <p className="mt-6">
              I&apos;d built a filter to exclude our best regime.
            </p>
            <p className="mt-4">
              The instability signal wasn&apos;t a warning. It was a regime label. And the correct
              trade in that regime wasn&apos;t to step aside — it was to fade it. When the market
              exhibits that specific pattern of instability, mean reversion kicks in with unusual force
              and consistency.
            </p>
            <p className="mt-4">
              We flipped the Shield. The Inverted Shield became a trade entry trigger, not a filter.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Validation: Testing Both Sides
            </h2>
            <p>
              Before deploying this inversion, the question wasn&apos;t just &quot;does the inverted
              signal backtest well&quot; — it was &quot;do I understand WHY this works?&quot;
            </p>
            <p className="mt-4">
              The structural explanation: rapid price acceleration in liquid futures markets creates
              temporary imbalances. Market makers and institutional flow absorb the move, then push
              back. The &quot;instability&quot; we were detecting was the signature of that imbalance —
              the setup for a reversion. Mean reversion isn&apos;t random when it follows a specific
              structural pattern.
            </p>
            <p className="mt-4">
              The Inverted Shield trades showed higher win rates, better profit factor across multiple
              test windows, and the edge held across the full 5.5-year walk-forward period.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Poison Sub-Regime Discovery</h2>
            <p>
              Not all instability is the same. After inverting the Shield, I dug into the sub-structure
              of the instability regime. What I found almost cost us the strategy.
            </p>
            <p className="mt-4">I split the Shield-active trades into two sub-groups:</p>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-400 mb-3">☠️ Acceleration-Only</h3>
                <p className="text-slate-300 text-base mb-4">
                  Instability driven purely by price acceleration, without coherence breakdown.
                </p>
                <div className="text-3xl font-bold text-red-400">PF 0.332</div>
                <p className="text-slate-400 text-sm mt-2">
                  For every dollar made, three dollars lost. A money incinerator.
                </p>
              </div>
              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-400 mb-3">✓ Both-Types Signals</h3>
                <p className="text-slate-300 text-base mb-4">
                  Instability driven by BOTH acceleration AND coherence breakdown simultaneously.
                </p>
                <div className="text-3xl font-bold text-green-400">PF 3.288</div>
                <p className="text-slate-400 text-sm mt-2">
                  More than three dollars made for every dollar lost. Robust across OOS data.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-6">
              <p className="text-white font-semibold text-xl mb-2">A 10x difference.</p>
              <p className="text-slate-300">
                Between two sub-groups within the same regime label. If I&apos;d deployed the Inverted
                Shield without this sub-regime filter, I would have been running a catastrophically
                losing strategy while thinking I&apos;d found an edge.
              </p>
            </div>

            <p className="mt-6">
              The market was being extremely specific about what it would reward — we just
              weren&apos;t listening carefully enough at first.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Lesson</h2>
            <p>The market was telling us something we weren&apos;t listening for.</p>
            <p className="mt-4">
              When I designed the Shield as a filter, I was imposing a framework on the data:
              instability = bad, avoid it. But the data had a completely different story: instability of
              this specific type = fade opportunity, trade it hard.
            </p>
            <p className="mt-4">
              This is the core methodology of PCS. We don&apos;t fit strategies to patterns. We ask the
              data what it&apos;s trying to say, then validate whether that story is real.
            </p>
            <p className="mt-4">
              The full signal logic for PCS entry requires both types of instability simultaneously,
              eliminating the poison sub-regime entirely. The acceleration-only trades are filtered out.
              The remaining trades show a profit factor that makes the system&apos;s Sharpe ratio
              possible.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Long-Only Filter</h2>
            <p>One more discovery: short fades are universally toxic.</p>
            <p className="mt-4">
              When PCS detects Inverted Shield conditions, entering short — fading an upward instability
              spike — is a consistent money loser. Long fades, entering after a downward spike, are
              where all the edge lives. We tested this across every sub-period of our data. It held
              everywhere.
            </p>
            <p className="mt-4">
              PCS only takes long fades. No exceptions. Fewer rules, higher edge. The market was
              telling us to specialize.
            </p>
          </section>
        </article>

        {/* Series navigation */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex justify-between items-center">
            <Link
              href="/blog/part1-the-gamble"
              className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-600/50 rounded-lg px-6 py-4 transition-all"
            >
              <div className="text-xs text-slate-500 mb-1">Previous: Part 1</div>
              <div className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                ← The 10-Month Gamble
              </div>
            </Link>
            <Link
              href="/blog/part3-meta-controller"
              className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-600/50 rounded-lg px-6 py-4 transition-all text-right"
            >
              <div className="text-xs text-slate-500 mb-1">Next: Part 3</div>
              <div className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                Building the Meta-Controller →
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
