import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-x-0 top-0 mx-auto h-[400px] max-w-7xl bg-[radial-gradient(600px_200px_at_top,rgba(16,185,129,0.25),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Organica. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
