'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  personalInfo,
  skills,
  experience,
  achievements,
  certifications,
  education,
  resumeRequest,
  contactForm,
  calendlyUrl,
  languages,
  theme,
  labels,
} from './data/content'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resumeModalOpen, setResumeModalOpen] = useState(false)
  const [resumeSubmitStatus, setResumeSubmitStatus] = useState('')
  const [contactSubmitStatus, setContactSubmitStatus] = useState('')
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [resumeSubmitting, setResumeSubmitting] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const resumeEmailRef = useRef<HTMLInputElement | null>(null)
  const contactNameRef = useRef<HTMLInputElement | null>(null)

  const { bg, border, text, accent, shape, grid } = theme
  const cardClass = `${bg.card} backdrop-blur-sm rounded-xl border ${border.subtle}`
  const sectionAltClass = `${bg.sectionAlt} backdrop-blur-sm`
  const accentButton = `bg-gradient-to-r ${accent.gradient} ${accent.gradientHover} text-white`
  const accentShadow = `shadow-lg ${accent.glow} hover:shadow-xl ${accent.glowStrong}`
  const accentChip = accent.chip
  const accentChipSolid = accent.chipSolid ?? accentChip
  const accentOverlayRight = accent.overlayRight
  const accentOverlayLeft = accent.overlayLeft
  const accentDivider = accent.divider
  const emailRegex = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (resumeModalOpen) {
      requestAnimationFrame(() => {
        resumeEmailRef.current?.focus()
      })
    }
  }, [resumeModalOpen])

  return (
    <div id="top" className={`min-h-screen bg-gradient-to-br ${bg.gradient} overflow-x-hidden`}>
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `linear-gradient(to right, ${grid?.color ?? '#00ff41'} 1px, transparent 1px), linear-gradient(to bottom, ${grid?.color ?? '#00ff41'} 1px, transparent 1px)`,
            backgroundSize: grid?.size ?? '50px 50px',
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${bg.nav} backdrop-blur-md border-b ${border.strong} z-50 shadow-lg ${accent.glowSoft}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <a 
              href="#top" 
              className={`${text.primary} font-semibold text-lg flex items-center gap-2 hover:${text.accent} transition-colors cursor-pointer`}
            >
              <div className={`w-2 h-2 ${shape.dot} rounded-full animate-pulse`}></div>
              {personalInfo.name}
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#about" className={`${text.secondary} hover:${text.accent} transition-colors`}>{labels.nav.about}</a>
              <a href="#skills" className={`${text.secondary} hover:${text.accent} transition-colors`}>{labels.nav.skills}</a>
              <a href="#experience" className={`${text.secondary} hover:${text.accent} transition-colors`}>{labels.nav.experience}</a>
              <a href="#languages" className={`${text.secondary} hover:${text.accent} transition-colors`}>{labels.nav.languages ?? 'Languages'}</a>
              <a href="#education" className={`${text.secondary} hover:${text.accent} transition-colors`}>{labels.nav.education}</a>
              <a href={personalInfo.blogUrl} target="_blank" rel="noopener noreferrer" className={`${text.secondary} hover:${text.accent} transition-colors`}>{labels.nav.blog}</a>
              <a href="#contact" className={`${text.secondary} hover:${text.accent} transition-colors`}>{labels.nav.contact}</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${text.secondary} hover:${text.accent} transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 space-y-2 border-t ${border.subtle} pt-4`}>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 ${text.secondary} hover:${text.accent} hover:${bg.card} rounded-lg transition-all`}
              >
                {labels.nav.about}
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 ${text.secondary} hover:${text.accent} hover:${bg.card} rounded-lg transition-all`}
              >
                {labels.nav.skills}
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 ${text.secondary} hover:${text.accent} hover:${bg.card} rounded-lg transition-all`}
              >
                {labels.nav.experience}
              </a>
              <a 
                href="#languages" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 ${text.secondary} hover:${text.accent} hover:${bg.card} rounded-lg transition-all`}
              >
                {labels.nav.languages ?? 'Languages'}
              </a>
              <a 
                href="#education" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 ${text.secondary} hover:${text.accent} hover:${bg.card} rounded-lg transition-all`}
              >
                {labels.nav.education}
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 ${text.secondary} hover:${text.accent} hover:${bg.card} rounded-lg transition-all`}
              >
                {labels.nav.contact}
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Profile Picture */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Profile Picture */}
            <div className="flex-shrink-0 relative">
              <div className={`absolute inset-0 ${shape.glow} rounded-2xl blur-xl`}></div>
              <div className="relative">
                <div className={`w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-xl overflow-hidden border-2 ${border.accent} select-none`}>
                  <Image
                    src="/profile-placeholder.svg"
                    alt={personalInfo.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    priority
                  />
                </div>
              <div className={`absolute -bottom-2 -right-2 w-12 h-12 ${accentChipSolid} rounded-full border-4 border-slate-900 ${accentShadow} flex items-center justify-center`}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
              </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {personalInfo.name}
              </h1>
              <p className={`text-xl sm:text-2xl ${text.accent} mb-3 font-medium`}>
                  {personalInfo.title}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
                  {personalInfo.tagline}
                </p>
              {/* Mobile 2x2 grid with blog */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={`w-full inline-flex items-center justify-center px-4 py-2.5 whitespace-nowrap text-sm ${accentButton} font-medium rounded-lg transition-all ${accentShadow}`}>
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  {labels.hero.ctaLinkedIn}
                </a>
                <a href={personalInfo.blogUrl} target="_blank" rel="noopener noreferrer" className={`w-full inline-flex items-center justify-center px-4 py-2.5 whitespace-nowrap text-sm ${accentButton} font-medium rounded-lg transition-all ${accentShadow}`}>
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 32 32" aria-hidden="true">
                    <rect x="7" y="7" width="18" height="18" rx="4" transform="rotate(45 16 16)" fill="currentColor" opacity="0.85" />
                    <circle cx="16" cy="16" r="5" fill="white" />
                  </svg>
                  {labels.nav.blog}
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={`w-full inline-flex items-center justify-center px-4 py-2.5 whitespace-nowrap text-sm ${accentButton} font-medium rounded-lg transition-all ${accentShadow}`}>
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.026 2c-5.522 0-9.999 4.477-9.999 10.002 0 4.424 2.867 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.238-.01-1.023-.014-1.855-2.782.604-3.369-1.183-3.369-1.183-.454-1.153-1.11-1.46-1.11-1.46-.907-.62.069-.607.069-.607 1.003.07 1.532 1.031 1.532 1.031.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.112-4.555-4.945 0-1.092.39-1.986 1.029-2.685-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.5.337c1.909-1.295 2.748-1.026 2.748-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.593 1.028 2.685 0 3.842-2.339 4.69-4.566 4.937.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.748 0 .268.18.58.688.481 3.968-1.327 6.833-5.082 6.833-9.503C22.025 6.477 17.548 2 12.026 2Z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <a href="#contact" className={`w-full inline-flex items-center justify-center px-4 py-2.5 whitespace-nowrap text-sm ${accentButton} font-medium rounded-lg transition-all ${accentShadow}`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {labels.hero.ctaContact}
                </a>
              </div>
              {/* Desktop inline buttons without blog */}
              <div className="hidden md:flex flex-wrap gap-4 justify-start">
                <a href="#contact" className={`inline-flex items-center px-6 py-3 whitespace-nowrap text-base ${accentButton} font-medium rounded-lg transition-all ${accentShadow}`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {labels.hero.ctaContact}
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center px-6 py-3 whitespace-nowrap text-base ${accentButton} font-medium rounded-lg transition-all ${accentShadow}`}>
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  {labels.hero.ctaLinkedIn}
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center px-6 py-3 whitespace-nowrap text-base ${accentButton} font-medium rounded-lg transition-all ${accentShadow}`}>
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.026 2c-5.522 0-9.999 4.477-9.999 10.002 0 4.424 2.867 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.238-.01-1.023-.014-1.855-2.782.604-3.369-1.183-3.369-1.183-.454-1.153-1.11-1.46-1.11-1.46-.907-.62.069-.607.069-.607 1.003.07 1.532 1.031 1.532 1.031.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.112-4.555-4.945 0-1.092.39-1.986 1.029-2.685-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.5.337c1.909-1.295 2.748-1.026 2.748-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.593 1.028 2.685 0 3.842-2.339 4.69-4.566 4.937.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.748 0 .268.18.58.688.481 3.968-1.327 6.833-5.082 6.833-9.503C22.025 6.477 17.548 2 12.026 2Z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section id="about" className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${sectionAltClass} relative`}>
        <div className={`absolute inset-0 ${accentOverlayRight}`}></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-1 h-8 ${accentDivider} rounded-full`}></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{labels.sections.summary}</h2>
          </div>
          <div className={`space-y-4 ${cardClass} p-6 sm:p-8`}>
            {personalInfo.summary.map((paragraph, idx) => (
              <p key={idx} className={`${text.secondary} text-lg leading-relaxed`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-1 h-8 ${accentDivider} rounded-full`}></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{labels.sections.skills}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`${cardClass} p-6 hover:${border.accent} hover:shadow-lg hover:${accent.glowSoft} transition-all group`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 ${shape.dot} rounded-full group-hover:animate-pulse`}></div>
                  <h3 className="text-lg font-semibold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className={`px-3 py-1.5 ${bg.cardDeep} ${text.secondary} text-sm rounded-md border ${border.subtle} hover:${border.accent} hover:${text.accent} transition-colors`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${sectionAltClass} relative`}>
        <div className={`absolute inset-0 ${accentOverlayLeft}`}></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-1 h-8 ${accentDivider} rounded-full`}></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{labels.sections.experience}</h2>
          </div>
          <div className="space-y-8">
            {experience.map((role, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-slate-700/50 last:pb-0">
                <div className={`absolute -left-2 top-0 w-4 h-4 ${accentChipSolid} rounded-full border-4 border-slate-900 shadow-lg ${accent.glow}`}></div>
                <div className={`${cardClass} p-6 hover:${border.accent} hover:shadow-lg hover:${accent.glowSoft} transition-all`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                      <p className={`${text.accent} font-medium`}>{role.company}</p>
                      <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xs">{role.location}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm text-slate-400 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700/50">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {role.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {role.responsibilities.map((item, idx) => (
                      <li key={idx} className={`${text.secondary} leading-relaxed flex gap-2`}>
                        <span className={`${text.accent} mt-1.5`}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section id="languages" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, ${grid?.color ?? '#22d3ee'} 1px, transparent 1px), linear-gradient(to bottom, ${grid?.color ?? '#22d3ee'} 1px, transparent 1px)`,
            backgroundSize: grid?.size ?? '50px 50px',
          }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-1 h-8 ${accentDivider} rounded-full`}></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{labels.sections.languages}</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className={`${cardClass} p-6 hover:${border.accent} hover:shadow-lg hover:${accent.glowSoft} transition-all`}>
                <div className="flex items-center gap-3 mb-2">
                  <svg className={`w-5 h-5 ${text.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <h3 className="text-lg font-semibold text-white">{lang.name}</h3>
                </div>
                <p className={`text-sm ${text.accent}`}>{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${sectionAltClass} relative`}>
        <div className={`absolute inset-0 ${accentOverlayRight}`}></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-1 h-8 ${accentDivider} rounded-full`}></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{labels.sections.education}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className={`${cardClass} p-6 hover:${border.accent} hover:shadow-lg hover:${accent.glowSoft} transition-all group`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${accentChip} rounded-lg flex items-center justify-center border ${border.accent} group-hover:${border.accent} transition-colors`}>
                    <svg className={`w-6 h-6 ${text.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                    <p className={`${text.accent} font-medium mb-1`}>{edu.institution}</p>
                    <p className={`text-sm ${text.tertiary} mb-2`}>{`${edu.location} • ${edu.period}`}</p>
                    <p className={`text-sm ${text.secondary}`}>{edu.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, ${grid?.color ?? '#22d3ee'} 1px, transparent 1px), linear-gradient(to bottom, ${grid?.color ?? '#22d3ee'} 1px, transparent 1px)`,
            backgroundSize: grid?.size ?? '50px 50px',
          }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-1 h-8 ${accentDivider} rounded-full`}></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{labels.sections.achievements}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`${cardClass} p-6 hover:${border.accent} hover:shadow-lg hover:${accent.glowSoft} transition-all group`}>
                <div className="flex gap-3">
                  <div className={`flex-shrink-0 w-8 h-8 ${accentChipSolid} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow ${accent.glowSoft} group-hover:${accent.glowStrong} transition-shadow`}>
                    {index + 1}
                  </div>
                  <p className="text-slate-300 leading-relaxed">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${sectionAltClass} relative`}>
        <div className={`absolute inset-0 ${accentOverlayLeft}`}></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-1 h-8 ${accentDivider} rounded-full`}></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{labels.sections.certifications}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className={`${cardClass} p-6 hover:${border.accent} hover:shadow-lg hover:${accent.glowSoft} transition-all group`}>
                <div className={`w-12 h-12 ${accentChip} rounded-lg flex items-center justify-center mb-4 border ${border.accent} group-hover:${border.accent} transition-colors`}>
                  <svg className={`w-6 h-6 ${text.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-1 text-sm leading-tight">{cert.name}</p>
                <p className={`text-xs ${text.accent}`}>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, ${grid?.color ?? '#22d3ee'} 1px, transparent 1px), linear-gradient(to bottom, ${grid?.color ?? '#22d3ee'} 1px, transparent 1px)`,
            backgroundSize: grid?.size ?? '50px 50px',
          }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-1 h-8 ${accentDivider} rounded-full`}></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{labels.sections.contact}</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <a 
                href={`mailto:${personalInfo.email}`}
                className={`block bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:${border.accent} hover:shadow-lg hover:${accent.glowSoft} transition-all group cursor-pointer`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${accentChipSolid} rounded-lg flex items-center justify-center flex-shrink-0 ${accentShadow}`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <p className={`text-white font-medium group-hover:${text.accent} transition-colors`}>
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`block bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:${border.accent} hover:shadow-lg hover:${accent.glowSoft} transition-all group cursor-pointer`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${accentChipSolid} rounded-lg flex items-center justify-center flex-shrink-0 ${accentShadow}`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
                    <p className={`text-white font-medium group-hover:${text.accent} transition-colors`}>
                      {personalInfo.linkedin.replace('https://', '')}
                    </p>
                  </div>
                </div>
              </a>
              
              <div className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:${border.accent} hover:shadow-lg hover:${accent.glowSoft} transition-all`}>
                <p className="text-sm text-slate-400 mb-3 font-medium">{labels.sections.requestResume}</p>
                <p className="text-xs text-slate-500 mb-4">Get detailed resume sent to your email</p>
                <button 
                  onClick={() => setResumeModalOpen(true)}
                  className={`block w-full text-center ${accentButton} py-3 rounded-lg transition-all font-medium ${accentShadow}`}
                >
                  Request Resume
                </button>
              </div>
              
              <div className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50`}>
                <p className="text-sm text-slate-400 mb-3 font-medium">{labels.sections.schedule}</p>
                <p className="text-xs text-slate-500 mb-4">Got ideas? Questions? Random thoughts? Let&apos;s talk - pick a time.</p>
                <a 
                  href= {calendlyUrl.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full text-center ${accentButton} py-3 rounded-lg transition-all font-medium ${accentShadow}`}
                >
                  Schedule Meeting
                </a>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-lg">
              <h3 className="text-white text-xl font-semibold mb-6">{labels.sections.contactForm}</h3>
              
              {contactSubmitStatus ? (
                <div
                  className={`p-8 rounded-lg text-center ${
                    contactSubmitStatus.toLowerCase().includes('oops') || contactSubmitStatus.toLowerCase().includes('wrong')
                      ? 'bg-red-500/10 border border-red-500/30'
                      : `${accent.glowSoft} border ${border.accent}`
                  }`}
                  aria-live="polite"
                >
                  {contactSubmitStatus.toLowerCase().includes('oops') || contactSubmitStatus.toLowerCase().includes('wrong') ? (
                    <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className={`w-16 h-16 ${text.accent} mx-auto mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {contactSubmitStatus.toLowerCase().includes('oops') || contactSubmitStatus.toLowerCase().includes('wrong')
                      ? labels.status.errorTitle
                      : labels.status.successTitle}
                  </h4>
                  <p
                    className={`mb-6 ${
                      contactSubmitStatus.toLowerCase().includes('oops') || contactSubmitStatus.toLowerCase().includes('wrong')
                        ? `${text.accent}`
                        : `${text.accent}`
                    }`}
                  >
                    {contactSubmitStatus}
                  </p>
                  <button
                    onClick={() => setContactSubmitStatus('')}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {contactSubmitStatus.toLowerCase().includes('oops') || contactSubmitStatus.toLowerCase().includes('wrong')
                      ? labels.status.tryAgain
                      : labels.status.sendAnother}
                  </button>
                </div>
              ) : (
                <form
                  action={`https://formspree.io/f/${contactForm.formspreeId}`}
                  method="POST"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    if (contactSubmitting) return
                    const form = e.currentTarget as HTMLFormElement
                    const honeypot = (form.elements.namedItem('_gotcha') as HTMLInputElement | null)?.value
                    if (honeypot) return
                    const emailValue = (form.elements.namedItem('email') as HTMLInputElement | null)?.value || ''
                    if (!emailRegex.test(emailValue)) {
                      setContactSubmitStatus('Oops! Please enter a valid email like name@example.com')
                      return
                    }
                    const data = new FormData(form)

                    setContactSubmitting(true)
                    try {
                      const response = await fetch(`https://formspree.io/f/${contactForm.formspreeId}`, {
                        method: 'POST',
                        body: data,
                        headers: { Accept: 'application/json' },
                      })

                      if (response.ok) {
                        setContactSubmitStatus(labels.forms.contact.success)
                        form.reset()
                      } else {
                        setContactSubmitStatus(labels.forms.contact.error)
                      }
                    } catch {
                      setContactSubmitStatus(labels.forms.contact.error)
                    } finally {
                      setContactSubmitting(false)
                    }
                  }}
                  className="space-y-5"
                >
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      {labels.forms.contact.name}
                    </label>
                    <input
                      ref={contactNameRef}
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={`w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 ${accent.ring} transition-all`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      {labels.forms.contact.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      pattern="^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+\\.[A-Za-z]{2,}$"
                      inputMode="email"
                      autoComplete="email"
                      title="Enter a valid email like name@example.com"
                      className={`w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 ${accent.ring} transition-all`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      {labels.forms.contact.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className={`w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 ${accent.ring} resize-none transition-all`}
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={contactSubmitting}
                    className={`w-full ${accentButton} py-3 rounded-lg transition-all font-medium ${accentShadow} disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {contactSubmitting ? labels.status.sending : labels.forms.contact.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Request Modal */}
      {resumeModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="bg-slate-800 rounded-xl border border-slate-700 max-w-md w-full p-8 relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
          >
            <button 
              onClick={() => {
                setResumeModalOpen(false)
                setResumeSubmitStatus('')
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 id="resume-modal-title" className="text-2xl font-bold text-white mb-2">Request Resume</h3>
            <p className="text-slate-400 text-sm mb-6">I respond personally to relevant requests and typically share my resume within two business days.</p>
            
            {resumeSubmitStatus ? (
              <div className={`p-6 rounded-lg text-center ${
                resumeSubmitStatus.toLowerCase().includes('oops') || resumeSubmitStatus.toLowerCase().includes('wrong')
                  ? 'bg-red-500/10 border border-red-500/30'
                  : `${accent.glowSoft} border ${border.accent}`
              }`} aria-live="polite">
                {resumeSubmitStatus.toLowerCase().includes('oops') || resumeSubmitStatus.toLowerCase().includes('wrong') ? (
                  <svg className="w-12 h-12 text-red-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className={`w-12 h-12 ${text.accent} mx-auto mb-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <h4 className="text-lg font-semibold text-white mb-2">
                  {resumeSubmitStatus.toLowerCase().includes('oops') || resumeSubmitStatus.toLowerCase().includes('wrong')
                    ? labels.status.errorTitle
                    : labels.status.successTitle}
                </h4>
                <p className={`font-medium mb-4 ${
                  resumeSubmitStatus.toLowerCase().includes('oops') || resumeSubmitStatus.toLowerCase().includes('wrong')
                    ? `${text.accent}`
                    : `${text.accent}`
                }`}>
                  {resumeSubmitStatus}
                </p>
                <button 
                  onClick={() => {
                    setResumeModalOpen(false)
                    setResumeSubmitStatus('')
                  }}
                  className="text-slate-400 hover:text-white text-sm"
                >
                  {labels.status.close}
                </button>
              </div>
            ) : (
              <form 
                action={`https://formspree.io/f/${resumeRequest.formspreeId}`}
                method="POST"
                onSubmit={async (e) => {
                  e.preventDefault()
                  if (resumeSubmitting) return
                  const form = e.currentTarget as HTMLFormElement;
                  const honeypot = (form.elements.namedItem('_gotcha') as HTMLInputElement | null)?.value
                  if (honeypot) return
                  const emailValue = (form.elements.namedItem('email') as HTMLInputElement | null)?.value || ''
                  if (!emailRegex.test(emailValue)) {
                    setResumeSubmitStatus('Oops! Please enter a valid email like name@example.com')
                    return
                  }
                  const data = new FormData(form)
                  
                  setResumeSubmitting(true)
                  try {
                    const response = await fetch(`https://formspree.io/f/${resumeRequest.formspreeId}`, {
                      method: 'POST',
                      body: data,
                      headers: { 'Accept': 'application/json' }
                    })
                    if (response.ok) {
                      setResumeSubmitStatus(labels.forms.resume.success)
                      form.reset()
                    } else {
                      setResumeSubmitStatus(labels.forms.resume.error)
                    }
                  } catch {
                    setResumeSubmitStatus(labels.forms.resume.error)
                  } finally {
                    setResumeSubmitting(false)
                  }
                }}
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Resume Request" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                
                <div>
                  <label htmlFor="resume-email" className="block text-sm font-medium text-slate-300 mb-2">
                    {labels.forms.resume.email}
                  </label>
                  <input 
                    ref={resumeEmailRef}
                    type="email" 
                    id="resume-email"
                    name="email"
                    required
                    pattern="^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+\\.[A-Za-z]{2,}$"
                    inputMode="email"
                    autoComplete="email"
                    title="Enter a valid email like name@example.com"
                    className={`w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 ${accent.ring} transition-all`}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="resume-reason" className="block text-sm font-medium text-slate-300 mb-2">
                    {labels.forms.resume.reason}
                  </label>
                  <textarea 
                    id="resume-reason"
                    name="reason"
                    rows={4}
                    required
                    className={`w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 ${accent.ring} resize-none transition-all`}
                    placeholder={labels.forms.resume.placeholder}
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={resumeSubmitting}
                  className={`w-full ${accentButton} text-white py-3 rounded-lg transition-all font-medium ${accentShadow} disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {resumeSubmitting ? labels.status.sending : labels.forms.resume.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 w-12 h-12 ${accent.scrollGradient} text-white rounded-full shadow-lg ${accent.scrollShadow} transition-all z-40 flex items-center justify-center group`}
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}



      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-400">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#about" className={`text-slate-400 hover:${text.accent} transition-colors`}>About</a>
              <a href="#skills" className={`text-slate-400 hover:${text.accent} transition-colors`}>Skills</a>
              <a href="#experience" className={`text-slate-400 hover:${text.accent} transition-colors`}>Experience</a>
              <a href="#languages" className={`text-slate-400 hover:${text.accent} transition-colors`}>Languages</a>
              <a href="#education" className={`text-slate-400 hover:${text.accent} transition-colors`}>Education</a>
              <a 
                href={personalInfo.blogUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-slate-400 hover:${text.accent} transition-colors flex items-center gap-1`}
              >
                Blog
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="#contact" className={`text-slate-400 hover:${text.accent} transition-colors`}>Contact</a>

            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
