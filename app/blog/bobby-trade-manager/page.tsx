import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How I Built an AI Trade Manager That Turned -$40 Into +$231 — Sentinel Algo',
  description:
    'Our Sharpe 4.29 system averaged -$2.68 per trade. The entries were gold — exits were garbage. Then we built Bobby: a 3-tier AI trade manager. Here\'s exactly how it works.',
  openGraph: {
    title: 'How I Built Bobby: The AI Trade Manager That Turned -$40 Into +$231',
    description:
      'Sharpe 4.29 system. -$2.68/trade average. The problem wasn\'t the strategy — it was the exits. Bobby fixed that.',
    type: 'article',
    publishedTime: '2026-02-17',
    authors: ['Sentinel Algo'],
    images: ['/sentinel-hero-logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building Bobby: The AI Trade Manager — Sentinel Algo',
    description: '-$40 → +$231. Here\'s how an AI trade manager saved a Sharpe 4.29 strategy.',
    images: ['/sentinel-hero-logo.jpg'],
  },
};

export default function BobbyTradeManager() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        {/* Back navigation */}
        <div className="mb-8">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            &larr; Back to Blog
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          How I Built an AI Trade Manager That Turned -$40 Into +$231 in One Week
        </h1>
        <p className="text-slate-400 mb-12">February 17, 2026 &middot; By Mitch, Sentinel Algo</p>

        {/* Content */}
        <article className="space-y-8 text-lg text-slate-300 leading-relaxed">
          <section>
            <p>Our trading system had a Sharpe ratio of 4.29.</p>
            <p className="mt-4">
              Most hedge funds are thrilled with 1.5. We had 4.29 -- a number that, on paper, says
              the system is working. That the edge is real. That we should be printing money.
            </p>
            <p className="mt-4">
              Our actual average profit per trade was <strong>negative $2.68.</strong>
            </p>
            <p className="mt-4">
              This is the story of how we found the leak, built a fix in Python, and what happened
              the first time we tested it.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Ghost in the Numbers</h2>
            <p>
              When a system has a Sharpe ratio that high but still loses money, there&apos;s exactly
              one place to look: exits.
            </p>
            <p className="mt-4">
              Entries we had. The PCS (Predictive Convergence System) signal was clean -- market
              structure analysis, momentum confirmation, high-probability setups. The entries were
              doing their job.
            </p>
            <p className="mt-4">The exits were destroying the profits before they could land.</p>
            <p className="mt-4">
              The data point that made this undeniable was{' '}
              <strong>Maximum Favorable Excursion</strong>, or MFE. This metric answers a simple
              question: during this trade, how far did price move in our favor before we closed it?
              It&apos;s the unrealized profit that was sitting inside each trade at its best moment.
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-6 space-y-2">
              <p>
                Our MFE average: <strong className="text-white">$114 per trade.</strong>
              </p>
              <p>
                Our actual captured profit average:{' '}
                <strong className="text-white">-$2.68 per trade.</strong>
              </p>
            </div>
            <p className="mt-4">
              That&apos;s a gap of over $116 per trade -- evaporating consistently, across every
              setup, in every session. The market was <em>giving</em> us the move. We were giving
              it back.
            </p>
            <p className="mt-4">
              The culprit was our exit system: a flat 8-point hard stop, no dynamic management, no
              ability to let a winner breathe. Once a trade was on, it either hit a fixed target or
              got clipped. No middle ground.
            </p>
            <p className="mt-4">
              We were running a sophisticated entry engine attached to a blunt hammer for an exit.
              So we built something better.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Enter Bobby</h2>
            <p>
              Bobby is a Python-based trade manager. It doesn&apos;t generate signals -- that&apos;s
              PCS&apos;s job. Bobby&apos;s entire purpose is to manage what happens{' '}
              <em>after</em> the entry: how the trade breathes, when it&apos;s protected, and when
              it&apos;s allowed to run.
            </p>
            <p className="mt-4">
              The core design philosophy came from a simple insight:{' '}
              <strong>trades are not all the same.</strong> Some should be scalped. Some should be
              held for the big move. Deciding which <em>before</em> the trade opens is guesswork.
              Deciding in real time, based on what the market is actually doing, is management.
            </p>
            <p className="mt-4">
              Bobby manages trades through a <strong>three-tier exit system.</strong>
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Three-Tier System</h2>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-blue-400 mb-2">Tier 1: Survival</h3>
                <p>The first job of any trade is not to profit -- it&apos;s to survive.</p>
                <p className="mt-4">
                  When a trade opens, Bobby enters Survival mode. The original stop is in place.
                  Bobby is watching for the trade to reach a small profit threshold that confirms
                  the market agrees with the direction. Until that confirmation comes, we
                  don&apos;t touch the stop. We wait.
                </p>
                <p className="mt-4">
                  This sounds passive, but it&apos;s doing something critical: it&apos;s giving the
                  trade room to breathe without immediately exposing it to the full-width stop if it
                  never confirms. It&apos;s the difference between disciplined patience and blind
                  hope.
                </p>
              </div>
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">Tier 2: Lock-In</h3>
                <p>
                  Once the trade clears the Survival threshold, Bobby shifts to Lock-In mode.
                </p>
                <p className="mt-4">
                  The stop moves to breakeven (or slightly above entry). We&apos;re now in a
                  risk-free position -- the trade can close at worst at even. But Bobby
                  doesn&apos;t just park the stop at breakeven and walk away. It calculates a
                  dynamic trailing buffer based on recent price structure: ATR-derived spacing,
                  swing levels, the kind of breathing room this particular market needs right now.
                </p>
                <p className="mt-4">
                  The goal is clear:{' '}
                  <strong>we cannot lose on this trade. But we can still run it.</strong>
                </p>
              </div>
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Tier 3: Runner</h3>
                <p>
                  If the trade extends meaningfully beyond the Lock-In zone, Bobby switches to
                  Runner mode.
                </p>
                <p className="mt-4">
                  The trailing stop widens. The target expands. Bobby is now managing for a
                  potential high-magnitude move -- the kind of trade that can define a week&apos;s
                  P&amp;L in a single entry.
                </p>
                <p className="mt-4">
                  This is the tier the old fixed-stop system could <em>never reach.</em> Trades
                  were getting clipped before they had the chance to become runners. The 8-point
                  stop wasn&apos;t just a risk management tool -- it was a ceiling on profits that
                  we didn&apos;t realize we&apos;d built.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              The First Trade. One Tick from Nothing.
            </h2>
            <p>
              The first trade Bobby managed in replay testing became the proof-of-concept moment.
            </p>
            <p className="mt-4">
              Under the old system, this trade had been stopped out. The market hit our 8-point
              stop, we got kicked out with a loss, and the market then moved{' '}
              <strong>21 points in our direction.</strong>
            </p>
            <p className="mt-4">
              How close was the stop? One tick. A single quarter-point move against us triggered the
              exit. Then price turned and ran.
            </p>
            <p className="mt-4">
              Over a thousand dollars of move on a single ES contract -- and we captured none of it.
            </p>
            <p className="mt-4">
              In the replay with Bobby managing the trade, the same tick-against us occurred. But
              Bobby&apos;s Survival mode dynamic buffer didn&apos;t trigger on a one-tick
              excursion. The trade stayed open.
            </p>
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 mt-6 space-y-2 text-slate-300">
              <p>Price confirmed direction. Tier 2 Lock-In engaged -- stop to breakeven.</p>
              <p>
                Price extended. Tier 3 Runner engaged -- trailing stop widened, target expanded.
              </p>
            </div>
            <p className="mt-4">
              The trade that was stopped out for a loss under old management rode through the dip,
              survived, and captured a substantial portion of that 21-point move.
            </p>
            <p className="mt-4">
              Same entry signal. Same market data. Same tick-by-tick price action.
            </p>
            <p className="mt-4">Different management. Completely different outcome.</p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Week 1 Replay: The Numbers</h2>
            <p>Three trades. One contract. One week of historical data.</p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold">Metric</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold">
                      Old Management
                    </th>
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold">Bobby</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-3 px-4 text-slate-300">Trade 1</td>
                    <td className="py-3 px-4 text-red-400">
                      Stopped out (1-tick), missed 21pt move
                    </td>
                    <td className="py-3 px-4 text-green-400">
                      Tier 3 Runner, captured significant portion
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300">Total P&amp;L</td>
                    <td className="py-3 px-4 font-bold text-red-400">-$40</td>
                    <td className="py-3 px-4 font-bold text-green-400">+$231</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300">Swing</td>
                    <td className="py-3 px-4 text-slate-500">--</td>
                    <td className="py-3 px-4 font-bold text-blue-400">+$271</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 mt-6">
              <p className="text-blue-300 font-semibold text-xl">
                -$40 old management. +$231 with Bobby. A $271 swing.
              </p>
              <p className="text-slate-300 mt-3">
                This isn&apos;t a backtest with optimized parameters. This is replay trading --
                real historical tick data, real order execution simulation, real trade-by-trade
                documentation. The entry signals were identical. Only the exit management changed.
              </p>
            </div>

            <p className="mt-4">
              The MFE gap is closing. The Sharpe ratio of 4.29 was always telling us the system had
              an edge. Bobby is finally letting that edge get paid.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What This Is -- and What It Isn&apos;t
            </h2>
            <p>A few honest caveats, because they matter:</p>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  This is one week of replay data.
                </h3>
                <p>
                  One week is not a statistically complete sample. We need more trades, more market
                  conditions, more volatility regimes. We&apos;re building that data set now.
                </p>
              </div>
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  Replay isn&apos;t live trading.
                </h3>
                <p>
                  Slippage, liquidity, and execution conditions in live markets will differ.
                  We&apos;re accounting for this in our parameter design, but it&apos;s a real
                  factor.
                </p>
              </div>
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  Bobby doesn&apos;t predict the market.
                </h3>
                <p>
                  It doesn&apos;t know where price is going -- it manages what&apos;s already
                  happening. If the trade fails, Bobby manages the loss. It doesn&apos;t prevent
                  losses, it sizes them properly while maximizing what good trades can return.
                </p>
              </div>
            </div>

            <p className="mt-4">
              What this <em>is</em>: a documented, reproducible demonstration that the MFE gap we
              identified is real, that it&apos;s caused by exit management, and that a systematic,
              dynamic exit system can close a meaningful portion of it.
            </p>
            <p className="mt-4">
              The mechanism is proven. The work now is validation at scale.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              The Technical Architecture (Brief)
            </h2>
            <p>
              For the developers reading this -- Bobby is built in Python, event-driven, running on
              tick data. Key design decisions:
            </p>
            <ul className="mt-6 space-y-4 list-none">
              <li className="flex gap-3">
                <span className="text-blue-400 shrink-0 font-bold">--</span>
                <span>
                  <strong className="text-white">Event-driven, not polling.</strong> Bobby reacts
                  to each tick, not on a fixed interval. Trade management decisions happen in real
                  time.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 shrink-0 font-bold">--</span>
                <span>
                  <strong className="text-white">ATR-based buffers.</strong> The Survival and
                  Lock-In tier thresholds scale with current volatility. A low-volatility session
                  and a high-volatility session get appropriately sized breathing room.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 shrink-0 font-bold">--</span>
                <span>
                  <strong className="text-white">No curve-fitting on tier parameters.</strong>{' '}
                  Thresholds were derived from the MFE distribution analysis -- where did trades
                  historically show confirmation? Where did they begin to run? The data drove the
                  tiers, not wishful thinking.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 shrink-0 font-bold">--</span>
                <span>
                  <strong className="text-white">Separation of concerns.</strong> Bobby
                  doesn&apos;t know about PCS&apos;s entry logic. It receives an entry event and
                  takes over from there. This keeps the systems modular and independently testable.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              A future post will go deeper into the code architecture. For now, the important thing
              is that it works -- and why it works is explainable.
            </p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What&apos;s Next</h2>
            <p>
              We&apos;re running Bobby across a longer historical window -- different seasons,
              different volatility environments, trending vs. choppy conditions. The 3-tier
              structure needs to prove it&apos;s robust, not just right for one particularly good
              week.
            </p>
            <p className="mt-4">
              Parameters will be stress-tested. We&apos;re not looking for perfect -- we&apos;re
              looking for consistent.
            </p>
            <p className="mt-4">
              After sufficient replay validation: paper trading. After paper trading: live capital,
              starting small.
            </p>
            <p className="mt-4">
              Every step gets documented here. Real P&amp;L, real trades, the ugly weeks alongside
              the good ones.
            </p>
            <p className="mt-4">
              If you&apos;re building something similar -- especially if you&apos;ve hit the same
              MFE gap problem -- the comment section is open. This problem is more common than most
              systematic traders like to admit.
            </p>
            <p className="mt-4">The system was right the whole time.</p>
            <p className="mt-4">Bobby just taught it how to get paid.</p>
          </section>

          <hr className="border-slate-700" />

          <section>
            <p className="text-sm text-slate-500 italic">
              Disclaimer: This content is for educational and informational purposes only. Nothing
              here constitutes financial advice. Trading futures involves substantial risk of loss.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            &larr; View all articles
          </Link>
        </div>
      </div>
    </main>
  );
}
