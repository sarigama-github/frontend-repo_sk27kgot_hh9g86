import { motion } from 'framer-motion'
import { Leaf, Droplets, ShieldCheck, Package } from 'lucide-react'

const features = [
  { icon: Droplets, title: 'Smokeless & Odorless', desc: 'Enjoy a clean burn with zero smoke and no lingering odors.' },
  { icon: Package, title: 'Compact & Portable', desc: 'Fits perfectly on tables, desks and balconies — move it with ease.' },
  { icon: Leaf, title: 'Eco‑friendly Fuel', desc: 'Powered by bio‑ethanol from renewable sources for a greener flame.' },
  { icon: ShieldCheck, title: 'Safe Flame Control', desc: 'Tempered glass, stable base and flame regulator for peace of mind.' },
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Why EmberMini?</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Smokeless, portable, eco‑friendly and crafted with premium materials that elevate any space.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon,title,desc},i)=> (
            <motion.div key={title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="w-10 h-10 rounded-lg bg-brass/20 text-brass flex items-center justify-center mb-4">
                <Icon className="w-5 h-5"/>
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="text-white/70 text-sm mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
