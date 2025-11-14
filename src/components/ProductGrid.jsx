import { Star, ArrowRight } from 'lucide-react'

const products = [
  { id: 1, name: 'Mono Card Holder', price: 45, rating: 4.8, img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Glass Wallet', price: 89, rating: 4.9, img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Carbon Fiber Card', price: 129, rating: 4.7, img: 'https://images.unsplash.com/photo-1543807535-eceef0bc6590?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Minimalist Key Tag', price: 25, rating: 4.6, img: 'https://images.unsplash.com/photo-1600508774635-8a2f89d2bb10?q=80&w=1200&auto=format&fit=crop' },
]

function ProductCard({ product }) {
  return (
    <div className="group border border-black/10 rounded-xl overflow-hidden bg-white">
      <div className="aspect-square overflow-hidden">
        <img src={product.img} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4 flex items-start justify-between gap-3">
        <div>
          <h4 className="font-medium leading-tight">{product.name}</h4>
          <div className="flex items-center gap-1 text-xs text-black/60 mt-1">
            <Star size={14} className="fill-black" /> {product.rating}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm">${product.price}</div>
          <button className="mt-2 inline-flex items-center gap-1 text-xs font-medium hover:underline">
            Add to cart <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProductGrid() {
  return (
    <section id="products" className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured products</h2>
            <p className="text-sm text-black/60 mt-1">Curated best-sellers loved by our customers</p>
          </div>
          <a href="#" className="text-sm hover:underline">Shop all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
