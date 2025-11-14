import { ShieldCheck, Truck, Clock, CheckCircle2 } from 'lucide-react'

export default function ConversionBar() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-2"><ShieldCheck size={14}/> 256-bit SSL secure</div>
        <div className="flex items-center gap-2"><Truck size={14}/> Free worldwide shipping</div>
        <div className="flex items-center gap-2"><Clock size={14}/> 30-day returns</div>
        <div className="flex items-center gap-2"><CheckCircle2 size={14}/> Trusted by 50k+ customers</div>
      </div>
    </section>
  )
}
