import { ArrowRight } from 'lucide-react'

export default function PromoBanner() {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/70">Limited time</p>
            <h3 className="text-2xl font-semibold mt-1">Save 15% on first order</h3>
            <p className="text-white/70 mt-2 text-sm">Use code MONO15 at checkout. Ends soon.</p>
          </div>
          <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition">
            Shop the offer <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
