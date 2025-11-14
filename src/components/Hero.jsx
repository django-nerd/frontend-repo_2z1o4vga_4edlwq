import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-white text-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Elevate your digital storefront
          </h1>
          <p className="mt-6 text-lg text-black/70">
            A ultra-minimal ecommerce template designed to turn visitors into customers.
            Clean layout, strong visuals, and conversion-first components.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">Explore products</a>
            <a href="#benefits" className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-medium hover:bg-black/5 transition-colors">Why choose us</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-black/60">
            <span className="h-6 w-px bg-black/10" />
            <span>Glass morphic — Fintech — Modern</span>
            <span className="h-6 w-px bg-black/10" />
            <span>3D credit card experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
