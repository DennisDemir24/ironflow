"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Logo } from "@/components/icons/logo"

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Logo className="w-8 h-8" />
          <span className="text-xl font-bold">IronFlow Solutions</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
            Projects
          </Link>
   {/*        <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link> */}
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Contact Us
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
