import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(56,189,248,0.08),transparent),radial-gradient(1000px_500px_at_90%_20%,rgba(168,85,247,0.06),transparent)]" />

      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 via-cyan-300 to-indigo-400 shadow-lg shadow-sky-500/30" />
            <div>
              <div className="text-sm text-white/70">Digital Business Card</div>
              <div className="text-white font-semibold -mt-1">John Doe</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/70 text-sm">
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <Sections />
      </main>

      <Footer />
    </div>
  )
}

export default App
