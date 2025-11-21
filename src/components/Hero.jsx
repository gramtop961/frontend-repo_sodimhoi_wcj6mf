import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute top-1/3 -left-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <Sparkles size={14} /> New: Smart crop planning
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Grow better with an intelligent farm operating system
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Plan, monitor, and optimize your operations from seed to harvest. All your data and workflows, unified in one intuitive platform.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-green-500 px-5 py-3 text-slate-900 font-semibold hover:bg-green-400 transition-colors">
                Start free trial
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-white hover:bg-white/5 transition-colors">
                Book a demo
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18}/> Field operations tracking</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18}/> Compliance and traceability</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18}/> Yield forecasting</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18}/> Equipment management</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2">
              <img src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1600&auto=format&fit=crop" alt="Dashboard" className="rounded-xl object-cover h-[420px] w-full" />
              <div className="absolute inset-x-0 -bottom-4 mx-auto w-11/12 rounded-xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur">
                <p className="text-slate-200 text-sm">Real-time overview of your fields, tasks, and weather conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
