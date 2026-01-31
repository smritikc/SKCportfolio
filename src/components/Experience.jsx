import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar, FaChalkboardTeacher } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Intern",
      company: "Aeric Tech",
      period: "Jan 2023 – Mar 2023",
      location: "Kathmandu, Nepal",
      icon: <FaBriefcase className="text-accent" />,
      achievements: [
        "Assisted in development of web interfaces using HTML, CSS, and JavaScript",
        "Gained exposure to React.js components and modern frontend workflows",
        "Collaborated with team members on frontend development tasks",
        "Implemented responsive design principles in web applications"
      ],
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Frontend Development"]
    },
    {
      role: "Teaching Assistant",
      company: "Jaycees Everest Secondary School",
      period: "2020 – 2021",
      location: "Kathmandu, Nepal",
      icon: <FaChalkboardTeacher className="text-accent" />,
      achievements: [
        "Assisted in teaching computer basics and mathematics to grade 10 students",
        "Gained experience in explaining technical concepts clearly",
        "Developed teaching materials and practice exercises",
        "Provided one-on-one support to students needing additional help"
      ],
      skills: ["Teaching", "Communication", "Technical Explanation", "Problem Solving"]
    }
  ]

  const education = [
    {
      degree: "Bachelor in Computer Science & IT (CSIT)",
      institution: "Padmakanya Multiple Campus, Tribhuvan University",
      period: "2022 – 2026",
      location: "Kathmandu, Nepal",
      icon: <FaGraduationCap className="text-accent" />,
      details: [
        "Key Coursework: Web Technologies, Data Structures & Algorithms",
        "Database Systems, Software Engineering, Object-Oriented Programming",
        "Current GPA: 3.5/4.0"
      ],
      highlights: ["Dean's List", "Web Development Club Member"]
    },
    {
      degree: "IELTS Academic",
      institution: "British Council",
      period: "2021",
      location: "Kathmandu, Nepal",
      icon: <FaStar className="text-accent" />,
      details: ["Overall Band Score: 7.0", "CEFR Level: C1 (Advanced)"],
      highlights: ["Listening: 7.5", "Reading: 7.0", "Writing: 6.5", "Speaking: 7.0"]
    }
  ]

  const certifications = [
    {
      title: "Frontend Development Professional Certificate",
      issuer: "Broadway Infosys",
      period: "2023",
      link: "https://drive.google.com/file/d/1HxlQ_7fBUp0jKt6FsxBu_-TXapf4ENUq/view"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      period: "2023",
      link: "https://certificates.simplicdn.net/share/9665197_9927662_1767206334184.pdf"
    }
  ]

  useGSAP(() => {
    gsap.from('.timeline-item', {
      opacity: 0,
      x: -50,
      duration: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.certification-item', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title inline-block fade-in">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto fade-in mt-4">
            Professional journey and academic background that shaped my skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 gradient-text flex items-center gap-3">
              <FaBriefcase className="text-xl" />
              Professional Experience
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-accent via-cyan-500 to-transparent"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item relative mb-10 ml-12">
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-0 size-6 rounded-full bg-linear-to-r from-accent to-cyan-500 border-4 border-dark"></div>
                  
                  <div 
                    className="glass-effect p-6 rounded-2xl card-hover"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="size-12 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(0, 112, 243, 0.15)',
                          border: '1px solid rgba(0, 112, 243, 0.3)'
                        }}
                      >
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                          <span 
                            className="text-secondary text-sm px-3 py-1 rounded-full"
                            style={{
                              background: 'rgba(10, 10, 10, 0.5)',
                              color: '#656d76'
                            }}
                          >
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-accent font-medium" style={{ color: 'var(--accent)' }}>{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-light/60 mt-1">
                          <FaMapMarkerAlt className="text-xs" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div 
                            className="size-2 rounded-full shrink-0 mt-2"
                            style={{ background: 'var(--accent)' }}
                          ></div>
                          <span className="text-light/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Skills used */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm rounded-full"
                            style={{
                              background: 'rgba(0, 112, 243, 0.1)',
                              color: 'var(--accent)'
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 gradient-text flex items-center gap-3">
              <FaGraduationCap className="text-xl" />
              Education & Certifications
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="timeline-item glass-effect p-6 rounded-2xl card-hover"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="size-12 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(0, 112, 243, 0.15)',
                        border: '1px solid rgba(0, 112, 243, 0.3)'
                      }}
                    >
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                        <span 
                          className="text-secondary text-sm px-3 py-1 rounded-full"
                          style={{
                            background: 'rgba(10, 10, 10, 0.5)',
                            color: '#656d76'
                          }}
                        >
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-accent font-medium" style={{ color: 'var(--accent)' }}>{edu.institution}</p>
                      <div className="flex items-center gap-2 text-sm text-light/60 mt-1">
                        <FaMapMarkerAlt className="text-xs" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    {edu.details.map((detail, idx) => (
                      <p key={idx} className="text-light/80">{detail}</p>
                    ))}
                  </div>
                  
                  {edu.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{
                            background: 'rgba(0, 112, 243, 0.1)',
                            color: 'var(--accent)'
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6 gradient-text">Certifications</h4>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <div 
                      className="glass-effect p-4 rounded-xl card-hover"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h5 className="font-bold text-white">{cert.title}</h5>
                          <p className="text-light/60 text-sm">{cert.issuer} • {cert.period}</p>
                        </div>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 text-sm rounded-full transition-colors duration-300 flex items-center gap-2"
                          style={{
                            background: 'rgba(0, 112, 243, 0.1)',
                            color: 'var(--accent)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(0, 112, 243, 0.2)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(0, 112, 243, 0.1)';
                          }}
                        >
                          View
                          <FaCalendarAlt className="text-xs" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Achievements */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-8 gradient-text text-center">Additional Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="glass-effect p-6 rounded-2xl text-center card-hover"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-xl font-bold mb-2 text-white">5+ Web Applications</h4>
              <p className="text-light/70">Built and deployed with modern technologies</p>
            </div>
            
            <div 
              className="glass-effect p-6 rounded-2xl text-center card-hover"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-bold mb-2 text-white">Teaching Experience</h4>
              <p className="text-light/70">Mentored students in technical subjects</p>
            </div>
            
            <div 
              className="glass-effect p-6 rounded-2xl text-center card-hover"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="text-xl font-bold mb-2 text-white">Diverse Skill Set</h4>
              <p className="text-light/70">From coding to teaching and communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience