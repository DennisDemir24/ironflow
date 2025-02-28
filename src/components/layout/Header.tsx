"use client"

import Link from "next/link"
import { useTranslation } from 'react-i18next'
import { ModeToggle } from "@/components/ui/mode-toggle"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { Logo } from "@/components/icons/logo"

const Header = () => {
  const { t } = useTranslation('common')

  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Logo className="w-8 h-8" />
          <span className="text-xl font-bold">IronFlow Solutions</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            {t('header.services')}
          </Link>
          <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
            {t('header.projects')}
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            {t('header.contact')}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            {t('header.contactUs')}
          </Link>
          <LanguageSwitcher />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
