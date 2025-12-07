import { en } from './en'
import { ru } from './ru'

export const translations = {
  en,
  ru
}

export const getTranslation = (lang) => {
  return translations[lang] || translations.en
}

