import Navbar from '../components/Navbar'
import ProductSlider from '../components/ProductSlider'
import FeatureBlocks from '../components/FeatureBlocks'
import Comparison from '../components/Comparison'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Product(){
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(255,215,141,0.08),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(255,215,141,0.06),transparent)]"/>
      <Navbar />
      <main className="pt-16">
        <ProductSlider />
        <FeatureBlocks />
        <Comparison />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
