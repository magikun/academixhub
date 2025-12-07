import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

function TestimonialCard({ quote, name, borderStyle }) {
  return (
    <div 
      className="card p-6 glass min-w-[320px] md:min-w-[380px] flex-shrink-0 border-2"
      style={{ borderColor: borderStyle }}
    >
      <p className="text-navy/90 text-base md:text-lg mb-4">"{quote}"</p>
      <p className="text-sm text-navy/60 font-semibold">— {name}</p>
    </div>
  )
}

function TestimonialRow({ testimonials, direction = 'left', borderStyle }) {
  const animationClass = direction === 'left' ? 'animate-marquee-slow' : 'animate-marquee-reverse'
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Mobile: 20 cycles (smaller screen, less memory)
  // Desktop: 50 cycles
  const cycles = isMobile ? 20 : 50
  
  // Safety check for testimonials array
  if (!testimonials || !Array.isArray(testimonials) || testimonials.length === 0) {
    return null
  }
  
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex gap-6">
        {/* Responsive cycles based on screen size */}
        <div className={`flex gap-6 ${animationClass}`}>
          {Array(cycles).fill(testimonials).flat().map((t, idx) => (
            <TestimonialCard key={`${t.id}-${idx}`} quote={t.quote} name={t.name} borderStyle={borderStyle} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const testimonialsRow1 = [
    { id: 1, name: t.testimonials.test1Name, quote: t.testimonials.test1Quote },
    { id: 2, name: t.testimonials.test2Name, quote: t.testimonials.test2Quote },
    { id: 3, name: t.testimonials.test3Name, quote: t.testimonials.test3Quote },
    { id: 4, name: t.testimonials.test4Name, quote: t.testimonials.test4Quote },
    { id: 5, name: t.testimonials.test5Name, quote: t.testimonials.test5Quote }
  ]

  const testimonialsRow2 = [
    { id: 6, name: t.testimonials.test6Name, quote: t.testimonials.test6Quote },
    { id: 7, name: t.testimonials.test7Name, quote: t.testimonials.test7Quote },
    { id: 8, name: t.testimonials.test8Name, quote: t.testimonials.test8Quote },
    { id: 9, name: t.testimonials.test9Name, quote: t.testimonials.test9Quote },
    { id: 10, name: t.testimonials.test10Name, quote: t.testimonials.test10Quote }
  ]

  const testimonialsRow3 = [
    { id: 11, name: t.testimonials.test11Name, quote: t.testimonials.test11Quote },
    { id: 12, name: t.testimonials.test12Name, quote: t.testimonials.test12Quote },
    { id: 13, name: t.testimonials.test13Name, quote: t.testimonials.test13Quote },
    { id: 14, name: t.testimonials.test14Name, quote: t.testimonials.test14Quote },
    { id: 15, name: t.testimonials.test15Name, quote: t.testimonials.test15Quote }
  ]

  return (
    <div className="py-8 relative">
      {/* Background graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow/8 rounded-full blur-3xl" />
        
        {/* Decorative lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#2F6FBF', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: '#2F6FBF', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#2F6FBF', stopOpacity: 0 }} />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#3E8E3A', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: '#3E8E3A', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#3E8E3A', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <line x1="0" y1="25%" x2="100%" y2="25%" stroke="url(#lineGrad1)" strokeWidth="2" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#lineGrad2)" strokeWidth="2" />
          <line x1="0" y1="75%" x2="100%" y2="75%" stroke="url(#lineGrad1)" strokeWidth="2" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-3">{t.testimonials.title}</h2>
        <div className="mx-auto title-underline mb-12" />
        
        <div className="space-y-10 md:space-y-12">
          {/* Row 1: Right to Left - Blue */}
          <TestimonialRow testimonials={testimonialsRow1} direction="left" borderStyle="rgba(47, 111, 191, 0.35)" />
          
          {/* Row 2: Left to Right - Green */}
          <TestimonialRow testimonials={testimonialsRow2} direction="right" borderStyle="rgba(62, 142, 58, 0.35)" />
          
          {/* Row 3: Right to Left - Yellow */}
          <TestimonialRow testimonials={testimonialsRow3} direction="left" borderStyle="rgba(244, 197, 66, 0.45)" />
        </div>
      </div>
    </div>
  )
}


