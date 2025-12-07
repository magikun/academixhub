import { Link } from 'react-router-dom'
import { Instagram, Send } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  
  return (
    <div className="border-t border-navy/15 bg-offwhite">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <p className="font-bold text-navy">Academix Hub</p>
            <p className="text-navy/75 mt-2 text-sm">
              {t.footer.description}
            </p>
          </div>

          <div className="flex md:justify-center gap-6">
            <Link to="/missions" className="text-navy hover:text-blue text-sm font-medium">
              {t.nav.missions}
            </Link>
            <Link to="/path" className="text-navy hover:text-blue text-sm font-medium">
              {t.nav.path}
            </Link>
            <Link to="/accomplishments" className="text-navy hover:text-blue text-sm font-medium">
              {t.nav.accomplishments}
            </Link>
            <Link to="/contacts" className="text-navy hover:text-blue text-sm font-medium">
              {t.nav.contacts}
            </Link>
          </div>

          <div className="flex md:justify-end items-center gap-4">
            <a 
              href="https://www.instagram.com/academixhubglobal/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram" 
              className="text-navy hover:text-blue transition-colors cursor-pointer"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://t.me/+NfgWEYGdCDVhMTYy" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Telegram" 
              className="text-navy hover:text-blue transition-colors cursor-pointer"
            >
              <Send size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-navy/60">
          © {new Date().getFullYear()} {t.footer.copyright}
        </div>
      </div>
    </div>
  )
}


