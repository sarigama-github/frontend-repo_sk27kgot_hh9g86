import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IMAGES = [
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop&sat=-100',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop&blur=0'
]

export default function ProductSlider(){
  const [i, setI] = useState(0)
  const next = () => setI((i+1)%IMAGES.length)
  const prev = () => setI((i-1+IMAGES.length)%IMAGES.length)
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <AnimatePresence mode="wait">
              <motion.img key={i} src={IMAGES[i]} alt="EmberMini angles" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.4}} className="w-full h-[420px] object-cover" />
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              {IMAGES.map((_,idx)=> (
                <button key={idx} onClick={()=>setI(idx)} className={`w-2 h-2 rounded-full ${idx===i? 'bg-brass':'bg-white/40'}`}></button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">EmberMini Bio Fireplace</h2>
            <p className="text-white/70 mt-4">Premium materials, clean burn and safe flame control in a compact form. Perfect for coffee tables, workspaces and balconies.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={prev} className="h-10 px-5 rounded-full border border-white/20 text-white/80 hover:bg-white/5">Previous</button>
              <button onClick={next} className="h-10 px-5 rounded-full bg-brass text-black font-medium hover:brightness-110">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
