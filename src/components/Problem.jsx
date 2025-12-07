import { BookOpen, TrendingUp, Users, X, Check, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

export default function Problem() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const problems = [
    {
      icon: BookOpen,
      text: t.problem.problem1,
      color: 'text-red',
      bgColor: 'bg-red/10',
      borderColor: 'border-red/20'
    },
    {
      icon: TrendingUp,
      text: t.problem.problem2,
      color: 'text-yellow',
      bgColor: 'bg-yellow/10',
      borderColor: 'border-yellow/20'
    },
    {
      icon: Users,
      text: t.problem.problem3,
      color: 'text-blue',
      bgColor: 'bg-blue/10',
      borderColor: 'border-blue/20'
    }
  ]

  return (
    <section aria-labelledby="why-not-enough" className="relative">
      <div className="relative w-full">
        {/* Title stays centered */}
        <div className="space-y-3 mb-12 text-center">
          <h2 id="why-not-enough" className="text-3xl md:text-4xl font-extrabold text-navy">
            {t.problem.title}
          </h2>
          <div className="title-underline mx-auto" />
        </div>

        {/* Problems on left, Solution on right layout - shifted right */}
        <div className="grid lg:grid-cols-[minmax(300px,600px),350px,280px] gap-8 items-center max-w-7xl ml-auto mr-0 lg:mr-12">
          {/* Problems column - left aligned */}
          <div className="space-y-6">
            {problems.map(({ icon: Icon, text, color, bgColor, borderColor }, idx) => (
              <div 
                key={idx}
                className={`relative p-6 rounded-2xl border-2 ${borderColor} ${bgColor} hover:scale-105 transition-transform duration-300`}
              >
                {/* X icon badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-red rounded-full flex items-center justify-center shadow-lg">
                  <X className="text-white" size={20} strokeWidth={3} />
                </div>

                <div className="flex items-start gap-4 text-left">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center`}>
                    <Icon className={color} size={24} />
                  </div>
                  <p className="text-lg text-black/80 leading-relaxed pt-2">
                    {text}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute bottom-2 right-2 w-16 h-16 ${bgColor} rounded-tl-full opacity-30`} />
              </div>
            ))}
          </div>

          {/* Arrow column - middle (static position in grid) */}
          <div className="hidden lg:flex items-center justify-center">
            <svg 
              className="w-full h-auto pointer-events-none" 
              viewBox="0 0 350 400" 
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Lines from each problem converging to center - colored and thicker */}
              <line x1="0" y1="68" x2="157" y2="200" stroke="#E84A3C" strokeWidth="3" opacity="0.6" />
              <line x1="0" y1="200" x2="157" y2="200" stroke="#F4C542" strokeWidth="3" opacity="0.6" />
              <line x1="0" y1="332" x2="157" y2="200" stroke="#2F6FBF" strokeWidth="3" opacity="0.6" />
              
              {/* Main arrow line to solution - green */}
              <line x1="157" y1="200" x2="333" y2="200" stroke="#3E8E3A" strokeWidth="4" opacity="0.8" />
              
              {/* Arrow head - larger and green */}
              <polygon points="333,200 320,193 320,207" fill="#3E8E3A" />
              
              {/* Convergence point indicator */}
              <circle cx="157" cy="200" r="5" fill="#0D2B4E" opacity="0.7" />
            </svg>
          </div>

          {/* Solution card on the right */}
          <div>
            <div className="relative p-8 bg-gradient-to-br from-green/20 to-green/10 border-2 border-green/40 rounded-2xl shadow-lg min-w-[280px] hover:scale-105 transition-transform duration-300">
              {/* Check icon badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green rounded-full flex items-center justify-center shadow-lg">
                <Check className="text-white" size={24} strokeWidth={3} />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-navy mb-2">{t.problem.solutionTitle}</h3>
                <p className="text-lg font-semibold text-navy/90">
                  {t.problem.solutionDesc}
                </p>
              </div>

              {/* Decorative glow */}
              <div className="absolute inset-0 bg-green/5 rounded-2xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


