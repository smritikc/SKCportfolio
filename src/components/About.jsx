import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FaMapMarkerAlt, FaGraduationCap, FaAward, FaPhone, FaEnvelope } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(() => {
    gsap.from('.about-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block fade-in">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto fade-in">
            Passionate Frontend Developer specializing in React.js ecosystem
          </p>
        </div>

        <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-accent/30">
                <div className="w-full h-full bg-linear-to-br from-accent/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-6xl">👩‍💻</div>
                </div>
              </div>
             <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 flex items-center justify-center animate-float">
  <span className="text-2xl sm:text-3xl">🚀</span>
</div>
            </div>

            {/* Contact Info */}
            <div className="glass-effect p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-4 gradient-text">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-accent" />
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-accent" />
                  <span>+977-9865505771</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-accent" />
                  <span>smritikc588@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-accent" />
                  <span>Final Year CSIT Student</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4">
              Frontend Developer & React Specialist
            </h3>
            
            <p className="text-light/80 text-lg">
              Final-year Computer Science student with 2+ years of hands-on experience building scalable web applications using React.js ecosystem. 
              Specializing in creating performant, responsive interfaces with emphasis on user experience and code maintainability.
            </p>

            <p className="text-light/80 text-lg">
              Seeking internship to contribute innovative solutions while accelerating professional growth in agile development environments.
            </p>

            {/* Tech Highlights */}
            <div className="pt-4">
              <h4 className="text-xl font-bold mb-4 gradient-text">Tech Highlights</h4>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vite', 'REST APIs', 'Git/GitHub', 'Figma'].map((tech, index) => (
                  <span
                    key={index}
                    className="skill-pill"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-effect p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold gradient-text mb-1">∞</div>
                <div className="text-sm text-light/70">Passion for Coding</div>
              </div>
              <div className="glass-effect p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold gradient-text mb-1">20+</div>
                <div className="text-sm text-light/70">Projects</div>
              </div>
              <div className="glass-effect p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold gradient-text mb-1">90+</div>
                <div className="text-sm text-light/70">Lighthouse Score</div>
              </div>
              <div className="glass-effect p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold gradient-text mb-1">IELTS 7.0</div>
                <div className="text-sm text-light/70">C1 English</div>
              </div>
            </div>

            <div className="pt-6 flex gap-4">
            <a
  href="/smritikc-CV.pdf"
  download
  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-accent to-cyan-500 text-dark font-semibold rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
>
  Download CV
  <span className="text-lg">📄</span>
</a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent/30 text-accent font-semibold rounded-full hover:bg-accent/10 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About