export default function FAQ(){
  const faqs = [
    { q: 'Is it safe indoors?', a: 'Yes. EmberMini uses clean-burning bio‑ethanol and includes tempered glass shields and a stable base. Always use on flat surfaces away from drafts and follow the included safety instructions.' },
    { q: 'How long does one refill last?', a: 'Typically 60–90 minutes depending on flame height and room conditions.' },
    { q: 'Does it produce heat?', a: 'Yes, a gentle warmth similar to multiple candles — perfect for ambience rather than primary heating.' },
  ]
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({q,a})=> (
            <details key={q} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer list-none select-none text-white font-medium flex items-center justify-between">{q}<span className="text-white/40 group-open:rotate-45 transition">+</span></summary>
              <p className="text-white/70 mt-3">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
