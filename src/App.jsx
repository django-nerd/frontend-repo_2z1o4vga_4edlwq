import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ConversionBar from './components/ConversionBar'
import Features from './components/Features'
import ProductGrid from './components/ProductGrid'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <ConversionBar />
      <Features />
      <ProductGrid />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
