import { memo } from 'react'

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle grain */}
      <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_10%_-10%,rgba(59,130,246,0.10),transparent),radial-gradient(80rem_60rem_at_110%_10%,rgba(168,85,247,0.10),transparent)]" />
      <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-soft-light" />

      {/* Iridescent blobs */}
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-cyan-400/40 via-blue-500/30 to-violet-500/30 blur-3xl animate-blob" />
      <div className="absolute top-32 -right-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-indigo-500/20 to-sky-400/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] rounded-[40%] bg-gradient-conic from-sky-400/20 via-indigo-500/15 to-fuchsia-500/20 blur-3xl animate-slow-spin" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950" />

      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

export default memo(BackgroundFX)
