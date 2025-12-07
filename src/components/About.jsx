import { useEffect, useRef } from 'react'
import FadeInSection from './FadeInSection.jsx'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'
import collaborationmeeting from '../images/collaborationmeeting.png'
import flyingmoney from '../images/flyingmoney.png'
import idea from '../images/idea.png'
import startuprocket from '../images/startuprocket.png'

export default function About() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      // Disable parallax on mobile for better performance
      if (window.innerWidth <= 768) return
      
      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      
      // Calculate parallax offset (moves images as user scrolls)
      const offset = (scrollProgress - 0.5) * 20 // Reduced to 20 for subtle movement
      
      const images = section.querySelectorAll('.parallax-image')
      images.forEach((img, index) => {
        // Different speeds for each image
        const speed = 1 + (index * 0.2)
        img.style.transform = `translateY(${offset * speed}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <FadeInSection>
      <div ref={sectionRef} className="relative max-w-5xl mx-auto">
        {/* Decorative Images */}
        <div className="parallax-image absolute -top-24 -left-8 md:-left-12 lg:-left-24 w-32 h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-80 transition-transform duration-300 ease-out">
          <img src={idea} alt="Idea" className="w-full h-full object-contain" />
        </div>
        
        <div className="parallax-image absolute -top-28 -right-6 md:-right-12 lg:-right-20 w-28 h-28 md:w-28 md:h-28 lg:w-36 lg:h-36 opacity-80 transition-transform duration-300 ease-out">
          <img src={startuprocket} alt="Startup Rocket" className="w-full h-full object-contain" />
        </div>
        
        <div className="parallax-image absolute -bottom-24 -left-6 md:-left-12 lg:-left-20 w-28 h-28 md:w-28 md:h-28 lg:w-36 lg:h-36 opacity-80 transition-transform duration-300 ease-out">
          <img src={flyingmoney} alt="Flying Money" className="w-full h-full object-contain" />
        </div>
        
        <div className="parallax-image absolute -bottom-28 -right-8 md:-right-12 lg:-right-24 w-32 h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-80 transition-transform duration-300 ease-out">
          <img src={collaborationmeeting} alt="Collaboration Meeting" className="w-full h-full object-contain" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 md:px-8 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">{t.about.title}</h2>
          <div className="mx-auto mt-3 title-underline" />
          <p className="mt-5 text-navy/85 text-lg leading-relaxed">
            {t.about.description}
          </p>
        </div>
      </div>
    </FadeInSection>
  )
}


