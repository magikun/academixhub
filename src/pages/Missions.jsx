import { Target, Lightbulb, Users } from 'lucide-react'
import FadeInSection from '../components/FadeInSection'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'
import empowerImage from '../images/Empower.png'
import innovateImage from '../images/Innovate.png'
import connectImage from '../images/connect.png'

export default function Missions() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  
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
              <div className="card p-8 text-center hover:scale-105 transition-transform">
                <div className="w-80 h-80 mx-auto mb-2 flex items-center justify-center">
                  <img src={empowerImage} alt="Empower" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">{t.missions.empower}</h3>
                <p className="text-navy/70">
                  {t.missions.empowerDesc}
                </p>
              </div>

              <div className="card p-8 text-center hover:scale-105 transition-transform">
                <div className="w-80 h-80 mx-auto mb-2 flex items-center justify-center">
                  <img src={innovateImage} alt="Innovate" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">{t.missions.innovate}</h3>
                <p className="text-navy/70">
                  {t.missions.innovateDesc}
                </p>
              </div>

              <div className="card p-8 text-center hover:scale-105 transition-transform">
                <div className="w-80 h-80 mx-auto mb-2 flex items-center justify-center">
                  <img src={connectImage} alt="Connect" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">{t.missions.connect}</h3>
                <p className="text-navy/70">
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

