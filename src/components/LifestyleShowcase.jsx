import { motion } from 'framer-motion'

export default function LifestyleShowcase() {
  const images = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1400&auto=format&fit=crop'
  ]
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Designed for Every Space</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Warm ambience in living rooms, kitchens, offices and balconies — wherever you unwind.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((src,i)=> (
            <motion.div key={src} initial={{opacity:0,scale:0.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="overflow-hidden rounded-3xl border border-white/10">
              <img src={src} className="w-full h-[340px] object-cover" alt="EmberMini lifestyle" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
