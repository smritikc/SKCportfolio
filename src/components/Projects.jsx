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
      image: "/phone.png",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Real-time Weather Application",
      description: "Responsive weather app fetching real-time data from external API with dynamic metrics display.",
      tech: ["React", "Vite", "REST API"],
      github: "https://github.com/smritikc/Weather-App",
      live: "https://weatherapp-brown-seven.vercel.app/",
      image: "/weather.jpg",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Interactive Dice Game",
      description: "A straightforward dice game focused on core React concepts like state management and event handling.",
      tech: ["React", "JavaScript", "State Management", "Event Handling"],
      github: "https://github.com/smritikc/Dice_Game",
      live: "https://dicegame-gray-zeta.vercel.app/",
      image: "/dice.png",
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      title: "Town Treasure Marketplace",
      description: "Frontend e-commerce simulation with user authentication, product management, and shopping cart functionality.",
      tech: ["React", "State Management", "Context API", "Vercel"],
      github: "https://github.com/smritikc/town-treasure",
      live: "https://town-treasure-five.vercel.app/",
      image: "/shopping.jpg",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "CodeFlow AI Landing Page Clone",
      description: "Modern SaaS landing page clone focusing on responsive layout and interactive UI elements.",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/smritikc/Code-flow-site-clone",
      live: "https://code-flow-site-clone.vercel.app/",
      image: "code.png",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Developer Portfolio Website",
      description: "Advanced portfolio with modern dark theme, GSAP animations, and interactive UI components.",
      tech: ["React", "Tailwind CSS", "GSAP", "EmailJS", "Vercel"],
      github: "https://github.com/smritikc/smriti-portfolio",
      live: "https://smriti-portfolio-weld.vercel.app/",
      image: "/portfolio.jpg",
      gradient: "from-indigo-500/20 to-violet-500/20"
    }
  ]

  const projectRef = React.useRef(null)

  useGSAP(() => {
    if (!projectRef.current) return

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
      className="min-h-screen py-24 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title inline-block fade-in">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto fade-in mt-4">
            Showcasing my expertise in building modern, performant web applications with cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-2xl glass-effect card-hover"
            >
              {/* Project Image Container */}
              <div className="h-52 md:h-60 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black opacity-70"></div>
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
                  className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
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
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    Live
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-light/80 mb-6 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Project Links */}
                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-4">
                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-light/60 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <FaGithub className="text-xl" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-light/60 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                  
                  {/* Hover Effect Indicator */}
                  <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-sm font-semibold text-accent">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16 fade-in">
          <a
            href="https://github.com/smritikc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 glass-effect"
          >
            <span className="text-accent">View All Projects on GitHub</span>
            <FaExternalLinkAlt className="text-accent" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects