import { Trophy, Users, Globe, Award } from 'lucide-react'
import FadeInSection from '../components/FadeInSection'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

export default function Accomplishments() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  
  const achievements = [
    {
      icon: Users,
      number: '300+',
      label: t.accomplishments.members,
      description: t.accomplishments.membersDesc,
      color: 'blue'
    },
    {
      icon: Trophy,
      number: '1',
      label: t.accomplishments.tournament,
      description: t.accomplishments.tournamentDesc,
      color: 'green'
    },
    {
      icon: Globe,
      number: '10+',
      label: t.accomplishments.partners,
      description: t.accomplishments.partnersDesc,
      color: 'yellow'
    },
    {
      icon: Award,
      number: '50,000+',
      label: t.accomplishments.prizes,
      description: t.accomplishments.prizesDesc,
      color: 'navy'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-yellow/5 to-green/5">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy mb-6">
                {t.accomplishments.title}
              </h1>
              <p className="text-xl md:text-2xl text-navy/80 leading-relaxed">
                {t.accomplishments.subtitle}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((item, idx) => (
              <FadeInSection key={idx}>
                <div className={`card p-8 hover:scale-[1.02] transition-all border-2 border-${item.color}/20`}>
                  <div className={`w-16 h-16 mb-4 rounded-full bg-${item.color}/10 flex items-center justify-center`}>
                    <item.icon className={`text-${item.color}`} size={32} />
                  </div>
                  <div className={`text-5xl md:text-6xl font-extrabold text-${item.color} mb-2`}>
                    {item.number}
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {item.label}
                  </h3>
                  <p className="text-navy/70 text-lg">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="section bg-gradient-to-br from-blue/5 to-navy/5">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                {t.accomplishments.impactTitle}
              </h2>
              <p className="text-lg md:text-xl text-navy/80 leading-relaxed mb-8">
                {t.accomplishments.impactDesc}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 rounded-full bg-blue/10 text-blue font-semibold">
                  {t.accomplishments.innovation}
                </div>
                <div className="px-6 py-3 rounded-full bg-green/10 text-green font-semibold">
                  {t.accomplishments.collaboration}
                </div>
                <div className="px-6 py-3 rounded-full bg-yellow/10 text-yellow font-semibold">
                  {t.accomplishments.growth}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}

