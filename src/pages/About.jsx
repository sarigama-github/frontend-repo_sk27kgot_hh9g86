import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(255,215,141,0.08),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(255,215,141,0.06),transparent)]"/>
      <Navbar />
      <main className="pt-20">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl font-semibold tracking-tight">Our Mission</h1>
            <p className="text-white/70 mt-4">Bring cozy atmosphere to any space without complexity.</p>
          </div>
        </section>
        <section className="py-8">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-medium">Sustainability</h2>
            <p className="text-white/70 mt-3">We source bio‑ethanol responsibly and prioritize a zero‑emission burn. Packaging is recyclable and supply partners are vetted for ethical practices.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
