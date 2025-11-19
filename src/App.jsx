import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'
import MarketPreview from './components/MarketPreview'
import BackgroundFX from './components/BackgroundFX'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-50">
      <BackgroundFX />

      <div className="relative">
        <Navbar />
        <Hero />
        <MarketPreview />
        <Features />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
