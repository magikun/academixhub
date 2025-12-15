import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Megaphone, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

export default function Announcement() {
  const [open, setOpen] = useState(true)
  const { language } = useLanguage()
  const t = getTranslation(language)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToWaitlist = (e) => {
    e.preventDefault()
    const isHomePage = location.pathname === '/' || location.pathname === ''
    
    if (!isHomePage) {
      navigate('/')
      // Wait for navigation and DOM to be ready, then scroll
      setTimeout(() => {
        const element = document.getElementById('apply')
        if (element) {
          const offset = 100 // Offset for fixed header
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - offset
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
      }, 150)
    } else {
      const element = document.getElementById('apply')
      if (element) {
        const offset = 100 // Offset for fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }
  }

  useEffect(() => {
    const stored = localStorage.getItem('ah_announcement_closed')
    if (stored === 'true') setOpen(false)
  }, [])

  if (!open) return null

  return (
    <div className="border-b border-navy/10 bg-offwhite/80 backdrop-blur">
      <div className="container mx-auto py-2 flex items-center justify-center">
        <a href="#apply" onClick={scrollToWaitlist} className="flex items-center justify-center gap-2 text-sm text-navy/80">
          <Megaphone size={16} className="text-yellow" />
          <span className="hidden sm:inline">{t.announcement.text}</span>
          <span className="underline underline-offset-4 decoration-yellow hover:text-blue">{t.announcement.link}</span>
        </a>
        <button
          aria-label="Close announcement"
          className="ml-auto text-navy/60 hover:text-navy p-1 rounded"
          onClick={() => {
            setOpen(false)
            try {
              localStorage.setItem('ah_announcement_closed', 'true')
            } catch {}
          }}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}


