import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Announcement from './Announcement'
import StickySubheader from './StickySubheader'
import { useLanguage } from '../contexts/LanguageContext'

export default function Layout() {
  const location = useLocation()
  const { language } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)

  // Instantly scroll to top when route changes - no animations
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Add language class to body element for font switching
  useEffect(() => {
    document.body.className = document.body.className.replace(/lang-\w+/g, '').trim()
    document.body.classList.add(`lang-${language}`)
  }, [language])

  // Wait for critical assets to finish loading (window load) before showing content
  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoaded(true)
      return
    }
    const handleLoad = () => setIsLoaded(true)
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <div id="top" aria-busy={!isLoaded}>
      {!isLoaded && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-offwhite">
          <div className="h-12 w-12 rounded-full border-4 border-blue/20 border-t-blue animate-spin" aria-label="Loading" />
        </div>
      )}
      <Announcement />
      <Navbar />
      <main className={isLoaded ? '' : 'opacity-0'}>
        <Outlet />
      </main>
      <Footer />
      <StickySubheader />
    </div>
  )
}

