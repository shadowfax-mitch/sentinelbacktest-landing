'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with ConvertKit/Mailchimp
    console.log('Email:', email, 'Platform:', platform);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/sentinel-hero-logo.jpg" 
              alt="Sentinel Algo" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-red-500">19 Trades in 7 Years.</span>
            <br />
            Three Bugs.
            <br />
            <span className="text-green-400">14,477 Trades Later.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            One trader was ready to abandon their Al Brooks strategy. We found 3 silent bugs sabotaging it from the inside. 
            <span className="text-white font-semibold"> Profit factor went from 0.88 to 3.18.</span> Walk-forward validated across 7 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Strategy Audited — Join Waitlist
            </Button>
            <p className="text-sm text-slate-400">
              First 100 get FREE audit • $49/month after
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            "I've Run 252 Parameter Combinations. Nothing Works."
          </h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              A trader came to us with an Al Brooks price action strategy. Solid concept. Clean code. Professional implementation.
            </p>
            <p className="font-semibold text-red-400">
              The backtest: 19 trades over 7 years. Profit factor 0.88. Losing money.
            </p>
            <p>
              They had already run 252 parameter combinations trying to fix it.
            </p>
            <p>
              Nothing worked.
            </p>
            <p>
              They were ready to quit.
            </p>
            <p className="text-white font-bold text-xl pt-4 border-t border-slate-700">
              The strategy idea wasn't the problem. The bugs were.
            </p>
          </div>
        </div>
      </section>

      {/* The Three Bugs */}
      <section className="px-4 py-20 max-w-6xl mx-auto bg-slate-900/30 -mx-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 px-4">
          The Three Bugs That Killed a 3.18 Profit Factor Strategy
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {/* Bug #1 */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400">Bug #1: The Silent Killer</CardTitle>
              <CardDescription className="text-slate-400">Trend Detection Was Broken</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                The system was supposed to classify the market as trending up, trending down, or sideways. 
                Due to a math error, it classified <span className="text-red-400 font-semibold">virtually every bar as sideways</span>.
              </p>
              <div className="bg-slate-900/50 p-4 rounded border border-red-700/50">
                <p className="text-yellow-400 font-bold">
                  An Al Brooks strategy that could never identify a trend.
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  It had zero chance of working.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bug #2 */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400">Bug #2: The Permanent Kill Switch</CardTitle>
              <CardDescription className="text-slate-400">Circuit Breaker Never Reset</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                After 4 consecutive losses, the strategy was supposed to stop trading <em>for the day</em>. 
                The daily reset was comparing the wrong timestamps.
              </p>
              <div className="bg-slate-900/50 p-4 rounded border border-red-700/50">
                <p className="text-yellow-400 font-bold text-lg">
                  470,000 bars spanning 7 years
                </p>
                <p className="text-red-400 font-bold text-2xl">
                  → 19 trades total
                </p>
              </div>
              <p className="text-slate-400 text-sm">
                The trader thought the market had no opportunities. Reality: Their code had stopped checking.
              </p>
            </CardContent>
          </Card>

          {/* Bug #3 */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400">Bug #3: The Invisible Bleed</CardTitle>
              <CardDescription className="text-slate-400">Inverted Risk-Reward</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Stop losses were 30+ ticks away ($15 risk). Targets were 8 ticks ($4 reward).
              </p>
              <div className="bg-slate-900/50 p-4 rounded border border-red-700/50">
                <p className="text-red-400 font-bold text-2xl">
                  Risking $15 to make $4
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  Every winning trade was fighting a 3:1 disadvantage from the start.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center px-4">
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            <span className="text-white font-bold">The kicker:</span> These bugs had nothing to do with the trader's idea being bad. 
            The concept was sound. Al Brooks' second-entry methodology has real edge in trending markets.
          </p>
          <p className="text-2xl font-bold text-blue-400 mt-4">
            The implementation was broken.
          </p>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          The Transformation
        </h2>
        <p className="text-xl text-center text-slate-300 mb-16 max-w-3xl mx-auto">
          From 19 trades in 7 years to a walk-forward validated system with 3.18 profit factor.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-4 text-slate-400 font-semibold">Metric</th>
                <th className="text-center py-4 px-4 text-slate-400 font-semibold">Before (Broken)</th>
                <th className="text-center py-4 px-4 text-slate-400 font-semibold">After V2 (Fixed)</th>
                <th className="text-center py-4 px-4 text-slate-400 font-semibold">After Optimization</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="border-b border-slate-800">
                <td className="py-4 px-4 text-left text-slate-300 font-semibold">Total Trades</td>
                <td className="py-4 px-4 text-red-400 font-bold">19</td>
                <td className="py-4 px-4 text-slate-300">14,477</td>
                <td className="py-4 px-4 text-green-400 font-bold">2,534</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-4 px-4 text-left text-slate-300 font-semibold">Profit Factor</td>
                <td className="py-4 px-4 text-red-400 font-bold">0.88</td>
                <td className="py-4 px-4 text-slate-300">0.94</td>
                <td className="py-4 px-4 text-green-400 font-bold text-2xl">3.18</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-4 px-4 text-left text-slate-300 font-semibold">Win Rate</td>
                <td className="py-4 px-4 text-slate-500">—</td>
                <td className="py-4 px-4 text-slate-300">52%</td>
                <td className="py-4 px-4 text-green-400 font-bold">74%</td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-left text-slate-300 font-semibold">Trades/Day</td>
                <td className="py-4 px-4 text-red-400">0.004</td>
                <td className="py-4 px-4 text-slate-300">2.1</td>
                <td className="py-4 px-4 text-green-400 font-bold">2.0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-slate-300">
            Same strategy. <span className="text-white font-bold">Different bugs fixed.</span>
          </p>
        </div>
      </section>

      {/* Validation Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto bg-slate-900/30 -mx-4">
        <div className="px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            But Does It Hold Out of Sample?
          </h2>
          <p className="text-xl text-center text-slate-300 mb-16 max-w-3xl mx-auto">
            A backtest result means nothing if it's overfit to historical data.
          </p>

          {/* Split Sample */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Split-Sample Test</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle>Training Period (2019-2022)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Profit Factor:</span>
                    <span className="text-white font-bold">2.98</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Win Rate:</span>
                    <span className="text-white font-bold">72.7%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-950/30 to-slate-800/50 border-green-700/50">
                <CardHeader>
                  <CardTitle className="text-green-400">Testing Period (2023-2026)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Profit Factor:</span>
                    <span className="text-green-400 font-bold text-2xl">3.35</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Win Rate:</span>
                    <span className="text-green-400 font-bold">75.3%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-slate-800/50 border border-green-700/50 rounded-lg p-6 text-center">
              <p className="text-xl font-bold text-green-400">
                The strategy performed BETTER on data it had never seen.
              </p>
              <p className="text-slate-300 mt-2">
                This is rare and suggests a genuine, robust edge rather than curve-fitting.
              </p>
            </div>
          </div>

          {/* Walk Forward */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Walk-Forward Validation (4 Rolling Folds)</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400">In-Sample</th>
                    <th className="text-left py-3 px-4 text-slate-400">Out-of-Sample</th>
                    <th className="text-center py-3 px-4 text-slate-400">OOS Profit Factor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4 text-slate-300">2019-2020</td>
                    <td className="py-3 px-4 text-slate-300">2021-2022</td>
                    <td className="py-3 px-4 text-center text-green-400 font-bold">2.72</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4 text-slate-300">2020-2021</td>
                    <td className="py-3 px-4 text-slate-300">2022-2023</td>
                    <td className="py-3 px-4 text-center text-green-400 font-bold">2.89</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4 text-slate-300">2021-2022</td>
                    <td className="py-3 px-4 text-slate-300">2023-2024</td>
                    <td className="py-3 px-4 text-center text-green-400 font-bold">3.54</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300">2023-2024</td>
                    <td className="py-3 px-4 text-slate-300">2025-2026</td>
                    <td className="py-3 px-4 text-center text-green-400 font-bold">3.10</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 space-y-4 text-center">
              <p className="text-xl font-bold text-white">
                Every single out-of-sample fold was profitable.
              </p>
              <div className="flex justify-center gap-8 text-lg">
                <div>
                  <p className="text-slate-400">Minimum PF:</p>
                  <p className="text-green-400 font-bold">2.72</p>
                </div>
                <div>
                  <p className="text-slate-400">Average PF:</p>
                  <p className="text-green-400 font-bold">3.06</p>
                </div>
              </div>
            </div>
          </div>

          {/* Year by Year */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Year-by-Year Performance</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-center py-3 px-3 text-slate-400">Year</th>
                    <th className="text-center py-3 px-3 text-slate-400">Trades</th>
                    <th className="text-center py-3 px-3 text-slate-400">Win Rate</th>
                    <th className="text-center py-3 px-3 text-slate-400">Profit Factor</th>
                    <th className="text-center py-3 px-3 text-slate-400">Net P&L</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {[
                    { year: 2019, trades: 255, wr: '66.7%', pf: 2.91, pl: '$2,471' },
                    { year: 2020, trades: 420, wr: '74.3%', pf: 3.76, pl: '$10,395' },
                    { year: 2021, trades: 372, wr: '75.5%', pf: 3.44, pl: '$8,566' },
                    { year: 2022, trades: 321, wr: '72.3%', pf: 2.41, pl: '$9,943' },
                    { year: 2023, trades: 409, wr: '75.6%', pf: 3.72, pl: '$11,342' },
                    { year: 2024, trades: 357, wr: '75.1%', pf: 3.39, pl: '$11,382' },
                    { year: 2025, trades: 384, wr: '74.5%', pf: 3.01, pl: '$13,866' },
                  ].map((row) => (
                    <tr key={row.year} className="border-b border-slate-800">
                      <td className="py-3 px-3 text-slate-300 font-semibold">{row.year}</td>
                      <td className="py-3 px-3 text-slate-300">{row.trades}</td>
                      <td className="py-3 px-3 text-green-400">{row.wr}</td>
                      <td className="py-3 px-3 text-green-400 font-bold">{row.pf}</td>
                      <td className="py-3 px-3 text-green-400 font-bold">{row.pl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-slate-800/50 border border-green-700/50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-slate-400 mb-2">Seven Consecutive Profitable Years</p>
                  <p className="text-green-400 font-bold text-3xl">$68,727</p>
                  <p className="text-slate-400 text-sm mt-1">(single MNQ contract)</p>
                </div>
                <div>
                  <p className="text-slate-400 mb-2">Maximum Drawdown</p>
                  <p className="text-white font-bold text-3xl">$1,446</p>
                  <p className="text-slate-400 text-sm mt-1">(2.1% of total profit)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          The Real Discovery
        </h2>
        <p className="text-xl text-center text-slate-300 mb-12 max-w-3xl mx-auto">
          Exit Management Is Everything
        </p>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-slate-300 mb-8">
            The entire <span className="text-green-400 font-bold">2.7x improvement</span> in profit factor 
            came from changing how we managed trades <em>after</em> entry. The entries stayed the same.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400">Exit Management</th>
                  <th className="text-center py-3 px-4 text-slate-400">Profit Factor</th>
                  <th className="text-center py-3 px-4 text-slate-400">Win Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-slate-300">Baseline (tight stops, fixed targets)</td>
                  <td className="py-3 px-4 text-center text-slate-300">1.18</td>
                  <td className="py-3 px-4 text-center text-slate-300">38%</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-slate-300">3-bar grace + fixed targets</td>
                  <td className="py-3 px-4 text-center text-slate-300">1.48</td>
                  <td className="py-3 px-4 text-center text-slate-300">55%</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-slate-300">5-bar grace + ATR trail</td>
                  <td className="py-3 px-4 text-center text-green-400 font-semibold">2.88</td>
                  <td className="py-3 px-4 text-center text-green-400 font-semibold">70%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-300 font-bold">7-bar grace + ATR trail</td>
                  <td className="py-3 px-4 text-center text-green-400 font-bold text-xl">3.18</td>
                  <td className="py-3 px-4 text-center text-green-400 font-bold text-xl">74%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-800/50 border border-blue-700/50 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4 text-blue-400">Why This Worked</h3>
          <p className="text-slate-300 mb-4">
            Al Brooks second-entry patterns identify where the market will resume its trend. But right after entry, 
            there's often one last wave of counter-trend pressure — the same selling that created the pullback in the first place.
          </p>
          <p className="text-white font-semibold text-lg">
            A tight stop gets hunted. A patient stop survives.
          </p>
          <p className="text-slate-400 text-sm mt-4 italic">
            Traders obsess over entries and neglect the exit strategy — where the real alpha lives.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20 max-w-6xl mx-auto bg-slate-900/30 -mx-4">
        <div className="px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            How SentinelBacktest Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-2xl font-bold">Upload Your Strategy</h3>
              <p className="text-slate-300">
                Python code, C# NinjaTrader strategies, or describe your logic for manual review
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-2xl font-bold">We Scan for Critical Bugs</h3>
              <p className="text-slate-300">
                Trend detection errors, circuit breaker bugs, risk-reward inversions, exit management mismatches
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-2xl font-bold">Get Your Audit Report</h3>
              <p className="text-slate-300">
                Line-by-line analysis, before/after comparison, specific fix recommendations
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">What We Catch</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 border border-red-700/50 rounded-lg p-4">
                <p className="text-red-400 font-semibold mb-2">CRITICAL</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>✓ Same-bar entry/exit</li>
                  <li>✓ Broken trend detection</li>
                  <li>✓ Circuit breaker bugs</li>
                  <li>✓ Inverted risk-reward</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 border border-yellow-700/50 rounded-lg p-4">
                <p className="text-yellow-400 font-semibold mb-2">MODERATE</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>✓ Missing slippage & commissions</li>
                  <li>✓ Perfect fills assumptions</li>
                  <li>✓ Exit management mismatches</li>
                  <li>✓ Statistical noise (small samples)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Case Study */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Other Case Studies
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl">Z-Score Mean Reversion</CardTitle>
              <CardDescription>Same-bar entry bias</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Backtest:</span>
                <span className="text-green-400">+$103,846 (67% WR)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Bug:</span>
                <span className="text-slate-300">Entering at close of signal bar</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Corrected:</span>
                <span className="text-red-400">-$192,565 (48% WR)</span>
              </div>
              <div className="pt-3 border-t border-slate-700">
                <p className="text-red-400 font-bold">
                  $296,411 fake profit
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl">Support/Resistance Limits</CardTitle>
              <CardDescription>Missing slippage & commissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Backtest:</span>
                <span className="text-green-400">+$2,847 (76% WR)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Bug:</span>
                <span className="text-slate-300">Perfect fills, no costs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Corrected:</span>
                <span className="text-green-400">+$1,133 (76% WR)</span>
              </div>
              <div className="pt-3 border-t border-slate-700">
                <p className="text-yellow-400 font-bold">
                  60% profit reduction
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl text-slate-300">
            <span className="text-red-400 font-bold">Total fake profit caught in testing: $331K+</span>
          </p>
          <p className="text-slate-400 mt-2">
            Every single strategy looked profitable. Every single one had a bug that would've killed it in live trading.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto bg-slate-900/30 -mx-4">
        <div className="px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Pricing
          </h2>

          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-to-br from-blue-950/30 to-slate-800/50 border-blue-700/50">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">EARLY ACCESS</CardTitle>
                <CardDescription className="text-xl text-slate-300 mt-2">
                  First 100 Users
                </CardDescription>
                <div className="mt-6">
                  <p className="text-green-400 font-bold text-2xl">FREE Audit</p>
                  <p className="text-slate-400 text-sm mt-1">then</p>
                  <p className="text-4xl font-bold text-blue-400 mt-2">
                    $49/month
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>One free strategy audit (join waitlist)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Lock in $49/month for life</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Python support (launch week of Feb 17)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>C#/NinjaTrader (Q1 2026)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>All bias checks + exit analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>7-day money-back guarantee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Cancel anytime</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-center text-slate-400">
                    After first 100: <span className="text-white font-bold">$99/month</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email Capture Form */}
      <section id="waitlist" className="px-4 py-20 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Join the Waitlist
          </h2>
          <p className="text-xl text-center text-slate-300 mb-12">
            Be among the first 100 traders to get a free strategy audit + lock in $49/month for life
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>

              <div>
                <label htmlFor="platform" className="block text-sm font-medium mb-2">
                  Trading Platform
                </label>
                <select
                  id="platform"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-white"
                >
                  <option value="">Select platform...</option>
                  <option value="ninjatrader">NinjaTrader</option>
                  <option value="tradestation">TradeStation</option>
                  <option value="python">Python/Pandas</option>
                  <option value="pinescript">Pine Script (TradingView)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
              >
                Join Waitlist — Get Free Audit
              </Button>
            </form>
          ) : (
            <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-8 text-center">
              <p className="text-2xl font-bold text-green-400 mb-2">You're on the list!</p>
              <p className="text-slate-300">Check your email for next steps.</p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Stop Deploying Broken Backtests
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-300">
          <p>
            The trader with the Al Brooks strategy was ready to quit after running 252 parameter combinations.
          </p>
          <p className="text-white font-bold text-xl">
            The parameters weren't the problem. The bugs were.
          </p>
          <p>
            We found them in 20 minutes. Fixed them. Rebuilt the strategy. Validated it across 7 years.
          </p>
          <p className="text-green-400 font-bold text-2xl">
            Profit factor: 3.18. Walk-forward validated. Ready for paper trading.
          </p>
          <p className="text-slate-300">
            Don't waste 10 months on broken code.
          </p>
        </div>

        <div className="mt-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-8 h-auto"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist — Get Free Audit
          </Button>
          <p className="text-sm text-slate-400 mt-4">
            First 100 users • Launch week of Feb 17 • 7-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-slate-400 italic">
            "Built by a trader who's been there."
          </p>
          <p className="text-slate-300">
            I'm Mitch. I've spent 10 months building algorithmic trading systems for futures markets.
          </p>
          <p className="text-slate-300">
            If you backtest strategies and want to catch bugs before you deploy, this is built for you.
          </p>
          <div className="flex justify-center gap-6 text-sm text-slate-400 pt-4">
            <a
              href="https://twitter.com/Sentinel_Algo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              @Sentinel_Algo
            </a>
          </div>
          <p className="text-xs text-slate-500 pt-4">
            © 2026 SentinelBacktest. Not financial advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
