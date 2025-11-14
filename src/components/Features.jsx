import { ShieldCheck, Truck, Sparkles, CreditCard, Headphones } from 'lucide-react'

const features = [
  { icon: <ShieldCheck size={18} />, title: 'Secure checkout', desc: 'Bank-grade encryption across all payments.' },
  { icon: <Truck size={18} />, title: 'Fast shipping', desc: 'Worldwide delivery with real-time tracking.' },
  { icon: <CreditCard size={18} />, title: 'Flexible pay', desc: 'Pay now or split it—no hidden fees.' },
  { icon: <Headphones size={18} />, title: 'Human support', desc: 'Experts that actually reply within minutes.' },
  { icon: <Sparkles size={18} />, title: 'Premium quality', desc: 'Meticulous materials, built to last.' },
]

export default function Features() {
  return (
    <section id="benefits" className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <div key={i} className="border border-black/10 rounded-xl p-5 hover:shadow-sm transition-shadow">
              <div className="h-9 w-9 rounded-full bg-black text-white grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-medium">{f.title}</h3>
              <p className="text-sm text-black/60 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
