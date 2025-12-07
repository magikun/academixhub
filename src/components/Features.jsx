import { motion } from 'framer-motion'
import { Brain, FlaskConical, TrendingUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'
import research from '../images/research.png'
import competition from '../images/competition.png'
import startuprocket from '../images/startuprocket.png'

function Decorative({ variant = 'yellow' }) {
  const gradId = `grad-${variant}`
  const from =
    variant === 'yellow' ? '#F4C542' : variant === 'blue' ? '#2F6FBF' : '#3E8E3A'
  const to = variant === 'yellow' ? '#F7F5EF' : variant === 'blue' ? '#F7F5EF' : '#F7F5EF'
  return (
    <svg
      className="absolute -top-6 -right-6 w-40 h-40 opacity-30 pointer-events-none select-none"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        d="M128.5 15.3c17.7 7.7 33.6 24.2 38.7 43.3 5.1 19-0.6 40.5-12.6 56.8-12 16.3-30.1 27.4-49 31-19 3.7-38.9-0.4-55.3-10.9C23.9 124.9 8.6 108.8 3.2 90.3-2.2 71.8 3.4 51 15.9 35.4 28.4 19.7 47.8 9.4 68.6 7.5c20.8-1.9 42.2 0 59.9 7.8Z"
        fill={`url(#${gradId})`}
      />
      <circle cx="160" cy="40" r="8" fill={from} />
      <circle cx="24" cy="160" r="5" fill={from} />
    </svg>
  )
}

export default function Features() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const features = [
    {
      title: t.features.researchTraining,
      desc: t.features.researchTrainingDesc,
      icon: Brain,
      color: 'text-yellow',
      bg: 'bg-yellow/10',
      image: research
    },
    {
      title: t.features.innovationTournaments,
      desc: t.features.innovationTournamentsDesc,
      icon: FlaskConical,
      color: 'text-blue',
      bg: 'bg-blue/10',
      image: competition
    },
    {
      title: t.features.projectMentorship,
      desc: t.features.projectMentorshipDesc,
      icon: TrendingUp,
      color: 'text-green',
      bg: 'bg-green/10',
      image: startuprocket
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">
        {t.features.title}
      </h2>
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {features.map(({ title, desc, icon: Icon, color, bg, image }, idx) => (
          <motion.div key={title} variants={item} className="relative p-[1px] rounded-xl bg-gradient-to-br from-blue/20 via-yellow/20 to-green/20 card-hover group h-full hover-shine overflow-hidden">
            <div className="rounded-xl bg-white p-6 h-full flex flex-col relative">
              {idx === 0 && <Decorative variant="yellow" />}
              {idx === 1 && <Decorative variant="blue" />}
              {idx === 2 && <Decorative variant="green" />}
              
              {/* Feature Image */}
              <div className="mb-4 w-full h-40 flex items-center justify-center">
                <img src={image} alt={title} className="w-32 h-32 object-contain opacity-90" />
              </div>
              
              <div className={`h-11 w-11 rounded-lg ${bg} flex items-center justify-center mb-4`}>
                <Icon className={`${color} transition-transform duration-150 group-hover:rotate-3`} />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-1">{title}</h3>
              <p className="text-navy/75 flex-1">{desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}


