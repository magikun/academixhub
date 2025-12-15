import { Users, Dna, GraduationCap, Building2 } from 'lucide-react'
import FadeInSection from './FadeInSection.jsx'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'
import { SpotlightCard } from './ui/spotlight-card'

export default function Audience() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const groups = [
    {
      title: t.audience.startups,
      desc: t.audience.startupsDesc,
      icon: Building2,
      color: 'text-blue',
      bg: 'bg-blue/10'
    },
    {
      title: t.audience.researchers,
      desc: t.audience.researchersDesc,
      icon: Dna,
      color: 'text-yellow',
      bg: 'bg-yellow/10'
    },
    {
      title: t.audience.students,
      desc: t.audience.studentsDesc,
      icon: GraduationCap,
      color: 'text-green',
      bg: 'bg-green/10'
    },
    {
      title: t.audience.companies,
      desc: t.audience.companiesDesc,
      icon: Users,
      color: 'text-navy',
      bg: 'bg-navy/10'
    }
  ]

  return (
    <FadeInSection>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center">{t.audience.title}</h2>
        <div className="mx-auto mt-3 title-underline" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {groups.map(({ title, desc, icon: Icon, color, bg }, idx) => {
            // Spotlight colors matching Academix Hub theme
            const spotlightColors = [
              "rgba(47, 111, 191, 0.25)", // blue #2F6FBF
              "rgba(244, 197, 66, 0.25)", // yellow #F4C542
              "rgba(62, 142, 58, 0.25)",  // green #3E8E3A
              "rgba(13, 43, 78, 0.25)"     // navy #0D2B4E
            ]
            
            // Researchers card (idx === 1) should not have spotlight effect
            const isResearchers = idx === 1
            
            if (isResearchers) {
              return (
                <div 
                  key={title}
                  className="p-[1px] rounded-xl bg-gradient-to-br from-blue/20 via-yellow/20 to-green/20 card-hover h-full"
                >
                  <div className="rounded-xl bg-white p-6 h-full">
                    <div className={`h-10 w-10 rounded-lg ${bg} flex items-center justify-center mb-3`}>
                      <Icon className={`${color}`} />
                    </div>
                    <h3 className="font-semibold text-navy">{title}</h3>
                    <p className="text-navy/75 mt-1">{desc}</p>
                  </div>
                </div>
              )
            }
            
            return (
              <SpotlightCard 
                key={title}
                className="p-[1px] rounded-xl bg-gradient-to-br from-blue/20 via-yellow/20 to-green/20 card-hover h-full border-0 overflow-visible"
                spotlightColor={spotlightColors[idx]}
              >
                <div className="rounded-xl bg-white p-6 h-full relative z-10">
                  <div className={`h-10 w-10 rounded-lg ${bg} flex items-center justify-center mb-3`}>
                    <Icon className={`${color}`} />
                  </div>
                  <h3 className="font-semibold text-navy">{title}</h3>
                  <p className="text-navy/75 mt-1">{desc}</p>
                </div>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </FadeInSection>
  )
}


