import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/70">
                <ShieldCheck size={14} /> Secure. Fast. Modern.
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">Upgrade your checkout experience</h2>
              <p className="mt-3 text-white/70">Glass morphic UI with instant trust cues. Designed to convert with fewer clicks and clearer decisions.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition">Start shopping <ArrowRight className="ml-2" size={16} /></a>
              <a href="#benefits" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/10 transition">Why us</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-white/60 flex items-center gap-3">
            <Sparkles size={14} /> Trusted by 50k+ users · Avg rating 4.9/5
          </div>
        </div>
      </div>
    </section>
  )
}
