import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'
import { SpotlightCard } from './ui/spotlight-card'
import { PeopleInCommunity } from './ui/people-community'

export default function Stats() {
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
  const gridRef = useRef(null)
  const inView = useInView(gridRef, { once: true, amount: 0.3 })

  // simple count up hook using requestAnimationFrame
  const useCountUp = (target, trigger, duration = 1200) => {
    const [value, setValue] = useState(0)
    useEffect(() => {
      if (!trigger) return
      let raf
      const start = performance.now()
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(target * eased))
        if (progress < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
      return () => cancelAnimationFrame(raf)
    }, [target, trigger, duration])
    return value
  }

  const students = useCountUp(300, inView, 1200)
  const prize = useCountUp(50000, inView, 1400)
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8" style={{ fontFamily: 'inherit' }}>{t.stats.title}</h2>
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left side - Stats cards */}
        <motion.div ref={gridRef} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex flex-col gap-6 flex-1 lg:justify-between">
          <motion.div variants={item} className="flex-1">
            <SpotlightCard 
              className="p-[1px] rounded-xl bg-gradient-to-br from-green/20 via-blue/15 to-yellow/20 card-hover h-full border-0 overflow-visible"
              spotlightColor="rgba(62, 142, 58, 0.25)"
            >
              <div className="rounded-xl bg-white p-6 h-full flex flex-col relative z-10">
                <div className="flex items-center justify-between">
                  <p className="text-4xl font-extrabold text-navy" style={{ fontFamily: 'inherit' }}>{students.toLocaleString()}+</p>
                  <ArrowUpRight className="text-green" />
                </div>
                <p className="mt-2 text-navy/70" style={{ fontFamily: 'inherit' }}>{t.stats.students}</p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={item} className="flex-1">
            <SpotlightCard 
              className="p-[1px] rounded-xl bg-gradient-to-br from-yellow/20 via-blue/15 to-green/20 card-hover h-full border-0 overflow-visible"
              spotlightColor="rgba(244, 197, 66, 0.25)"
            >
              <div className="rounded-xl bg-white p-6 h-full flex flex-col relative z-10">
                <div className="flex items-center justify-between">
                  <p className="text-2xl md:text-3xl font-extrabold text-navy" style={{ fontFamily: 'inherit' }}>{prize.toLocaleString()}+ KZT</p>
                  <ArrowUpRight className="text-green" />
                </div>
                <p className="mt-2 text-navy/70" style={{ fontFamily: 'inherit' }}>{t.stats.prizePool}</p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={item} className="flex-1">
            <SpotlightCard 
              className="p-[1px] rounded-xl bg-gradient-to-br from-green/20 via-blue/15 to-yellow/20 card-hover h-full border-0 overflow-visible"
              spotlightColor="rgba(47, 111, 191, 0.25)"
            >
              <div className="rounded-xl bg-white p-6 h-full flex flex-col relative z-10">
                <div className="flex items-center justify-between">
                  <p className="text-2xl md:text-3xl font-extrabold text-navy" style={{ fontFamily: 'inherit' }}>1 {t.stats.tournament}</p>
                  <ArrowUpRight className="text-green" />
                </div>
                <p className="mt-2 text-navy/70" style={{ fontFamily: 'inherit' }}>
                  {t.stats.tournamentDesc}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* Right side - People in Community widget */}
        <motion.div variants={item} className="flex-1 h-full">
          <PeopleInCommunity />
        </motion.div>
      </div>
    </div>
  )
}


