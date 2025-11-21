export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-green-500/10 p-8 sm:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-10 -bottom-24 h-56 w-56 rounded-full bg-emerald-400/10 blur-2xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Start optimizing your operation today</h3>
              <p className="mt-3 text-slate-200/80">Try the platform free for 14 days. No credit card required.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-green-500 px-5 py-3 text-slate-900 font-semibold hover:bg-green-400 transition-colors">Create account</a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-white hover:bg-white/5 transition-colors">Talk to sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
