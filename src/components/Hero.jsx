import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, Users, Trophy } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = getTranslation(language)

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
    <div className="container mx-auto">
      <div className="relative overflow-hidden cover-gradient hero-pattern rounded-3xl p-6 md:p-10 min-h-[75vh] flex items-center glow">
        {/* Soft abstract blobs in the background (pure CSS) */}
        <div className="blob blob--blue w-64 h-64 -top-10 -left-10" />
        <div className="blob blob--yellow w-72 h-72 -bottom-16 -right-10" />
        <div className="blob blob--green w-60 h-60 top-1/3 -right-24" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-4xl mx-auto text-center"
        >
          {/* Content */}
          <div className="space-y-6">

            <motion.h1 variants={item} className="text-4xl md:text-6xl font-extrabold text-navy leading-tight">
              {t.hero.title}
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-xl text-navy/80 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-navy/90">
              {[
                { text: t.hero.feature1, icon: FlaskConical, color: 'text-blue', chip: 'bg-blue/15' },
                { text: t.hero.feature2, icon: Users, color: 'text-green', chip: 'bg-green/15' },
                { text: t.hero.feature3, icon: Trophy, color: 'text-yellow', chip: 'bg-yellow/15' }
              ].map(({ text, icon: Icon, color, chip }) => (
                <div key={text} className="group p-[1px] rounded-xl bg-gradient-to-br from-blue/20 via-yellow/20 to-green/20 hover:shadow-lg transition-shadow">
                  <div className="h-full rounded-xl bg-white/70 backdrop-blur border border-navy/10 px-5 py-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform">
                    <span className={`h-9 w-9 rounded-lg ${chip} flex items-center justify-center shrink-0`}>
                      <Icon className={`${color}`} size={18} />
                    </span>
                    <span className="text-base md:text-[17px]">{text}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
              <a href="#apply" className="btn btn-primary hover:scale-105 hover-shine">
                {t.hero.applyBtn}
                <ArrowRight size={18} />
              </a>
              <Link to="/missions" className="btn btn-secondary hover:scale-105 hover-shine">
                {t.hero.aboutBtn}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


