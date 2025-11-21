import { useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/10 text-green-400 ring-1 ring-inset ring-green-400/30">
                <Leaf size={18} />
              </span>
              <span className="text-white font-semibold text-lg">Organica</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#integrations" className="hover:text-white">Integrations</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#customers" className="hover:text-white">Customers</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-slate-300 hover:text-white">Sign in</a>
              <a href="#get-started" className="inline-flex items-center rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-green-400 transition-colors">Get started</a>
            </div>

            <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3 text-slate-200">
              <a href="#features" className="block">Features</a>
              <a href="#integrations" className="block">Integrations</a>
              <a href="#pricing" className="block">Pricing</a>
              <a href="#customers" className="block">Customers</a>
              <div className="pt-2 flex gap-3">
                <a href="#" className="text-slate-300 hover:text-white">Sign in</a>
                <a href="#get-started" className="inline-flex items-center rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-green-400 transition-colors">Get started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
