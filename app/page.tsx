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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            I found{' '}
            <span className="text-red-500">$296K in fake profits</span>
            <br />
            hiding in one backtest.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Your backtest is probably lying to you. Same-bar entry. Missing slippage. Grace period bias. 
            Let me show you exactly where.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Audit My Strategy — Join Beta Waitlist
            </Button>
            <p className="text-sm text-slate-400">
              Beta: $49/month • Limited spots
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section - 3 Biases */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          The 3 Biases Killing Your Strategy
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Bias #1 */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400">Same-Bar Entry Bias</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Your backtest enters a trade using the close price of the bar that generated the signal. 
                In live trading, you can only enter on the next bar's open. This single bug inflated one 
                strategy by $296,411.
              </p>
              <div className="bg-slate-900/50 p-4 rounded border border-slate-700">
                <p className="text-yellow-400 font-bold text-lg">
                  Impact: $3-10 per trade in phantom profit
                </p>
              </div>
              <div className="bg-slate-950 p-3 rounded font-mono text-xs overflow-x-auto">
                <p className="text-red-400">❌ WRONG:</p>
                <p className="text-slate-400">entry_price = close[i]</p>
                <p className="text-green-400 mt-2">✅ CORRECT:</p>
                <p className="text-slate-400">entry_price = open[i+1]</p>
              </div>
            </CardContent>
          </Card>

          {/* Bias #2 */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400">Grace Period Bias</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Your strategy uses a "warm-up period" that sees future bars during backtesting. 
                Live trading doesn't get that luxury.
              </p>
              <div className="bg-slate-900/50 p-4 rounded border border-slate-700">
                <p className="text-yellow-400 font-bold text-lg">
                  Impact: 10-15% artificial win rate boost
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-slate-950 p-3 rounded">
                  <p className="text-slate-400 font-semibold">Backtest:</p>
                  <p className="text-green-400">73% win rate</p>
                </div>
                <div className="bg-slate-950 p-3 rounded">
                  <p className="text-slate-400 font-semibold">Reality:</p>
                  <p className="text-red-400">58% win rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bias #3 */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400">Slippage & Fill Bias</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Your backtest assumes perfect fills at exact prices. Real execution has slippage, 
                partial fills, and latency.
              </p>
              <div className="bg-slate-900/50 p-4 rounded border border-slate-700">
                <p className="text-yellow-400 font-bold text-lg">
                  Impact: $0.50-2.00 per trade in real costs
                </p>
              </div>
              <div className="bg-slate-950 p-3 rounded text-sm">
                <p className="text-slate-400">200 trades/year × $1/trade</p>
                <p className="text-red-400 font-bold mt-1">= $200+ in hidden costs</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Strategy #2: The $296K Wake-Up Call
        </h2>
        <p className="text-xl text-center text-slate-300 mb-16 max-w-3xl mx-auto">
          I almost went live with 10 contracts. This would have blown up my account.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <Card className="bg-gradient-to-br from-green-950/30 to-slate-800/50 border-green-700/50">
            <CardHeader>
              <CardTitle className="text-2xl">Before Bias Removal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Profit:</span>
                <span className="text-green-400 font-bold text-xl">+$103,846 ✅</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Win Rate:</span>
                <span className="text-green-400 font-bold">67%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Profit Factor:</span>
                <span className="text-green-400 font-bold">2.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="text-green-400 font-bold">✅ Ready to deploy</span>
              </div>
            </CardContent>
          </Card>

          {/* After */}
          <Card className="bg-gradient-to-br from-red-950/30 to-slate-800/50 border-red-700/50">
            <CardHeader>
              <CardTitle className="text-2xl">After Bias Removal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Profit:</span>
                <span className="text-red-400 font-bold text-xl">-$192,565 ❌</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Win Rate:</span>
                <span className="text-red-400 font-bold">51%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Profit Factor:</span>
                <span className="text-red-400 font-bold">0.88</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="text-red-400 font-bold">❌ Unprofitable</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-slate-800/50 border border-red-700/50 rounded-lg p-8">
          <div className="space-y-4">
            <div>
              <p className="text-slate-400 text-sm">The Problem:</p>
              <p className="text-slate-200">Same-bar entry + same-bar exit + missing slippage</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">The Lesson:</p>
              <p className="text-slate-200">"I almost went live with 10 contracts. This would have blown up my account."</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">The Impact:</p>
              <p className="text-red-400 font-bold text-2xl">$296,411 in fake profits that never existed</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
              1
            </div>
            <h3 className="text-2xl font-bold">Upload</h3>
            <p className="text-slate-300">
              Send us your backtest code or trade log (CSV format)
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
              2
            </div>
            <h3 className="text-2xl font-bold">Scan</h3>
            <p className="text-slate-300">
              Our engine checks for 12+ known biases automatically
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
              3
            </div>
            <h3 className="text-2xl font-bold">Audit</h3>
            <p className="text-slate-300">
              Get detailed report with corrected metrics and recommendations
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Pricing
        </h2>

        <div className="max-w-md mx-auto">
          <Card className="bg-gradient-to-br from-blue-950/30 to-slate-800/50 border-blue-700/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">BETA ACCESS</CardTitle>
              <CardDescription className="text-4xl font-bold text-blue-400 mt-4">
                $49/month
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Limited to first 50 traders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Lock in $49/month for life</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Full bias audit + corrected backtest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Cancel anytime</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-center text-slate-400">
                  After beta closes: <span className="text-white font-bold">$99/month</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Email Capture Form */}
      <section id="waitlist" className="px-4 py-20 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Join the Waitlist
          </h2>
          <p className="text-xl text-center text-slate-300 mb-12">
            Be among the first 50 traders to get beta access at $49/month (lock-in pricing for life)
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
                Join Waitlist
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

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-slate-400 italic">
            "Built by a trader who lost money trusting backtests."
          </p>
          <div className="flex justify-center gap-6 text-sm text-slate-400">
            <a
              href="https://twitter.com/Sentinel_Algo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              @Sentinel_Algo
            </a>
          </div>
          <p className="text-xs text-slate-500">
            © 2024 SentinelBacktest. Not financial advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
