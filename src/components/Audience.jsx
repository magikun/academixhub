import { Users, Beaker, GraduationCap, Building2 } from 'lucide-react'
import FadeInSection from './FadeInSection.jsx'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

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
      icon: Beaker,
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
          {groups.map(({ title, desc, icon: Icon, color, bg }) => (
            <div key={title} className="p-[1px] rounded-xl bg-gradient-to-br from-blue/20 via-yellow/20 to-green/20 card-hover h-full">
              <div className="rounded-xl bg-white p-6 h-full">
                <div className={`h-10 w-10 rounded-lg ${bg} flex items-center justify-center mb-3`}>
                  <Icon className={`${color}`} />
                </div>
                <h3 className="font-semibold text-navy">{title}</h3>
                <p className="text-navy/75 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  )
}


