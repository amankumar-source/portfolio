import React, { useState, Suspense, lazy } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import AmanAI from './components/AmanAI/AmanAI'
import { Sparkles } from 'lucide-react'

// Code-split all below-fold sections — only downloaded when needed
const Skills = lazy(() => import('./components/Skills/Skills'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Experience = lazy(() => import('./components/Experience/Experience'))
const Certifications = lazy(() => import('./components/Certification/Certification'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

const SectionFallback = () => (
  <div className="w-full py-16 flex items-center justify-center" aria-hidden="true">
    <div className="w-8 h-8 border-2 border-[#8245ec] border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className='bg-[#171d32] min-h-screen w-full relative'>
      <Navbar />
      <Home onOpenChat={() => setIsChatOpen(true)} />
      {/* Single Suspense boundary wraps all lazy sections */}
      <Suspense fallback={<SectionFallback />}>
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </Suspense>

      {/* Floating Round AI Chat Button (Mobile Devices Only) */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          aria-label="Open Ask Me AI Assistant"
          className="sm:hidden fixed bottom-6 right-5 z-40 w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-500 text-white shadow-[0_0_25px_rgba(130,69,236,0.85)] border border-purple-400/60 flex flex-col items-center justify-center gap-0.5 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <div className="relative flex items-center justify-center mt-0.5">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
            </span>
          </div>
          <span className="text-[9px] font-bold leading-tight tracking-tighter text-center">Ask Me AI</span>
        </button>
      )}

      <AmanAI isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}

export default App
