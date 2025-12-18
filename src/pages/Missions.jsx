import { useEffect, useRef } from 'react'
import FadeInSection from '../components/FadeInSection'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'
import empowerImage from '../images/Empower.png'
import innovateImage from '../images/Innovate.png'
import connectImage from '../images/connect.png'

export default function Missions() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const imageRefs = useRef([])

  // Handle lazy loading fade-in effect
  useEffect(() => {
    const images = imageRefs.current
    const imageObservers = []

    images.forEach((img) => {
      if (!img) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('loaded')
              observer.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '50px' } // Start loading 50px before image enters viewport
      )

      observer.observe(img)
      imageObservers.push(observer)
    })

    return () => {
      imageObservers.forEach((observer) => observer.disconnect())
    }
  }, [])
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-navy/5 to-blue/5">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy mb-6">
                {t.missions.title}
              </h1>
              <p className="text-xl md:text-2xl text-navy/80 leading-relaxed">
                {t.missions.subtitle}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="section">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-4 md:p-8 text-center hover:scale-105 transition-transform">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto mb-2 flex items-center justify-center">
                  <img
                    ref={(el) => (imageRefs.current[0] = el)}
                    src={empowerImage}
                    alt="Empower"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width="320"
                    height="320"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-3">{t.missions.empower}</h3>
                <p className="text-sm md:text-base text-navy/70">
                  {t.missions.empowerDesc}
                </p>
              </div>

              <div className="card p-4 md:p-8 text-center hover:scale-105 transition-transform">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto mb-2 flex items-center justify-center">
                  <img
                    ref={(el) => (imageRefs.current[1] = el)}
                    src={innovateImage}
                    alt="Innovate"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width="320"
                    height="320"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-3">{t.missions.innovate}</h3>
                <p className="text-sm md:text-base text-navy/70">
                  {t.missions.innovateDesc}
                </p>
              </div>

              <div className="card p-4 md:p-8 text-center hover:scale-105 transition-transform">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto mb-2 flex items-center justify-center">
                  <img
                    ref={(el) => (imageRefs.current[2] = el)}
                    src={connectImage}
                    alt="Connect"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width="320"
                    height="320"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-3">{t.missions.connect}</h3>
                <p className="text-sm md:text-base text-navy/70">
                  {t.missions.connectDesc}
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section bg-gradient-to-br from-blue/5 to-green/5">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                {t.missions.visionTitle}
              </h2>
              <p className="text-lg md:text-xl text-navy/80 leading-relaxed">
                {t.missions.visionDesc}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}

