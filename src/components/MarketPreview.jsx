import { motion } from 'framer-motion'
import { TrendingUp, BadgeDollarSign, LineChart } from 'lucide-react'

export default function MarketPreview() {
  const markets = [
    {
      id: 1,
      title: 'Bitcoin > $100k by Dec 31, 2025?',
      yes: 0.62,
      trust: 12430,
      participants: 1204,
    },
    {
      id: 2,
      title: 'ETH ETF approved before Q2 2025?',
      yes: 0.48,
      trust: 8412,
      participants: 963,
    },
    {
      id: 3,
      title: 'Apple ships XR glasses by 2026?',
      yes: 0.31,
      trust: 5230,
      participants: 611,
    },
  ]

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Live market vibes</h2>
            <p className="text-blue-100/80 mt-1">A glimpse of how conviction flows in real time.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 font-medium border border-white/10">
            Explore all
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-5 hover:border-white/20 hover:bg-slate-900/80 transition relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-2xl bg-gradient-to-br from-sky-500/20 via-indigo-500/15 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-white font-semibold leading-tight">{m.title}</h3>
                <div className="flex items-center gap-1 text-emerald-300">
                  <TrendingUp size={18} />
                  <span className="text-sm font-medium">{Math.round(m.yes * 100)}% YES</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 text-blue-100/80 text-sm">
                <div className="inline-flex items-center gap-1">
                  <BadgeDollarSign size={16} className="text-cyan-300" />
                  <span>{m.trust.toLocaleString()} TT staked</span>
                </div>
                <div className="inline-flex items-center gap-1">
                  <LineChart size={16} className="text-violet-300" />
                  <span>{m.participants.toLocaleString()} participants</span>
                </div>
              </div>
              <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400" style={{ width: `${m.yes * 100}%` }} />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <button className="rounded-lg bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm font-medium border border-white/10 transition">View market</button>
                <button className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-2 text-sm font-medium shadow-lg shadow-blue-500/30">Stake YES</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
