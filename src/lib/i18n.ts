'use client'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions } from './i18n-options'
import LanguageDetector from 'i18next-browser-languagedetector'

// Initialize with default locale 'en' always for server-side rendering
// This ensures consistent server/client initial render
i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../../public/locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions('en'), // Always use 'en' as default for initial render
    detection: {
      order: ['localStorage', 'htmlTag', 'cookie', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Language detector will be initialized on the client side only
if (typeof window !== 'undefined') {
  i18next.use(LanguageDetector);
}

export default i18next 