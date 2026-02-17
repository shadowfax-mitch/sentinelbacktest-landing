import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The 10-Month Gamble — Sentinel Algo',
  description:
    'Part 1 of "10 Months to Sharpe 4.29". The Pyramidal Coherence Strategy places its first live trade. This is the story of how we got there — the failures, the philosophy, and the system that survived them.',
};

export default function Part1() {
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
            Part 1 of 4
          </span>
          <span className="text-sm text-slate-500">10 Months to Sharpe 4.29</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The 10-Month Gamble</h1>
        <p className="text-slate-400 mb-12">February 23, 2026 · By Mitch, Sentinel Algo</p>

        {/* Content */}
        <article className="space-y-8 text-lg text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">It Fired</h2>
            <p>
              February 16, 2026. NinjaTrader 8, Sim101 account. Market opens. The Pyramidal Coherence
              Strategy — ten months of nights, weekends, and a few too many cold cups of coffee — places
              its first live trade.
            </p>
            <p className="mt-4">
              I watched the order fill and felt something I hadn&apos;t expected: not excitement, but
              calibrated suspicion. Ten months of backtests said this thing worked. Five and a half years
              of walk-forward out-of-sample testing said every year was profitable. Sharpe ratio: 4.29.
              Max drawdown: $459 on a single contract. Win rate: 62.7%.
            </p>
            <p className="mt-4">But live is different. Live is the proof that matters.</p>
            <p className="mt-4">
              This is the story of how we got there — and why getting there took ten months instead of
              ten weeks.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why a Structural Engineer Builds Trading Algos at Night
            </h2>
            <p>
              I&apos;m a structural engineer by training and trade. My day job is stress analysis —
              figuring out how loads propagate through systems, where failure modes hide, where the math
              says one thing and the material says another.
            </p>
            <p className="mt-4">
              It turns out that&apos;s exactly the right brain for quantitative trading.
            </p>
            <p className="mt-4">
              Markets aren&apos;t random. They&apos;re noisy, nonstationary, adversarial — but
              they&apos;re not random. They have structure. Regimes. Stress states. And if you&apos;re
              willing to study that structure the way an engineer studies a load path, you can find real
              edge. Not guaranteed edge. Not infinite edge. But real, measurable, reproducible edge.
            </p>
            <p className="mt-4">
              The target market: MES futures. Micro E-mini S&amp;P 500. $5 per point, small enough to
              test intelligently, liquid enough to matter. The question I kept coming back to
              wasn&apos;t &quot;how do I predict direction?&quot; — that dead end cost me about three
              months — but &quot;when does the market behave predictably?&quot; That reframe changed
              everything.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Failures First</h2>
            <p>Let me be honest about the wreckage before the breakthrough.</p>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-2">
                  The Hilbert Transform disaster.
                </h3>
                <p>
                  Early on, I built a regime classifier around the Hilbert Transform — a signal
                  processing tool that estimates instantaneous frequency and phase in price data. The
                  backtest results were extraordinary. Then I found the bug: lookahead contamination.
                  The indicator was reading future bars. When I fixed it, the edge evaporated
                  completely. Three weeks of work, gone. Lesson: validate your data pipeline before you
                  trust your results. Always.
                </p>
              </div>
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  The direction prediction dead end.
                </h3>
                <p>
                  Like most algo traders starting out, I spent months trying to predict whether the
                  next candle would be up or down. I built classifiers. I tested indicators. I read
                  papers. I got nowhere useful. Directional prediction in liquid futures markets is a
                  losing game — the competition is too strong and the signal-to-noise ratio is brutal.
                  The breakthrough came when I stopped asking &quot;which way?&quot; and started asking
                  &quot;what kind of market is this right now?&quot;
                </p>
              </div>
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-lg font-bold text-orange-400 mb-2">The overfitting trap.</h3>
                <p>
                  I can&apos;t count the number of &quot;systems&quot; I built that looked great on
                  in-sample data and fell apart on out-of-sample. The fix wasn&apos;t fewer parameters
                  — it was a rigorous walk-forward testing framework and a rule: no discovery counts
                  unless it validates on data the model never saw. Everything in PCS has been tested
                  that way. 5.5 years of rolling windows, all years profitable.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Research Philosophy</h2>
            <p>
              Feynman had a rule: if you can&apos;t explain something simply, you don&apos;t
              understand it. I adopted that for this project. Every indicator, every filter, every
              regime classifier — I had to be able to explain exactly why it should work, not just that
              it did work in a backtest.
            </p>
            <p className="mt-4">
              That discipline is what separated PCS from the systems that came before it. We
              weren&apos;t curve-fitting patterns onto noise. We were building a model of market
              behavior from first principles and testing whether the market confirmed it.
            </p>
            <p className="mt-4">
              The core bet — the one that took ten months to validate — was this: markets have distinct
              behavioral regimes, those regimes are detectable in advance, and different strategies
              perform radically differently across regimes. If you can map the regime in real time, you
              can deploy the right strategy at the right time.
            </p>
            <p className="mt-4">
              The final system — PCS — is a two-layer adaptive architecture. A meta-controller reads
              macro stress. A regime multiplexer reads micro conditions. Together they route capital
              across four strategies, each optimized for a specific market state.
            </p>
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 mt-6">
              <p className="text-blue-300 font-semibold text-xl">
                Sharpe 4.29. Calmar 4.13. Max drawdown $459.
              </p>
              <p className="text-slate-300 mt-3">
                But the path there included one discovery that changed everything — something we were
                looking at as a filter and turned out to be the key to the whole system.
              </p>
            </div>
          </section>
        </article>

        {/* Series navigation */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex justify-between items-center">
            <div />
            <Link
              href="/blog/part2-inverted-shield"
              className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-600/50 rounded-lg px-6 py-4 transition-all text-right"
            >
              <div className="text-xs text-slate-500 mb-1">Next: Part 2</div>
              <div className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                The Inverted Shield Discovery →
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
