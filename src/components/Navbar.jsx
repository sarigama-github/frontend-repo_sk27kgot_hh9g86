import { Link, NavLink } from 'react-router-dom'
import { Flame } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 text-brass group-hover:scale-105 transition">
            <Flame className="w-4 h-4" />
          </div>
          <span className="font-semibold tracking-tight text-white">EmberMini</span>
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <NavLink to="/" end className={({isActive})=>`text-white/80 hover:text-white transition ${isActive? 'text-white': ''}`}>Home</NavLink>
          <NavLink to="/product" className={({isActive})=>`text-white/80 hover:text-white transition ${isActive? 'text-white': ''}`}>Product</NavLink>
          <NavLink to="/about" className={({isActive})=>`text-white/80 hover:text-white transition ${isActive? 'text-white': ''}`}>About</NavLink>
        </div>
        <Link to="/product" className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-brass text-black font-medium hover:brightness-110 transition shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">Buy Now</Link>
      </nav>
    </header>
  )
}
