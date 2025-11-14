import { Menu, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-white" />
          <span className="text-xl font-semibold tracking-tight">Novo</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
          <a href="#stories" className="hover:text-white transition-colors">Stories</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded border border-white/15 text-white/90"><Menu size={18} /></button>
          <button className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            <ShoppingBag size={16} /> Shop now
          </button>
        </div>
      </div>
    </header>
  )
}
