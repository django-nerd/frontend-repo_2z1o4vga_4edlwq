import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ConversionBar from './components/ConversionBar'
import Features from './components/Features'
import ProductGrid from './components/ProductGrid'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import PromoBanner from './components/PromoBanner'
import SocialProof from './components/SocialProof'
import CTASection from './components/CTASection'
import ValueProps from './components/ValueProps'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <ConversionBar />
      <ProductGrid />
      <PromoBanner />
      <ValueProps />
      <Features />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
