import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'
import './index.css'
// Import Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function App() {
  const appRef = useRef()

  useGSAP(() => {
    gsap.fromTo('.fade-in', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    )
  }, { scope: appRef })

  return (
    <div ref={appRef} className="relative">
      {/* Animated Background Elements using inline styles for Tailwind CSS v4 */}
     <div className="fixed inset-0 -z-10 overflow-hidden">
  <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob bg-blue-500/20"></div>
  <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full mix-blend-multiply blur-3xl opacity-70 animation-delay-2000 animate-blob bg-purple-500/20"></div>
  <div className="absolute -bottom-8 left-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full mix-blend-multiply blur-3xl opacity-70 animation-delay-4000 animate-blob bg-pink-500/20"></div>
</div>

      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App