import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10 Months to Sharpe 4.29 — Sentinel Algo Blog',
  description: 'The real story of building the Pyramidal Coherence Strategy for MES futures. From first principles to first live trade — including the failures.',
  openGraph: {
    title: '10 Months to Sharpe 4.29 — Sentinel Algo Blog',
    description: 'The real story of building the Pyramidal Coherence Strategy for MES futures.',
    type: 'website',
  },
};

const series = [
  {
    slug: 'part1-the-gamble',
    series: '10 Months to Sharpe 4.29',
    part: 1 as number | null,
    title: 'The 10-Month Gamble',
    date: 'February 23, 2026',
    excerpt:
      'February 16, 2026. NinjaTrader 8, Sim101. The Pyramidal Coherence Strategy places its first live trade after ten months of development. This is the story of how we got there — and why it took ten months instead of ten weeks.',
  },
  {
    slug: 'part2-inverted-shield',
    series: '10 Months to Sharpe 4.29',
    part: 2 as number | null,
    title: 'The Inverted Shield Discovery',
    date: 'March 2, 2026',
    excerpt:
      'A volatility filter built to keep us out of dangerous markets turned out to label the most profitable regime in the dataset. Profit factor: 0.332 in the poison sub-regime. 3.288 in the gold sub-regime. A 10x difference hiding inside the same signal.',
  },
  {
    slug: 'part3-meta-controller',
    series: '10 Months to Sharpe 4.29',
    part: 3 as number | null,
    title: 'Building the Meta-Controller',
    date: 'March 9, 2026',
    excerpt:
      "One regime layer wasn't enough. The solution: a two-layer adaptive architecture — drawdown-from-peak macro stress controller sitting above a pyramidal coherence micro regime. Sharpe jumped from 2.31 to 4.29.",
  },
  {
    slug: 'part4-live-on-sim',
    series: '10 Months to Sharpe 4.29',
    part: 4 as number | null,
    title: "Live on the Sim — What's Next",
    date: 'March 16, 2026',
    excerpt:
      'PCS is live on Sim101. First session MFE/MAE: $61.88 average MFE confirms entries are finding real inflection points. Exits are giving it back. Bobby trade manager is next. The path to $500/week starts here.',
  },
];

const standalone = [
  {
    slug: 'bobby-trade-manager',
    series: null as string | null,
    part: null as number | null,
    title: 'How I Built an AI Trade Manager That Turned -$40 Into +$231',
    date: 'February 17, 2026',
    excerpt:
      'Our Sharpe 4.29 system averaged -$2.68 per trade. The entries were gold but exits were garbage. Then we built Bobby -- a 3-tier AI trade manager -- and everything changed.',
  },
  {
    slug: 'magnitude-paradox',
    series: 'Research' as string | null,
    part: null as number | null,
    title: "The Magnitude Paradox: We Built a 99.8% Accurate Market Instability Detector -- and Can't Trade It",
    date: 'February 13, 2026',
    excerpt:
      "We built a detector that identifies market instability with 99.8% accuracy. We have no idea how to trade it. Here's what we learned from 13,000+ configurations -- and why a perfectly accurate detector can still be completely useless.",
  },
];

const posts = [...standalone, ...series];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Back to site */}
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            ← sentinel-algo.com
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sentinel Algo Blog
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Real strategy testing results, regime research, and the honest story of building
            algorithmic trading systems — including the failures.
          </p>
          <div className="mt-8 p-5 bg-blue-900/20 border border-blue-700/40 rounded-lg">
            <div className="text-blue-300 text-sm font-semibold mb-2">📖 Featured Series</div>
            <div className="text-white font-bold text-lg">10 Months to Sharpe 4.29</div>
            <div className="text-slate-300 mt-1 text-sm">
              The real story of building the Pyramidal Coherence Strategy — from first principles
              to first live trade. 4 parts, published weekly.
            </div>
          </div>
        </div>

        {/* Post list */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="bg-slate-800/50 border border-slate-700 hover:border-blue-600/50 rounded-lg p-6 md:p-8 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-blue-400 bg-blue-900/30 border border-blue-800/50 rounded px-2 py-1">
                    {post.part !== null ? `Part ${post.part}` : post.series ?? 'Standalone'}
                  </span>
                  <span className="text-sm text-slate-500">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-slate-300 leading-relaxed">{post.excerpt}</p>
                <div className="mt-4 text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors">
                  Read article →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400">
            Follow the live trading journey at{' '}
            <a
              href="https://twitter.com/Sentinel_Algo"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              @Sentinel_Algo
            </a>{' '}
            or subscribe at{' '}
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              sentinel-algo.com
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
