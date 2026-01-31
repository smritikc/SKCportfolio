import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(() => {
    gsap.from('.nav-item', {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.1,
      delay: 1.5
    })
  })

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-3' : 'py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
              <span className="text-dark font-bold text-xl">SK</span>
            </div>
            <span className="text-xl font-bold gradient-text">Smriti K.C</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nav-item text-light/80 hover:text-accent transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="nav-item px-6 py-2.5 bg-linear-to-r from-accent to-cyan-500 text-dark font-semibold rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
              }`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              } mt-1`}></span>
              <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
              } mt-1`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-light/80 hover:text-accent transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-3 bg-linear-to-r from-accent to-cyan-500 text-dark font-semibold rounded-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar