import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  // Load saved language preference
  useEffect(() => {
    const saved = localStorage.getItem('academixhub_language')
    if (saved && (saved === 'en' || saved === 'ru')) {
      setLanguage(saved)
    }
  }, [])

  // Save language preference
  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('academixhub_language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

