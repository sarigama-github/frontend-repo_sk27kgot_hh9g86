export default function Footer(){
  return (
    <footer className="py-10 border-t border-white/10 text-center text-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <div>© {new Date().getFullYear()} EmberMini. All rights reserved.</div>
      </div>
    </footer>
  )
}
