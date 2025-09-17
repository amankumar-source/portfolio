import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Navbar/Home/Home'
import Skills from './components/Navbar/Skills/Skills'
import Projects from './components/Navbar/Projects/Projects'
import Contact from './components/Navbar/Contact/Contact'
import Footer from './components/Navbar/Footer/Footer'
import Certifications from './components/Navbar/Certification/Certification'
import Experience from './components/Navbar/Experience/Experience'

function App() {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
     
     <Navbar/>
     <Home/>
     <Skills/>
     <Projects/> 
     <Experience/>
     <Certifications/>
     <Contact/>
     <Footer/>
     
    </div>
  )
}

export default App