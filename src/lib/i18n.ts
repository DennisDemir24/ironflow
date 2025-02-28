'use client'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions } from './i18n-options'
import LanguageDetector from 'i18next-browser-languagedetector'

// Get the stored language preference if available
let storedLanguage = 'en'
if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
  try {
    const savedLanguage = localStorage.getItem('i18nextLng')
    if (savedLanguage) {
      storedLanguage = savedLanguage
    }
  } catch (error) {
    console.error('Error accessing localStorage:', error)
  }
}

// Initialize i18next for client-side
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../../public/locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(storedLanguage),
    detection: {
      order: ['localStorage', 'htmlTag', 'cookie', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18next 