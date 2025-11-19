import { ArrowRight, Check, PartyPopper } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { title: 'Pick an event', desc: 'Browse curated markets with clear YES/NO outcomes.' },
    { title: 'Stake trust', desc: 'Use Trust Tokens on Intuition Net to back your view.' },
    { title: 'Settle instantly', desc: 'When results are verified, winnings are distributed automatically.' },
  ]

  return (
    <section id="how" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 backdrop-blur p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
              <p className="mt-3 text-blue-100/80">Three simple steps to start pricing the future with reputation-backed conviction.</p>

              <div className="mt-8 space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-none w-9 h-9 rounded-xl bg-white/10 border border-white/10 text-white inline-flex items-center justify-center">
                      <Check size={18} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{i + 1}. {s.title}</h3>
                      <p className="text-sm text-blue-100/80">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#cta" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-500/30">
                Launch App <ArrowRight size={18} />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl bg-slate-900/50 border border-white/10 p-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-blue-100/90 text-sm">Event</p>
                    <p className="text-white font-semibold">BTC above $100k in 2025?</p>
                    <div className="mt-3 flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 font-medium">YES 62%</span>
                      <span className="px-2 py-1 rounded-lg bg-rose-500/15 text-rose-300 font-medium">NO 38%</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-blue-100/90 text-sm">Trust Staked</p>
                    <p className="text-white font-semibold">12,430</p>
                    <p className="text-blue-100/70 text-xs">Participants: 1,204</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-blue-100/90 text-sm">Your Position</p>
                    <p className="text-white font-semibold">YES • 200 TT</p>
                    <p className="text-emerald-300 text-xs">Unrealized PnL +18%</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-center">
                    <div className="text-center">
                      <PartyPopper className="mx-auto text-amber-300" />
                      <p className="text-white font-semibold mt-2">Auto-settled</p>
                      <p className="text-blue-100/70 text-xs">Winners paid, losers recorded</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
