const faqs = [
  { q: 'Do you offer international shipping?', a: 'Yes. We provide tracked international shipping to 100+ countries.' },
  { q: 'What is your return policy?', a: '30-day hassle-free returns. Full refund once the item is received in original condition.' },
  { q: 'Is checkout secure?', a: 'All payments are processed with 256-bit encryption and tokenized card data.' },
  { q: 'How fast is support?', a: 'Most messages are answered within 10 minutes by our team.' },
]

export default function FAQ() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="font-medium">{item.q}</div>
              <div className="text-white/70 text-sm mt-2">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
