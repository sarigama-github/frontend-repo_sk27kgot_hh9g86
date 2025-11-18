import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"></div>
        <img src="https://images.unsplash.com/photo-1585803114088-cd027272106a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXYXJtJTIwbGl2aW5nJTIwcm9vbSUyMGFtYmllbmNlfGVufDB8MHx8fDE3NjM0ODA2MDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Warm living room ambience" className="w-full h-full object-cover opacity-70"/>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">
        <div className="text-left">
          <motion.h1 initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
            Real Fire. Zero Hassle.
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.15, duration:0.6}} className="mt-6 text-lg text-white/80 max-w-xl">
            A compact bio fireplace designed for modern spaces. Bring cozy ambience anywhere — no smoke, no vent, no maintenance.
          </motion.p>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.3, duration:0.6}} className="mt-10 flex items-center gap-4">
            <Link to="/product" className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-brass text-black font-medium hover:brightness-110 transition">Buy Now</Link>
            <a href="#features" className="inline-flex h-11 items-center px-6 rounded-full border border-white/20 text-white/90 hover:bg-white/5 transition">Learn more</a>
          </motion.div>
          <div className="mt-8 text-white/60 text-sm flex items-center gap-2">
            <Flame className="w-4 h-4 text-brass"/>
            Clean, smokeless bio‑ethanol flame
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop" alt="EmberMini Bio Fireplace" className="w-full h-full object-cover"/>
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-brass/20 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
