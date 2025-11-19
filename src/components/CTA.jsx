export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 backdrop-blur p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to trust your intuition?</h2>
          <p className="mt-3 text-blue-100/80 max-w-2xl mx-auto">
            Create or join a market in seconds. Stake Trust Tokens, express conviction, and settle transparently when results are in.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-500/30">
              Launch Web App
            </a>
            <a href="#faq" className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold border border-white/10 backdrop-blur">
              Learn more
            </a>
          </div>
          <p className="mt-4 text-xs text-blue-200/70">No wallet required to explore • Onboarding in under a minute</p>
        </div>
      </div>
    </section>
  )
}
