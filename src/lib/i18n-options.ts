export const defaultNS = 'common'
export const fallbackLng = 'en'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: process.env.NODE_ENV === 'development',
    supportedLngs: ['en', 'sv'],
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
} 