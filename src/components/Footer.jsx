import React from 'react'
import { FaHeart, FaReact, FaCode } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-full bg-linear-to-br from-accent to-cyan-500 flex items-center justify-center">
              <FaCode className="text-dark" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Smriti K.C</h3>
              <p className="text-light/60 text-sm">Frontend Developer</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-light/60">
              © {currentYear} Smriti K.C. All rights reserved.
            </p>
            <p className="text-light/60 text-sm mt-1">
              Built with <FaHeart className="inline text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            <a
              href="#home"
              className="text-light/60 hover:text-accent transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-light/60 hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-light/60 hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-light/60 mb-4">Tech Stack</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full">
              <FaReact className="text-accent" />
              <span className="text-sm">React.js</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full">
              <span className="text-accent">TW</span>
              <span className="text-sm">Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full">
              <span className="text-accent">GSAP</span>
              <span className="text-sm">Animation</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full">
              <span className="text-accent">Vite</span>
              <span className="text-sm">Build Tool</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer