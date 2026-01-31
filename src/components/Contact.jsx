import React, { useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import emailjs from '@emailjs/browser'

import { 
  FaPaperPlane, 
  FaCheckCircle, 
  FaGithub, 
  FaLinkedin, 
  FaGlobe, 
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExclamationCircle
} from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  useGSAP(() => {
    gsap.from('.contact-item', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (error) setError('')
  }

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  setError('')

  // Validate form
  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    setError('Please fill in all required fields')
    setIsSubmitting(false)
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    setError('Please enter a valid email address')
    setIsSubmitting(false)
    return
  }

  try {
    // Initialize EmailJS with your public key
    emailjs.init('pcJUK0-1GeozTVMsy') // Your Public Key

    // Send email using EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || 'Portfolio Contact',
      message: formData.message,
      date: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    // ✅ Replace with your actual Service ID
    const result = await emailjs.send(
      'service_mb3n9ab',      // ← Your Service ID
      'template_84n2yz8',     // Your Template ID
      templateParams
    )

    if (result.status === 200) {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  } catch (err) {
     console.error('FULL EmailJS error:', err)
  setError(err?.text || 'EmailJS error occurred')
    // console.error('Email sending failed:', err)
    // setError('Failed to send message. Please try again or email me directly at smritikc588@gmail.com')
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block fade-in">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto fade-in mt-4">
            Let's discuss your project or potential opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-item">
            <div 
              className="glass-effect p-6 md:p-8 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8 md:py-12">
                  <FaCheckCircle className="text-5xl md:text-6xl text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl md:text-2xl font-bold mb-2 text-white">Message Sent Successfully!</h4>
                  <p className="text-light/70">I'll get back to you within 24 hours.</p>
                  <p className="text-light/60 text-sm mt-2">Check your email for a copy of this message.</p>
                </div>
              ) : 
                  (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Message */}
                  {error && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                      <div className="flex items-center gap-3 text-red-400">
                        <FaExclamationCircle />
                        <span className="text-sm font-medium">{error}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-light/70 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors text-white"
                        style={{
                          background: 'rgba(10, 10, 10, 0.5)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                        placeholder="John Doe"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-light/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors text-white"
                        style={{
                          background: 'rgba(10, 10, 10, 0.5)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderColor: error.includes('email') ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.1)'
                        }}
                        placeholder="john@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-light/70 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors text-white"
                      style={{
                        background: 'rgba(10, 10, 10, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      placeholder="Project Inquiry"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-light/70 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors text-white resize-none"
                      style={{
                        background: 'rgba(10, 10, 10, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      placeholder="Tell me about your project..."
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent) 0%, #00c6ff 100%)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 112, 243, 0.3)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div 
                          className="size-5 rounded-full animate-spin border-2 border-white/30 border-t-white"
                        ></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane />
                      </>
                    )}
                  </button>
                  
                  <p className="text-light/60 text-sm text-center">
                    * Required fields
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="contact-item">
              <div 
                className="glass-effect p-6 md:p-8 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div 
                      className="size-12 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(0, 112, 243, 0.15)',
                        border: '1px solid rgba(0, 112, 243, 0.3)'
                      }}
                    >
                      <FaMapMarkerAlt className="text-xl" style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Location</h4>
                      <p className="text-light/70">Kathmandu, Nepal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div 
                      className="size-12 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(0, 112, 243, 0.15)',
                        border: '1px solid rgba(0, 112, 243, 0.3)'
                      }}
                    >
                      <FaPhone className="text-xl" style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Phone</h4>
                      <p className="text-light/70">+977-9865505771</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div 
                      className="size-12 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(0, 112, 243, 0.15)',
                        border: '1px solid rgba(0, 112, 243, 0.3)'
                      }}
                    >
                      <FaEnvelope className="text-xl" style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Email</h4>
                      <p className="text-light/70">smritikc588@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-item">
              <div 
                className="glass-effect p-6 md:p-8 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/smritikc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-300 text-white"
                    style={{
                      background: 'rgba(10, 10, 10, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 112, 243, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(10, 10, 10, 0.5)'
                    }}
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/smriti-kc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-300 text-white"
                    style={{
                      background: 'rgba(10, 10, 10, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 112, 243, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(10, 10, 10, 0.5)'
                    }}
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://smriti-portfolio-weld.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-300 text-white"
                    style={{
                      background: 'rgba(10, 10, 10, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 112, 243, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(10, 10, 10, 0.5)'
                    }}
                  >
                    <FaGlobe className="text-xl" />
                    <span>Portfolio</span>
                  </a>
                  
                  <a
                    href="mailto:smritikc588@gmail.com"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-300 text-white"
                    style={{
                      background: 'rgba(10, 10, 10, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 112, 243, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(10, 10, 10, 0.5)'
                    }}
                  >
                    <FaEnvelope className="text-xl" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="contact-item">
              <div 
                className="glass-effect p-6 rounded-2xl text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="size-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-white">Available for Opportunities</span>
                </div>
                <p className="text-light/70 text-sm">
                  Open to internships, freelance projects, and full-time positions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact