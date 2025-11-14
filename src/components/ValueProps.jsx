import { CreditCard, ShieldCheck, Sparkles, Truck, Headphones } from 'lucide-react'

const items = [
  { icon: CreditCard, title: 'One-click checkout', desc: 'Save cards securely and breeze through purchase.' },
  { icon: ShieldCheck, title: 'Bank-grade security', desc: '256-bit encryption and fraud protection.' },
  { icon: Sparkles, title: 'Polished experience', desc: 'Micro-animations and clean typography that build trust.' },
  { icon: Truck, title: 'Fast global shipping', desc: 'Track every step with live updates.' },
  { icon: Headphones, title: 'Human support', desc: 'Talk to real humans within minutes.' },
]

export default function ValueProps() {
  return (
    <section className="bg-black text-white" id="value">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-5 gap-4">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
              <div className="h-9 w-9 rounded-full bg-white text-black grid place-items-center mb-4">
                {item.icon && <item.icon size={18} />}
              </div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-white/70 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
