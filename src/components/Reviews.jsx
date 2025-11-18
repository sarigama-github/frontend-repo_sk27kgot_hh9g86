import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const REVIEWS = [
  { name: 'Isabella M.', text: 'Instant coziness. No smoke, no fuss — just a beautiful flame. Feels premium on my coffee table.', rating: 5 },
  { name: 'Jonas K.', text: 'Love the compact size. I move it from my desk to the balcony in seconds.', rating: 5 },
  { name: 'Aisha R.', text: 'Smells clean and the glass looks stunning. Great for dinner parties.', rating: 4 },
]

export default function Reviews() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((index+1) % REVIEWS.length)
  const prev = () => setIndex((index-1+REVIEWS.length) % REVIEWS.length)

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-10">What Customers Say</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.4}} className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="text-5xl">{'\u2605'.repeat(REVIEWS[index].rating)}<span className="text-white/30">{'\u2605'.repeat(5-REVIEWS[index].rating)}</span></div>
              <p className="text-white/80 text-lg mt-4">{REVIEWS[index].text}</p>
              <div className="text-white/60 mt-3">{REVIEWS[index].name}</div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-3">
            <button onClick={prev} className="h-9 px-4 rounded-full border border-white/20 text-white/80 hover:bg-white/5">Previous</button>
            <button onClick={next} className="h-9 px-4 rounded-full bg-brass text-black font-medium hover:brightness-110">Next</button>
          </div>
        </div>
      </div>
    </section>
  )
}
