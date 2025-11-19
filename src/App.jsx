import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(45rem_45rem_at_50%_-10%,rgba(56,189,248,0.10),transparent),radial-gradient(45rem_45rem_at_120%_10%,rgba(99,102,241,0.08),transparent)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
