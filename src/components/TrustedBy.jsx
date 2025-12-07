import { useState, useEffect } from 'react'
import FadeInSection from './FadeInSection.jsx'
import logoFallback from './academix-logo.png'
import PartnerLogo from './PartnerLogo.jsx'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

// Auto-import all partner logos from components/partners (png, jpg, jpeg, svg)
// Sorted by filename to keep a stable order
const modules = import.meta.glob('./partners/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG}', { eager: true, query: '?url', import: 'default' })
const discovered = Object.entries(modules)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([path, url], idx) => ({
    id: idx,
    src: url,
    alt: path.split('/').pop().split('.')[0].replace(/[-_]/g, ' ')
  }))

// Fallback if no files yet
const logos = discovered.length
  ? discovered
  : Array.from({ length: 8 }, (_, i) => ({ id: i, src: logoFallback, alt: `Partner ${i + 1}` }))

export default function TrustedBy() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Optimized: Mobile 50 cycles, Desktop 100 cycles
  const cycles = isMobile ? 50 : 100
  
  return (
    <FadeInSection>
      <div className="mt-6">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">{t.trustedBy.title}</h2>

        <div className="relative overflow-hidden rounded-lg w-full border-y border-navy/10 py-8 md:py-10">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-offwhite to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-offwhite to-transparent" />

          {/* Infinite seamless marquee - multiply logos for smooth looping */}
          <div className="flex gap-10 w-max animate-marquee">
            {Array(cycles).fill([...logos]).flat().map((l, idx) => (
              <div key={`logo-${l.id}-${idx}`} className="flex items-center justify-center flex-shrink-0">
                <img
                  src={l.src}
                  alt={l.alt}
                  className="h-32 md:h-40 w-auto object-contain opacity-95 hover:opacity-100 transition-transform duration-200 ease-out transform hover:-translate-y-1 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
          {/* Mark the duplicate track as decorative for screen readers */}
          <div className="sr-only" aria-hidden="true">Partner logos carousel</div>
        </div>
      </div>
    </FadeInSection>
  )
}


