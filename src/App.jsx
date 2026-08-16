import React, { useState, Suspense, lazy } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import AmanAI from './components/AmanAI/AmanAI'

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
      <AmanAI isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}

export default App
