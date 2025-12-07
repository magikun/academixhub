import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

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
      <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">{t.stats.title}</h2>
      <motion.div ref={gridRef} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <motion.div variants={item} className="p-[1px] rounded-xl bg-gradient-to-br from-green/20 via-blue/15 to-yellow/20 card-hover h-full">
          <div className="rounded-xl bg-white p-6 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <p className="text-4xl font-extrabold text-navy">{students.toLocaleString()}+</p>
            <ArrowUpRight className="text-green" />
          </div>
          <p className="mt-2 text-navy/70">{t.stats.students}</p>
          </div>
        </motion.div>

        <motion.div variants={item} className="p-[1px] rounded-xl bg-gradient-to-br from-yellow/20 via-blue/15 to-green/20 card-hover h-full">
          <div className="rounded-xl bg-white p-6 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <p className="text-2xl md:text-3xl font-extrabold text-navy">{prize.toLocaleString()}+ KZT</p>
            <ArrowUpRight className="text-green" />
          </div>
          <p className="mt-2 text-navy/70">{t.stats.prizePool}</p>
          
          </div>
        </motion.div>

        <motion.div variants={item} className="p-[1px] rounded-xl bg-gradient-to-br from-green/20 via-blue/15 to-yellow/20 card-hover h-full">
          <div className="rounded-xl bg-white p-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-2xl md:text-3xl font-extrabold text-navy">1 {t.stats.tournament}</p>
              <ArrowUpRight className="text-green" />
            </div>
            <p className="mt-2 text-navy/70">
              {t.stats.tournamentDesc}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}


