import { useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Security', href: '#security' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 shadow-lg shadow-blue-500/30 flex items-center justify-center">
            <ShieldCheck className="text-white" size={20} />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">Intuition Bets</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-blue-100/90 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#cta" className="rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm font-medium backdrop-blur border border-white/10 transition">
            Launch App
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white border border-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur shadow-xl">
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block w-full rounded-lg px-3 py-2 text-blue-100 hover:text-white hover:bg-white/5">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="block w-full text-center rounded-lg px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium">
              Launch App
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
