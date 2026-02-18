'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('https://api.convertkit.com/v3/forms/9082725/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: 'Ak1AieraF9kC-T-CxNMmYA',
          email: email,
          fields: { platform: platform }
        })
      });
      
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              alt="Sentinel" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-blue-400">Access Exclusive</span>
            <br />
            <span className="text-green-400">AI-Powered Proprietary</span>
            <br />
            <span className="text-white">Trading Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Sentinel develops <span className="text-blue-400 font-semibold">regime-aware strategies</span> while you sleep. 
            Test <span className="text-white font-semibold">1000+ configurations overnight</span>. 
            Wake up to validated, actionable insights.
          </p>
          
          <div className="mt-6 inline-block bg-blue-900/30 border border-blue-600/50 rounded-lg px-6 py-3">
            <p className="text-blue-300 font-semibold">
              🤖 Built on 10 months research • 23,520+ strategies tested • 96.7% failed — we learned why
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Strategy Analysis → Join Waitlist
            </Button>
            <p className="text-sm text-slate-400">
              First 25 get FREE strategy analysis • Beta access $97/month
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Why 96% of Algo Strategies Fail
          </h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              I spent 10 months testing 23,520 algorithmic trading strategies.
            </p>
            <p className="font-semibold text-red-400">
              22,749 of them LOST MONEY.
            </p>
            <p>
              That's a 96.7% failure rate.
            </p>
            <p>
              I tested every indicator combination. RSI crosses. MACD divergences. Bollinger Band breakouts. VWAP reversions.
            </p>
            <p className="font-semibold text-yellow-400">
              None of them worked consistently.
            </p>
            <p className="text-white font-bold text-xl pt-4 border-t border-slate-700">
              Because markets aren't one game. They're multiple games that switch constantly.
            </p>
          </div>
        </div>
      </section>

      {/* The Three Problems */}
      <section className="px-4 py-20 max-w-6xl mx-auto bg-slate-900/30 -mx-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 px-4">
          The Three Problems Killing Your Strategies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {/* Problem #1 */}
          <Card className="bg-slate-800/50 border-red-900">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400">Regime Blindness</CardTitle>
              <CardDescription className="text-slate-400 text-base">
                Your strategy works in ONE market condition
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>
                RSI &lt; 30 works in <span className="text-green-400 font-semibold">trending markets</span>.
              </p>
              <p>
                It <span className="text-red-400 font-semibold">LOSES</span> in choppy markets (whipsaws through oversold).
              </p>
              <p className="text-white font-semibold pt-2 border-t border-slate-700">
                Static strategies break when markets switch games.
              </p>
            </CardContent>
          </Card>

          {/* Problem #2 */}
          <Card className="bg-slate-800/50 border-yellow-900">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-400">Small Sample Deception</CardTitle>
              <CardDescription className="text-slate-400 text-base">
                21 trades isn't enough to know if it's edge or luck
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>
                I had a strategy: <span className="text-green-400 font-semibold">+$4,966 on 8 trades</span> (87% WR).
              </p>
              <p>
                Looked perfect.
              </p>
              <p className="text-red-400 font-semibold">
                Live result: FAILED over 10 weeks.
              </p>
              <p className="text-white font-semibold pt-2 border-t border-slate-700">
                You need 100+ trades to distinguish signal from noise.
              </p>
            </CardContent>
          </Card>

          {/* Problem #3 */}
          <Card className="bg-slate-800/50 border-blue-900">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400">Development Bottleneck</CardTitle>
              <CardDescription className="text-slate-400 text-base">
                Manual testing takes weeks. Markets move faster.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>
                Testing 847 parameter combinations manually = <span className="text-red-400 font-semibold">4-6 weeks</span>.
              </p>
              <p>
                By the time you finish, market structure has changed.
              </p>
              <p className="text-green-400 font-semibold">
                Sentinel tests 847 configs in ONE NIGHT.
              </p>
              <p className="text-white font-semibold pt-2 border-t border-slate-700">
                Accelerate your research cycle from months to days.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Sentinel Works */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          How Sentinel Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-2xl font-bold text-blue-400">Test Overnight</h3>
            <p className="text-slate-300 leading-relaxed">
              Give Sentinel your strategy concept. It tests 1000+ parameter combinations while you sleep.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-2xl font-bold text-green-400">Regime Analysis</h3>
            <p className="text-slate-300 leading-relaxed">
              Sentinel classifies market regimes and tests your strategy in EACH condition separately.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-2xl font-bold text-purple-400">Validated Results</h3>
            <p className="text-slate-300 leading-relaxed">
              Wake up to ranked configurations, regime breakdowns, and only strategies with 100+ trades validation.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto bg-slate-900/30 -mx-4">
        <div className="px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Case Study: V4 Mean Reversion
          </h2>
          
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              <span className="text-blue-400 font-semibold">October 2025.</span> Sentinel tested 294 configurations of a Z-score mean reversion strategy.
            </p>
            
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
              <p className="text-xl font-bold text-white mb-4">Results:</p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Trades:</span>
                  <span className="font-semibold text-white">21</span>
                </li>
                <li className="flex justify-between">
                  <span>Win Rate:</span>
                  <span className="font-semibold text-green-400">65%</span>
                </li>
                <li className="flex justify-between">
                  <span>Profit Factor:</span>
                  <span className="font-semibold text-green-400">3.23</span>
                </li>
                <li className="flex justify-between">
                  <span>Net Profit:</span>
                  <span className="font-semibold text-green-400">$1,178</span>
                </li>
                <li className="flex justify-between border-t border-slate-600 pt-2 mt-2">
                  <span className="font-bold">Status:</span>
                  <span className="font-semibold text-yellow-400">PROMISING (need 100+ trades)</span>
                </li>
              </ul>
            </div>

            <p className="text-yellow-400 font-semibold">
              But we're NOT trading it yet.
            </p>
            
            <p>
              Why? 21 trades isn't enough to distinguish edge from luck.
            </p>
            
            <p>
              Sentinel is extending the backtest to hunt for 80+ more validated trades before deployment consideration.
            </p>
            
            <p className="text-white font-bold text-xl pt-4 border-t border-slate-700">
              This is the discipline that separates systematic edge-finding from gambling.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Beta Access Pricing
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free Analysis */}
          <Card className="bg-slate-800/50 border-blue-900">
            <CardHeader>
              <CardTitle className="text-3xl text-blue-400">Free Strategy Analysis</CardTitle>
              <CardDescription className="text-slate-400 text-lg">
                First 25 people
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-4xl font-bold text-white">
                $0
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Regime analysis of your strategy
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Edge detection across market conditions
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Full backtest report (48h turnaround)
                </li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Claim Your Free Analysis
              </Button>
            </CardContent>
          </Card>

          {/* Beta Membership */}
          <Card className="bg-slate-800/50 border-green-900 ring-2 ring-green-500/50">
            <CardHeader>
              <CardTitle className="text-3xl text-green-400">Founding Member Access</CardTitle>
              <CardDescription className="text-slate-400 text-lg">
                Limited to 10 beta users
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-4xl font-bold text-white">
                $97<span className="text-xl text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Overnight strategy testing (1000+ configs)
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Real-time regime detection alerts
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Weekly Strategy Lab reports
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Members-only case studies
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Lock in $97/month pricing FOR LIFE
                </li>
              </ul>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Founding Members
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <p className="text-center text-slate-400 mt-12 text-lg">
          Regular pricing after beta: <span className="text-white font-semibold">$197/month</span>
        </p>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 -mx-4">
        <div className="px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              📊 The Sentinel Report
            </h2>
            <p className="text-xl text-slate-300">
              Weekly AI-powered trading intelligence. Real strategy testing results. Zero BS.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Newsletter Info */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-blue-500/30 rounded-lg p-6">
                <div className="text-blue-400 font-bold text-sm mb-2">LATEST ISSUE #001</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Why 96% of Strategies Fail
                </h3>
                <p className="text-slate-300 mb-4">
                  847 strategies tested this week. 23 profitable (2.7%). FOMC regime shift analysis. 
                  V5 Fractal Reversion update. Deep-dive: What is regime-aware trading?
                </p>
                <a 
                  href="/newsletter-001.html"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  Read Issue #001 →
                </a>
              </div>

              <div className="text-slate-400 text-sm">
                <p className="mb-2 font-semibold text-white">Published every Sunday, 7:00 PM CT</p>
                <ul className="space-y-1">
                  <li>✓ Overnight strategy testing results</li>
                  <li>✓ Market regime analysis</li>
                  <li>✓ Wins AND losses (full transparency)</li>
                  <li>✓ 100% free, unsubscribe anytime</li>
                </ul>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">23,520+</div>
                <div className="text-slate-400">Strategies Tested</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">96.7%</div>
                <div className="text-slate-400">Failure Rate</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-slate-400">Transparency</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">Weekly</div>
                <div className="text-slate-400">New Insights</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Subscribe Below → Get Weekly Reports
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          About Sentinel Algo
        </h2>
        <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Independent quantitative research lab. We spent 10 months and 23,520+ strategy tests to build a Sharpe 4.29 MES futures strategy — with 5.5 years of walk-forward validation behind it. We publish the failures because that&apos;s where the edge lives.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Sharpe 4.29</div>
            <div className="text-slate-400 text-sm">Live-validated PCS strategy</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">5.5 Years</div>
            <div className="text-slate-400 text-sm">Walk-forward validation window</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">23,520+</div>
            <div className="text-slate-400 text-sm">Strategies tested</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">96.7%</div>
            <div className="text-slate-400 text-sm">Failure rate — the learning engine</div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/about" className="inline-block text-blue-400 hover:text-blue-300 font-semibold transition-colors">
            Read the full story →
          </Link>
        </div>
      </section>

      {/* Latest Research */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Latest Research
        </h2>
        <p className="text-xl text-center text-slate-300 mb-12 max-w-3xl mx-auto">
          We publish our research — including our failures — because transparency accelerates progress.
        </p>

        <div className="max-w-2xl mx-auto space-y-6">
          <Link href="/blog/magnitude-paradox">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 text-sm text-slate-400 mb-2">
                  <span>February 13, 2026</span>
                  <span>•</span>
                  <span className="text-red-400 font-semibold">Research Paper</span>
                </div>
                <CardTitle className="text-2xl leading-tight">
                  The Magnitude Paradox: We Built a 99.8% Accurate Market Instability Detector — and Can&apos;t Trade It
                </CardTitle>
                <CardDescription className="text-slate-400 text-base mt-2">
                  13,000+ configurations. Two instruments. Five timeframes. We can predict <em>when</em> the market will make a big move with 99.8% accuracy. We just can&apos;t predict <em>which direction</em>.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-blue-400 font-semibold text-sm">
                  Read the full article →
                </span>
              </CardContent>
            </Card>
          </Link>

          <div className="text-center pt-4">
            <Link href="/research" className="inline-block bg-slate-800/50 border border-slate-700 hover:border-blue-600/40 text-blue-400 hover:text-blue-300 font-semibold px-6 py-3 rounded-lg transition-colors">
              View All Research →
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="px-4 py-20 max-w-3xl mx-auto">
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Get Early Access
          </h2>
          <p className="text-slate-300 text-center mb-8 text-lg">
            Join the waitlist for free strategy analysis and beta access notification.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-900 border-slate-600 text-white text-lg py-6"
                />
              </div>
              <div>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  required
                  className="w-full bg-slate-900 border-slate-600 text-white text-lg py-3 px-4 rounded-md"
                >
                  <option value="">Select your trading platform...</option>
                  <option value="NinjaTrader">NinjaTrader</option>
                  <option value="Python">Python (custom)</option>
                  <option value="TradeStation">TradeStation</option>
                  <option value="MultiCharts">MultiCharts</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 h-auto disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Join Waitlist → Get Free Analysis'}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-6xl">✓</div>
              <p className="text-2xl font-bold text-green-400">You're on the list!</p>
              <p className="text-slate-300">
                Check your email for next steps. We'll be in touch within 48 hours with your free strategy analysis instructions.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Tools Teaser */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          🛠️ Tools
        </h2>
        <p className="text-xl text-center text-slate-300 mb-10 max-w-3xl mx-auto">
          The infrastructure we built to survive 23,520+ strategy tests — becoming standalone tools for serious algo traders.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <div className="bg-slate-800/50 border border-purple-900/50 rounded-lg p-6">
            <div className="text-2xl mb-3">🛡️</div>
            <h3 className="text-lg font-bold text-purple-400 mb-2">Sentinel Shield</h3>
            <p className="text-slate-400 text-sm">AI-powered backtest bias detector. Caught $300K+ in phantom profits from leaky backtests.</p>
            <span className="inline-block mt-3 text-xs bg-purple-900/40 text-purple-300 border border-purple-800/50 rounded-full px-2 py-1">Beta</span>
          </div>
          <div className="bg-slate-800/50 border border-blue-900/50 rounded-lg p-6">
            <div className="text-2xl mb-3">🌐</div>
            <h3 className="text-lg font-bold text-blue-400 mb-2">Regime Classifier</h3>
            <p className="text-slate-400 text-sm">The same regime detection layer that powers PCS — as a standalone real-time tool.</p>
            <span className="inline-block mt-3 text-xs bg-blue-900/40 text-blue-300 border border-blue-800/50 rounded-full px-2 py-1">Coming Soon</span>
          </div>
          <div className="bg-slate-800/50 border border-green-900/50 rounded-lg p-6">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-green-400 mb-2">0DTE Scanner</h3>
            <p className="text-slate-400 text-sm">Regime-aware same-day expiry scanner for SPX/SPY options. High-probability entry windows.</p>
            <span className="inline-block mt-3 text-xs bg-green-900/40 text-green-300 border border-green-800/50 rounded-full px-2 py-1">Coming Soon</span>
          </div>
        </div>
        <div className="text-center">
          <Link href="/tools" className="inline-block bg-slate-800/50 border border-slate-700 hover:border-purple-600/40 text-purple-400 hover:text-purple-300 font-semibold px-6 py-3 rounded-lg transition-colors">
            See All Tools →
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact
        </h2>
        <p className="text-slate-300 mb-8 text-lg">
          Questions, ideas, or collaboration proposals — we read everything.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:sentinelalgotrading@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            ✉️ sentinelalgotrading@gmail.com
          </a>
          <a
            href="https://twitter.com/Sentinel_Algo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            𝕏 @Sentinel_Algo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-slate-800 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">
            © 2026 Sentinel Algo. Built by a trader who tested 23,520+ strategies.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/blog" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Blog</Link>
            <Link href="/research" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Research</Link>
            <Link href="/tools" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Tools</Link>
            <Link href="/about" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">About</Link>
            <a href="https://twitter.com/Sentinel_Algo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              𝕏 @Sentinel_Algo
            </a>
            <a href="/newsletter.html" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Newsletter
            </a>
          </div>
        </div>
        <p className="text-slate-500 text-sm text-center md:text-left mt-4">
          ⚠️ Disclaimer: Past performance is not indicative of future results. Trading involves substantial risk of loss. All strategies shared are for educational purposes. Not investment advice.
        </p>
      </footer>
    </main>
  );
}
