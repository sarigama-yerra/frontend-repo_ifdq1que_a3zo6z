import { useRef, useEffect } from 'react'

export default function Marquee({ items = [], speed = 50, reverse = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const animate = () => {
      const direction = reverse ? -1 : 1
      const step = direction * 0.5 * (speed / 50)
      el.scrollLeft += step
      if (el.scrollLeft <= 0) el.scrollLeft = el.scrollWidth / 2
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 1
      req = requestAnimationFrame(animate)
    }
    let req = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(req)
  }, [speed, reverse])

  const content = [...items, ...items]

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div ref={ref} className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth" style={{scrollBehavior:'auto'}}>
        {content.map((item, i) => (
          <div key={i} className="flex-none rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100/90">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
