import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  useGSAP(() => {
    // Hero text animation
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out'
    })

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    })

    gsap.from('.hero-description', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      ease: 'power3.out'
    })

    gsap.from('.hero-cta', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.9,
      stagger: 0.2,
      ease: 'power3.out'
    })

    gsap.from('.social-icon', {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      delay: 1.2,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    })

    // Floating animation for arrow
    gsap.to('.scroll-arrow', {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent/30 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-accent/20 rounded-full"></div>
        </div>

        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm">Available for Internship</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Frontend{' '}
            <span className="gradient-text">Developer</span>
            <span className="block text-4xl md:text-6xl mt-4">&</span>
            <span className="gradient-text">React Specialist</span>
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle text-xl md:text-2xl text-light/70 mb-8">
            Building exceptional digital experiences with React.js & modern web technologies
          </h2>

          {/* Description */}
          <p className="hero-description text-lg text-light/60 max-w-3xl mx-auto mb-12">
            Final-year CSIT student with 2+ years of experience creating performant, 
            responsive web applications. Passionate about clean code, user experience, 
            and cutting-edge frontend technologies.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#projects"
              className="px-8 py-4 bg-linear-to-r from-accent to-cyan-500 text-dark font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-accent/30 text-accent font-bold rounded-full text-lg hover:bg-accent/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/smritikc"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-14 h-14 rounded-full glass-effect flex items-center justify-center hover:bg-accent/20 hover:scale-110 transition-all duration-300 group"
            >
              <FaGithub className="text-2xl text-light/80 group-hover:text-accent" />
            </a>
            <a
              href="https://linkedin.com/in/smriti-kc"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-14 h-14 rounded-full glass-effect flex items-center justify-center hover:bg-accent/20 hover:scale-110 transition-all duration-300 group"
            >
              <FaLinkedin className="text-2xl text-light/80 group-hover:text-accent" />
            </a>
            <a
              href="mailto:smritikc588@gmail.com"
              className="social-icon w-14 h-14 rounded-full glass-effect flex items-center justify-center hover:bg-accent/20 hover:scale-110 transition-all duration-300 group"
            >
              <FaEnvelope className="text-2xl text-light/80 group-hover:text-accent" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-arrow absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a href="#about" className="flex flex-col items-center">
              <span className="text-sm text-light/50 mb-2">Scroll</span>
              <FaArrowDown className="text-xl text-accent animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero