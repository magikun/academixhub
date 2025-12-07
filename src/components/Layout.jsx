import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Announcement from './Announcement'
import StickySubheader from './StickySubheader'
import { useLanguage } from '../contexts/LanguageContext'

export default function Layout() {
  const location = useLocation()
  const { language } = useLanguage()

  // Instantly scroll to top when route changes - no animations
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Add language class to body element for font switching
  useEffect(() => {
    document.body.className = document.body.className.replace(/lang-\w+/g, '').trim()
    document.body.classList.add(`lang-${language}`)
  }, [language])

  return (
    <div id="top">
      <Announcement />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickySubheader />
    </div>
  )
}

