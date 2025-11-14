import { Star } from 'lucide-react'

const logos = [
  'https://dummyimage.com/120x32/ffffff/000&text=Forbes',
  'https://dummyimage.com/120x32/ffffff/000&text=Tech+Insider',
  'https://dummyimage.com/120x32/ffffff/000&text=Gadget+Now',
  'https://dummyimage.com/120x32/ffffff/000&text=Finance+Wire',
]

export default function SocialProof() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80">
          {logos.map((src, i) => (
            <img src={src} key={i} className="h-6 object-contain" alt="Press logo" />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/80">
          <Star size={16} className="fill-white" /> Rated 4.9/5 by 2,000+ customers
        </div>
      </div>
    </section>
  )
}
