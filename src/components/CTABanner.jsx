import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-10 text-center">
          <h3 className="text-3xl sm:text-4xl text-white font-semibold tracking-tight">Upgrade Your Atmosphere</h3>
          <p className="text-white/70 mt-3">Bring real flame ambience anywhere — no installation required.</p>
          <Link to="/product" className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-brass text-black font-medium hover:brightness-110 mt-6">Order Today</Link>
        </div>
      </div>
    </section>
  )
}
