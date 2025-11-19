import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glass headline */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1 text-xs text-blue-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now on Intuition Net • Trust-minimized event markets
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Markets that move with reputation
          </h1>

          <p className="mt-5 text-blue-100/90 text-lg">
            A futuristic prediction venue for binary outcomes. Stake Trust Tokens to back your beliefs. Instant, transparent settlement for winners.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-500/30">
              Start Betting
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold border border-white/10 backdrop-blur">
              How it works
            </a>
          </div>
        </motion.div>

        {/* Floating stats */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl">
          {[{label:'Total Trust Staked', value:'58,204'}, {label:'Active Markets', value:'128'}, {label:'Avg. Settlement', value:'< 30s'}].map((s,i)=> (
            <motion.div
              key={s.label}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur p-4"
            >
              <p className="text-xs text-blue-200/70">{s.label}</p>
              <p className="mt-1 text-white text-xl font-semibold">{s.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent" />
      </div>
    </section>
  )
}
