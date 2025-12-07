import FadeInSection from './FadeInSection.jsx'
import { Sparkles, Trophy, Users, Lightbulb } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

export default function Community() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  
  return (
    <FadeInSection>
      <div className="relative rounded-2xl overflow-hidden p-6 md:p-10">
        {/* Gradient overlays - layered for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue/20 via-green/10 to-yellow/15" />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy/5 via-transparent to-blue/10" />
        
        {/* Decorative blur orbs */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-green/20 rounded-full blur-3xl" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 hero-pattern opacity-30" />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-sm text-navy/80 border border-navy/10">
            <Sparkles className="text-yellow" size={16} />
            <span>{t.community.badge}</span>
          </div>
          <h3 className="mt-4 text-2xl md:text-3xl font-bold text-navy">
            {t.community.title}
          </h3>
          <p className="mt-2 text-navy/80">
            {t.community.subtitle}
          </p>
        </div>
        
        {/* Enhanced cards with icons */}
        <div className="relative z-10 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-5 glass border border-navy/10">
            <Trophy className="text-yellow mb-3" size={28} />
            <h4 className="font-bold text-navy mb-1">{t.community.showcases}</h4>
            <p className="text-sm text-navy/70">{t.community.showcasesDesc}</p>
          </div>
          <div className="card p-5 glass border border-navy/10">
            <Users className="text-green mb-3" size={28} />
            <h4 className="font-bold text-navy mb-1">{t.community.challenges}</h4>
            <p className="text-sm text-navy/70">{t.community.challengesDesc}</p>
          </div>
          <div className="card p-5 glass border border-navy/10">
            <Lightbulb className="text-blue mb-3" size={28} />
            <h4 className="font-bold text-navy mb-1">{t.community.stories}</h4>
            <p className="text-sm text-navy/70">{t.community.storiesDesc}</p>
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}


