import { Tractor, CloudSun, ClipboardList, MapPin, CalendarDays, BarChart3 } from 'lucide-react'

const features = [
  { icon: Tractor, title: 'Operations', desc: 'Plan and track field work, labor, and equipment usage.' },
  { icon: CloudSun, title: 'Weather', desc: 'Hyperlocal forecasts to plan activities with confidence.' },
  { icon: ClipboardList, title: 'Compliance', desc: 'Automated record-keeping for audits and certifications.' },
  { icon: MapPin, title: 'Fields', desc: 'Visualize your blocks, plantings, and activities on a map.' },
  { icon: CalendarDays, title: 'Scheduling', desc: 'Assign and manage work across teams and locations.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Track yields, costs, and performance over time.' },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to run your farm</h2>
          <p className="mt-3 text-slate-300">Modular tools that work beautifully together</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400 ring-1 ring-inset ring-green-400/30">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
