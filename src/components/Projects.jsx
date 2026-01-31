import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const projects = [
    
    {
      title: "Interactive Apple iPhone Showcase",
      description: "Responsive iPhone product page with animated sections using GSAP scroll triggers and smooth transitions.",
      tech: ["React", "Tailwind CSS", "GSAP"],
      github: "https://github.com/smritikc/Apple-Site",
      live: "https://apple-site-brown.vercel.app/",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Real-time Weather Application",
      description: "Responsive weather app fetching real-time data from external API with dynamic metrics display.",
      tech: ["React", "Vite", "REST API"],
      github: "https://github.com/smritikc/Weather-App",
      live: "https://weatherapp-brown-seven.vercel.app/",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Interactive Dice Game",
      description: "Dice Game ",
      tech: ["React", "JavaScript", "State Management", "Event Handling"],
      github: "https://github.com/smritikc/Dice_Game",
      live: "https://dicegame-gray-zeta.vercel.app/",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop",
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      title: "Town Treasure Marketplace",
      description: "e-commerce platform with user authentication, product management, and shopping cart.",
      tech: ["React", "Node.js", "Vercel"],
      github: "https://github.com/smritikc/town-treasure",
      live: "https://town-treasure-five.vercel.app/",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "CodeFlow AI Landing Page Clone",
      description: "Modern SaaS landing page clone focusing on responsive layout and interactive UI elements.",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/smritikc/Code-flow-site-clone",
      live: "https://code-flow-site-clone.vercel.app/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Developer Portfolio Website",
      description: "Personal portfolio with clean UI design, responsive layout, and automatic Vercel deployment.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      github: "https://github.com/smritikc/smriti-portfolio",
      live: "https://smriti-portfolio-weld.vercel.app/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      gradient: "from-indigo-500/20 to-violet-500/20"
    }
  ]

  const projectRef = React.useRef(null)

  useGSAP(() => {
    if (!projectRef.current) return

    // Animate project cards on scroll
    const projectCards = gsap.utils.toArray('.project-card')
    
    projectCards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // Animate section title
    gsap.from('.section-title', {
      opacity: 0,
      y: -30,
      duration: 1,
      scrollTrigger: {
        trigger: '#projects',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

  }, { scope: projectRef })

  return (
    <section 
      id="projects" 
      ref={projectRef}
      className="min-h-screen py-16 md:py-24 relative bg-dark"
      style={{ backgroundColor: 'var(--dark)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24 fade-in">
          <h2 className="section-title text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto px-4 mt-4">
            Showcasing my expertise in building modern, performant web applications with cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid - Changed to 2 columns for better layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-2xl card-hover"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Project Image Container */}
              <div className="h-52 md:h-60 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-70"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop`;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                ></div>
                
                {/* Tech Stack Badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Live Status Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span 
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(0, 255, 0, 0.1)',
                      border: '1px solid rgba(0, 255, 0, 0.2)',
                      color: '#00ff00'
                    }}
                  >
                    Live
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <h3 
                  className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300"
                  style={{ color: 'var(--light)' }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Project Highlights - Only for Interactive Web Applications */}
                {project.title === "Interactive Web Applications" && (
                  <div className="mb-6 pl-4 border-l-2 border-blue-500/50">
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Developed Town Treasure game with dynamic content rendering and user interaction
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Created Dice Game with random number generation and score tracking
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Focused on learning React state management and event handling
                      </li>
                    </ul>
                  </div>
                )}

                {/* Project Links */}
                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-gray-800 gap-4">
                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <FaGithub className="text-xl" />
                      <span className="text-sm font-medium">
                        {project.title === "Interactive Web Applications" ? "Town Treasure" : "Code"}
                      </span>
                    </a>
                    
                    {/* Second GitHub link for Interactive Web Applications */}
                    {project.github2 && (
                      <a
                        href={project.github2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        <FaGithub className="text-xl" />
                        <span className="text-sm font-medium">Dice Game</span>
                      </a>
                    )}
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                  
                  {/* Hover Effect Indicator */}
                  <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <span 
                      className="text-sm font-semibold"
                      style={{ color: 'var(--accent)' }}
                    >
                      Explore →
                    </span>
                  </div>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, var(--accent) 0%, transparent 70%)`,
                  filter: 'blur(40px)'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16 md:mt-24 fade-in">
          <a
            href="https://github.com/smritikc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 card-hover"
            style={{
              background: 'rgba(0, 112, 243, 0.1)',
              border: '1px solid rgba(0, 112, 243, 0.3)',
              color: 'var(--accent)'
            }}
          >
            <span>View All Projects on GitHub</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--accent)' }}
      ></div>
      <div 
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10 blur-3xl animation-delay-2000"
        style={{ background: 'var(--accent)' }}
      ></div>
    </section>
  )
}

export default Projects