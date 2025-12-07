import { useEffect, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

export default function StickySubheader() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const [visible, setVisible] = useState(false)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('ah_subheader_closed') === 'true'
      setClosed(dismissed)
    } catch {}
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (!closed) setVisible(window.scrollY > 280)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [closed])

  if (!visible || closed) return null

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40">
      <div className="container mx-auto">
        <div className="glass glow rounded-full px-4 py-2 flex items-center gap-3">
          <span className="text-sm text-navy/80 flex-1">{t.stickyBanner.text}</span>
          <a href="#apply" className="btn btn-primary hover:scale-105 hover-shine"> 
            {t.stickyBanner.btn}
            <ArrowRight size={16} />
          </a>
          <button
            aria-label="Close banner"
            className="ml-1 rounded p-1 text-navy/60 hover:text-navy"
            onClick={() => {
              setClosed(true)
              setVisible(false)
              try {
                localStorage.setItem('ah_subheader_closed', 'true')
              } catch {}
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}


