"use client"

import { useTranslation } from 'react-i18next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe, Check } from "lucide-react"
import { useCallback, useState, useEffect } from 'react'
import i18n from '@/lib/i18n'
import { useRouter } from 'next/navigation'

export function LanguageSwitcher() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [isClient, setIsClient] = useState(false)
  
  // Use effect to handle client-side initialization
  useEffect(() => {
    setIsClient(true)
    setCurrentLanguage(i18n.language || 'en')
  }, [])
  
  const changeLanguage = useCallback((locale: string) => {
    // Change the i18next language
    i18n.changeLanguage(locale)
    setCurrentLanguage(locale)
    
    // Store the selected language in localStorage
    try {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem('i18nextLng', locale)
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
    
    // Force a refresh to update all components
    router.refresh()
  }, [router])

  // Only render full dropdown with language options on client
  if (!isClient) {
    return (
      <Button variant="ghost" className="flex items-center gap-1">
        <Globe className="h-[1.2rem] w-[1.2rem]" />
        <span className="text-xs font-medium uppercase">EN</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="text-xs font-medium uppercase">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className="flex items-center justify-between"
        >
          {t('languageSwitcher.en')}
          {currentLanguage === 'en' && <Check className="h-4 w-4 ml-2" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('sv')}
          className="flex items-center justify-between"
        >
          {t('languageSwitcher.sv')}
          {currentLanguage === 'sv' && <Check className="h-4 w-4 ml-2" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 