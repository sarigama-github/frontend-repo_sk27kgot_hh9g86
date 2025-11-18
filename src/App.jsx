import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeaturesGrid'
import LifestyleShowcase from './components/LifestyleShowcase'
import TechnicalSpecs from './components/TechnicalSpecs'
import Reviews from './components/Reviews'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(255,215,141,0.08),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(255,215,141,0.06),transparent)]"/>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <SectionDivider />
        <FeaturesGrid />
        <LifestyleShowcase />
        <TechnicalSpecs />
        <Reviews />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
