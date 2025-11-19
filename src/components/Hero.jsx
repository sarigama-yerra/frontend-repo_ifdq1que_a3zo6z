import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1 text-xs text-blue-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now on Intuition Net • Trust-minimized event markets
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Bet with confidence using Trust Tokens
          </h1>

          <p className="mt-5 text-blue-100/90 text-lg">
            A modern prediction platform for Yes/No outcomes. Stake trust, not just coins. When results are in, winners claim instantly and losers settle transparently.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-500/30">
              Start Betting
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold border border-white/10 backdrop-blur">
              How it works
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent" />
      </div>
    </section>
  )
}
