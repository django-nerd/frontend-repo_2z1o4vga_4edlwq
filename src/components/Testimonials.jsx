import { Quote } from 'lucide-react'

const quotes = [
  {
    name: 'Amelia W.',
    text: 'The clean design made me trust the brand instantly. Checkout was a breeze and shipping was fast.'
  },
  {
    name: 'Marcus D.',
    text: 'Minimal and premium. The product quality exceeded expectations and support was lightning-fast.'
  },
  {
    name: 'Sofia R.',
    text: 'I discovered this site from a friend and bought within minutes. The experience feels luxury.'
  }
]

export default function Testimonials() {
  return (
    <section id="stories" className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="border border-black/10 rounded-xl p-6">
              <Quote className="mb-4" size={20} />
              <p className="text-black/80">{q.text}</p>
              <div className="mt-4 text-sm font-medium">{q.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
