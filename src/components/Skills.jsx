import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "JavaScript (ES6+)", level: 90, icon: "🟨" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "HTML5/CSS3", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "🎯" },
        { name: "GSAP", level: 80, icon: "✨" }
      ]
    },
    {
      category: "Tools & Practices",
      skills: [
        { name: "Git/GitHub", level: 90, icon: "🐙" },
        { name: "Vite", level: 85, icon: "⚡" },
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "Responsive Design", level: 95, icon: "📱" },
        { name: "Performance Optimization", level: 85, icon: "🚀" },
        { name: "Component Architecture", level: 90, icon: "🧩" }
      ]
    },
    {
      category: "Other Competencies",
      skills: [
        { name: "REST APIs", level: 85, icon: "🔗" },
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "Agile Methodologies", level: 80, icon: "🔄" },
        { name: "UI/UX Design", level: 75, icon: "🎯" },
        { name: "Testing", level: 70, icon: "🧪" }
      ]
    }
  ]

  useGSAP(() => {
    // Animate skill bars
    gsap.from('.skill-bar-fill', {
      width: 0,
      duration: 1.5,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate skill categories
    gsap.from('.skill-category', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title inline-block fade-in">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto fade-in">
            Proficient in modern web technologies and development practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category rounded-2xl glass-effect p-8"
            >
              <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-accent font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Skill Bar */}
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-linear-to-r from-accent to-cyan-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 skill-category">
          <div className="rounded-2xl glass-effect p-8">
            <h4 className="text-xl font-bold mb-6 text-center">
              Additional Skills & Certifications
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Frontend Development Professional Certificate",
                "AWS Cloud Practitioner",
                "Lighthouse Scores 90+",
                "Open Source Contributor",
                "IELTS Band 7.0",
                "Agile Development"
              ].map((skill, index) => (
                <div
                  key={index}
                  className="skill-pill px-4 py-2 rounded-full bg-white/5 border border-white/10 text-light/80 hover:border-accent/50 hover:text-accent transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills