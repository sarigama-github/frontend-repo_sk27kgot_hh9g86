export default function Comparison(){
  const items = [
    { title: 'Bio Fireplace', points: ['Real flame ambience','Smokeless & odorless','No installation','Premium materials'] },
    { title: 'Candles', points: ['Weak flame','Soot & fragrance residue','Multiple to create ambience','Dripping wax'] },
    { title: 'Diffusers', points: ['No flame ambience','Requires power','Fragrance only','Maintenance & refills'] },
  ]
  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-10">Why bio fireplaces outperform traditional candles and diffusers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(col=> (
            <div key={col.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-white font-medium">{col.title}</div>
              <ul className="mt-3 space-y-2 text-white/70 text-sm list-disc list-inside">
                {col.points.map(p=> <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
