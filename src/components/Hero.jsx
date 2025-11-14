import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        <div className="pointer-events-none absolute -inset-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> Glass morphic fintech UI
          </div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Elevate your digital storefront
          </h1>
          <p className="mt-6 text-lg text-white/75">
            A ultra-minimal ecommerce template designed to turn visitors into customers.
            Clean layout, strong visuals, and conversion-first components.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">Explore products</a>
            <a href="#benefits" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors">Why choose us</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-white/70">
            <span className="h-6 w-px bg-white/20" />
            <span>3D credit card experience</span>
            <span className="h-6 w-px bg-white/20" />
            <span>Secure · Modern · Minimal</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
