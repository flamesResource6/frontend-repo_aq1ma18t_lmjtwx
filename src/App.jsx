import Nav from './components/Nav'
import Hero from './components/Hero'
import System from './components/System'
import Promise from './components/Promise'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />
      <main>
        <Hero />
        <System />
        <Promise />
        <CTA />
      </main>
      <footer className="border-t border-neutral-200 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} GBA — Growth Bridge Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#promise" className="hover:text-black">Authority Promise</a>
            <a href="#system" className="hover:text-black">System</a>
            <a href="#book" className="hover:text-black">Book Call</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
