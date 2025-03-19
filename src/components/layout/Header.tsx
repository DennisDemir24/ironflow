"use client"

import Link from "next/link"
import { useTranslation } from 'react-i18next'
import { ModeToggle } from "@/components/ui/mode-toggle"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { Logo } from "@/components/icons/logo"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const { t } = useTranslation('common')
  const [isClient, setIsClient] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Initial server-side rendering always shows English to match client
  const servicesText = isClient ? t('header.services') : "Services"
  const projectsText = isClient ? t('header.projects') : "Projects"
  const contactUsText = isClient ? t('header.contactUs') : "Contact Us"

  return (
    <>
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold">IronFlow Solutions</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              {servicesText}
            </Link>
            <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
              {projectsText}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              {contactUsText}
            </Link>
            <LanguageSwitcher />
            <ModeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-4">
            <LanguageSwitcher />
            <ModeToggle />
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="h-9 w-9 p-0" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
           onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={`fixed top-0 right-0 h-full w-[280px] bg-background border-l border-border shadow-lg transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            
            <nav className="flex-1 overflow-auto p-4">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/services" 
                    className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {servicesText}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projects" 
                    className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {projectsText}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {contactUsText}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
