export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© "Intuition Bets". All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-blue-200/80 hover:text-white">Terms</a>
            <a href="#" className="text-blue-200/80 hover:text-white">Privacy</a>
            <a href="#" className="text-blue-200/80 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
