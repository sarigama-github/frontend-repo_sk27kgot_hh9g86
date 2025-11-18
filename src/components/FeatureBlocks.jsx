import { Droplets, Flame, Leaf, ShieldCheck } from 'lucide-react'

export default function FeatureBlocks(){
  const blocks = [
    { Icon: Flame, title: 'Flame Control', text: 'Adjustable flame with regulator for the right ambience and safety.' },
    { Icon: Droplets, title: 'Clean Burn', text: 'Smokeless, odorless combustion using high‑purity bio‑ethanol.' },
    { Icon: Leaf, title: 'Eco Fuel', text: 'Renewable-source fuel with zero soot — better for you and the planet.' },
    { Icon: ShieldCheck, title: 'Premium Materials', text: 'Tempered glass and brushed metal in matte black with brass accents.' },
  ]
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blocks.map(({Icon,title,text})=> (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="w-10 h-10 rounded-lg bg-brass/20 text-brass flex items-center justify-center mb-4"><Icon className="w-5 h-5"/></div>
            <div className="text-white font-medium">{title}</div>
            <div className="text-white/70 text-sm mt-2">{text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
