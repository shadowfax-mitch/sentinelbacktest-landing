import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research — Sentinel Algo',
  description:
    'Sentinel Algo published research: The Magnitude Paradox, the Pain Journal (10 Months to Sharpe 4.29 series), and regime-aware strategy development deep dives.',
  openGraph: {
    title: 'Research — Sentinel Algo',
    description:
      'Published research on regime-aware algo trading: Magnitude Paradox, the 4-part PCS development journal, and backtest validation methodology.',
    type: 'website',
    images: ['/sentinel-hero-logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research — Sentinel Algo',
    description: 'Sentinel Algo published research: Magnitude Paradox, 10 Months to Sharpe 4.29 series, and more.',
    images: ['/sentinel-hero-logo.jpg'],
  },
};

const featuredResearch = [
  {
    title: 'The Magnitude Paradox',
    subtitle: 'We Built a 99.8% Accurate Market Instability Detector — and Can\'t Trade It',
    date: 'February 13, 2026',
    category: 'Research Paper',
    categoryColor: 'text-red-400 bg-red-900/30 border-red-800/50',
    excerpt:
      '13,000+ configurations. Two instruments. Five timeframes. We can predict when the market will make a big move with 99.8% accuracy. We just can\'t predict which direction. A deep dive into the gap between detection and tradability.',
    href: '/blog/magnitude-paradox',
    stats: [
      { label: 'Configurations', value: '13,000+' },
      { label: 'Detection Accuracy', value: '99.8%' },
      { label: 'Tradable?', value: 'No' },
    ],
  },
];

const painJournal = [
  {
    part: 1,
    title: 'The 10-Month Gamble',
    date: 'February 23, 2026',
    excerpt:
      'February 16, 2026. NinjaTrader 8, Sim101. The Pyramidal Coherence Strategy places its first live trade after ten months of development. This is the story of how we got there — and why it took ten months instead of ten weeks.',
    href: '/blog/part1-the-gamble',
  },
  {
    part: 2,
    title: 'The Inverted Shield Discovery',
    date: 'March 2, 2026',
    excerpt:
      'A volatility filter built to keep us out of dangerous markets turned out to label the most profitable regime in the dataset. Profit factor: 0.332 in the poison sub-regime vs. 3.288 in the gold sub-regime. A 10x difference hiding in plain sight.',
    href: '/blog/part2-inverted-shield',
  },
  {
    part: 3,
    title: 'Building the Meta-Controller',
    date: 'March 9, 2026',
    excerpt:
      "One regime layer wasn't enough. The solution: a two-layer adaptive architecture — a drawdown-from-peak macro stress controller above a pyramidal coherence micro regime. Sharpe jumped from 2.31 to 4.29.",
    href: '/blog/part3-meta-controller',
  },
  {
    part: 4,
    title: 'Live on the Sim — What\'s Next',
    date: 'March 16, 2026',
    excerpt:
      'PCS is live on Sim101. First session MFE/MAE data: $61.88 average MFE confirms entries are finding real inflection points. Exits are giving it back. Bobby trade manager is next. The path to $500/week starts here.',
    href: '/blog/part4-live-on-sim',
  },
];

const standaloneResearch = [
  {
    title: 'How I Built an AI Trade Manager That Turned -$40 Into +$231',
    date: 'February 17, 2026',
    category: 'Case Study',
    categoryColor: 'text-green-400 bg-green-900/30 border-green-800/50',
    excerpt:
      'Our Sharpe 4.29 system averaged -$2.68 per trade. The entries were gold — exits were garbage. Then we built Bobby: a 3-tier AI trade manager. Here\'s how it worked and what changed.',
    href: '/blog/bobby-trade-manager',
  },
];

export default function ResearchPage() {
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
            <span className="text-blue-400">Research</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            Every finding published here comes from real backtests, real data, and real money on the line.
            We publish the failures because that&apos;s where the edge lives.
          </p>
        </div>

        {/* Featured: Magnitude Paradox */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-6">
            Featured Research
          </h2>
          {featuredResearch.map((paper) => (
            <Link key={paper.title} href={paper.href} className="block group">
              <div className="bg-slate-800/50 border border-slate-700 hover:border-blue-600/50 rounded-xl p-8 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${paper.categoryColor}`}>
                    {paper.category}
                  </span>
                  <span className="text-sm text-slate-500">{paper.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                  {paper.title}
                </h3>
                <p className="text-slate-400 mb-4 text-lg italic">{paper.subtitle}</p>
                <p className="text-slate-300 leading-relaxed mb-6">{paper.excerpt}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {paper.stats.map((s) => (
                    <div key={s.label} className="bg-slate-900/50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-blue-400">{s.value}</div>
                      <div className="text-slate-500 text-xs mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <span className="text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  Read full paper →
                </span>
              </div>
            </Link>
          ))}
        </section>

        {/* Pain Journal Series */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-2">
            <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">
              The Pain Journal
            </h2>
          </div>
          <div className="bg-blue-900/20 border border-blue-800/40 rounded-lg p-5 mb-8">
            <div className="text-blue-300 text-sm font-semibold mb-1">📖 4-Part Series</div>
            <div className="text-white font-bold text-xl">10 Months to Sharpe 4.29</div>
            <p className="text-slate-300 mt-2 text-sm leading-relaxed">
              The complete, unfiltered story of building the Pyramidal Coherence Strategy from first
              principles to first live trade. 23,520+ configurations tested. 96.7% failed.
              Sharpe 4.29 at the end.
            </p>
          </div>
          <div className="space-y-4">
            {painJournal.map((entry) => (
              <Link key={entry.part} href={entry.href} className="block group">
                <div className="bg-slate-800/40 border border-slate-700 hover:border-blue-600/40 rounded-lg p-6 transition-all flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-900/50 border border-blue-800/50 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm">
                    {entry.part}
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1">{entry.date}</div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                      {entry.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{entry.excerpt}</p>
                    <span className="text-blue-400 text-xs font-semibold mt-2 inline-block group-hover:text-blue-300 transition-colors">
                      Read part {entry.part} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Standalone */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-6">
            Case Studies
          </h2>
          {standaloneResearch.map((item) => (
            <Link key={item.title} href={item.href} className="block group">
              <div className="bg-slate-800/40 border border-slate-700 hover:border-green-600/40 rounded-xl p-6 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.categoryColor}`}>
                    {item.category}
                  </span>
                  <span className="text-sm text-slate-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">{item.excerpt}</p>
                <span className="text-green-400 text-sm font-semibold mt-4 inline-block group-hover:text-green-300 transition-colors">
                  Read case study →
                </span>
              </div>
            </Link>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Never Miss a Publication</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            New research drops weekly. Subscribe to the Sentinel Report newsletter for direct delivery
            every Sunday at 7 PM CT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/#waitlist"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Subscribe Free
            </Link>
            <a
              href="https://twitter.com/Sentinel_Algo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition"
            >
              𝕏 @Sentinel_Algo
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
