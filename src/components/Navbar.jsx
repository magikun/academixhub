import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from './academix-logo.png'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)
  const { language } = useLanguage()
  const t = getTranslation(language)

  // Add scrolled styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [open])

  // Trap focus in mobile menu when open
  useEffect(() => {
    if (open && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled])'
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }

      menuRef.current.addEventListener('keydown', handleTabKey)
      firstElement?.focus()

      return () => {
        menuRef.current?.removeEventListener('keydown', handleTabKey)
      }
    }
  }, [open])

  const navClasses = [
    'sticky top-0 z-50 border-b transition-all',
    scrolled ? 'backdrop-blur bg-offwhite/80 border-navy/10 shadow-sm' : 'bg-offwhite/90 border-transparent'
  ].join(' ')

  const isActive = (path) => location.pathname === path

  return (
    <header className={navClasses}>
      <nav className="container mx-auto flex items-center justify-between py-3 md:py-4">
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Academix Hub"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-sm opacity-90 hover:opacity-100 transition-opacity"
          />
          <span className="text-2xl md:text-3xl font-bold text-navy">Academix Hub</span>
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-navy"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/missions" className={`nav-link ${isActive('/missions') ? 'nav-link--active' : ''}`}>{t.nav.missions}</Link>
          <Link to="/path" className={`nav-link ${isActive('/path') ? 'nav-link--active' : ''}`}>{t.nav.path}</Link>
          <Link to="/accomplishments" className={`nav-link ${isActive('/accomplishments') ? 'nav-link--active' : ''}`}>{t.nav.accomplishments}</Link>
          <Link to="/contacts" className={`nav-link ${isActive('/contacts') ? 'nav-link--active' : ''}`}>{t.nav.contacts}</Link>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile menu overlay - slides in from right */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-navy/50 backdrop-blur-sm z-[100] md:hidden animate-fade-in"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          
          {/* Slide-in menu */}
          <div 
            ref={menuRef}
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm shadow-2xl z-[110] md:hidden animate-slide-in-right"
            style={{ backgroundColor: '#F7F5EF', opacity: '1' }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full" style={{ backgroundColor: '#F7F5EF' }}>
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-navy/10" style={{ backgroundColor: '#F7F5EF' }}>
                <span className="text-xl font-bold text-navy">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md hover:bg-navy/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-navy" />
                </button>
              </div>
              
              {/* Navigation links */}
              <nav className="flex-1 p-6" style={{ backgroundColor: '#F7F5EF' }}>
                <div className="flex flex-col gap-4" style={{ backgroundColor: '#F7F5EF' }}>
                  <Link 
                    onClick={() => setOpen(false)} 
                    to="/missions" 
                    className={`text-lg font-semibold py-3 px-4 rounded-lg transition-all ${
                      isActive('/missions') 
                        ? 'bg-blue/10 text-blue' 
                        : 'text-navy hover:bg-navy/5'
                    }`}
                    tabIndex={0}
                  >
                    {t.nav.missions}
                  </Link>
                  <Link 
                    onClick={() => setOpen(false)} 
                    to="/path" 
                    className={`text-lg font-semibold py-3 px-4 rounded-lg transition-all ${
                      isActive('/path') 
                        ? 'bg-blue/10 text-blue' 
                        : 'text-navy hover:bg-navy/5'
                    }`}
                    tabIndex={0}
                  >
                    {t.nav.path}
                  </Link>
                  <Link 
                    onClick={() => setOpen(false)} 
                    to="/accomplishments" 
                    className={`text-lg font-semibold py-3 px-4 rounded-lg transition-all ${
                      isActive('/accomplishments') 
                        ? 'bg-blue/10 text-blue' 
                        : 'text-navy hover:bg-navy/5'
                    }`}
                    tabIndex={0}
                  >
                    {t.nav.accomplishments}
                  </Link>
                  <Link 
                    onClick={() => setOpen(false)} 
                    to="/contacts" 
                    className={`text-lg font-semibold py-3 px-4 rounded-lg transition-all ${
                      isActive('/contacts') 
                        ? 'bg-blue/10 text-blue' 
                        : 'text-navy hover:bg-navy/5'
                    }`}
                    tabIndex={0}
                  >
                    {t.nav.contacts}
                  </Link>
                  
                  {/* Language Switcher in Mobile Menu */}
                  <div className="mt-4 pt-4 border-t border-navy/10" style={{ backgroundColor: '#F7F5EF' }}>
                    <LanguageSwitcher />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  )
}


