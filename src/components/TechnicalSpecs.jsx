export default function TechnicalSpecs() {
  const specs = [
    { k: 'Dimensions', v: '18cm (W) × 18cm (D) × 20cm (H)' },
    { k: 'Fuel Type', v: 'Bio‑ethanol (denatured alcohol)' },
    { k: 'Burn Time', v: '60–90 minutes per refill' },
    { k: 'Materials', v: 'Tempered glass, brushed metal (matte black / brass accents)' },
    { k: 'Safety', v: 'Stable base, flame regulator, protective glass shields' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Technical Specs</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Everything you need to know before you bring EmberMini home.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map(s=> (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">{s.k}</div>
              <div className="text-white mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
