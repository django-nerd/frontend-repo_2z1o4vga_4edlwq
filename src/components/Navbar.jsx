import { Menu, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-black" />
          <span className="text-xl font-semibold tracking-tight">Novo</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#products" className="hover:opacity-70 transition-opacity">Products</a>
          <a href="#benefits" className="hover:opacity-70 transition-opacity">Benefits</a>
          <a href="#stories" className="hover:opacity-70 transition-opacity">Stories</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded border border-black/10"><Menu size={18} /></button>
          <button className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            <ShoppingBag size={16} /> Shop now
          </button>
        </div>
      </div>
    </header>
  )
}
