import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './contexts/LanguageContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
      <Analytics />
    </LanguageProvider>
  </React.StrictMode>
)


