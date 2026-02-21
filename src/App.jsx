import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Certifications from './components/Certification/Certification'
import Experience from './components/Experience/Experience'



function App() {
  return (
    <div className='bg-[#171d32] min-h-screen w-full'>

      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
