import { Shield, Coins, CheckCircle2, Sparkles, Clock, Globe2 } from 'lucide-react'
import Marquee from './Marquee'

export default function Features() {
  const items = [
    { icon: Shield, title: 'Trust-first', desc: 'Stake Intuition Trust Tokens to participate – reputation-backed markets that reduce Sybil risk.' },
    { icon: Coins, title: 'Instant settlement', desc: 'Payouts are distributed automatically to the winning side once results finalize.' },
    { icon: Clock, title: 'Low latency', desc: 'Fast, responsive order placement with near-instant confirmations.' },
    { icon: Globe2, title: 'Global access', desc: 'Accessible worldwide with a clean, modern interface and API.' },
    { icon: CheckCircle2, title: 'Binary markets', desc: 'Yes/No outcomes make it simple to price probability and hedge risk.' },
    { icon: Sparkles, title: 'Sleek UX', desc: 'Vibrant visuals, subtle motion, and a focus on clarity and control.' },
  ]

  const tickers = [
    'BTC>100k 62% YES',
    'ETH ETF 48% YES',
    'OpenAI IPO 35% YES',
    'US CPI < 2.5% 2025 44% YES',
    'ETH>$5k 2025 57% YES',
    'AAPL XR 31% YES',
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Marquee items={tickers} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur p-6 hover:bg-slate-900/70 transition shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/80 to-indigo-500/80 text-white inline-flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-1 text-sm text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
