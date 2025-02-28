"use client"

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Facebook, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react'

const companyInfo = {
  name: 'IronFlow Solutions',
  description: 'We craft innovative digital solutions that empower businesses to thrive in the modern world.',
  address: '123 Tech Street, San Francisco, CA 94105',
  email: 'contact@ironflow.dev',
  phone: '+1 (555) 123-4567'
}

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

const services = [
  { name: 'Custom Software Development', href: '/services#custom-software' },
  { name: 'Mobile App Development', href: '/services#mobile-app' },
  { name: 'Web Development', href: '/services#web-development' }
]

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'GitHub', icon: Github, href: 'https://github.com' }
]

export default function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-accent/5 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{companyInfo.name}</h3>
            <p className="text-muted-foreground text-sm">{companyInfo.description}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {companyInfo.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-primary transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-primary transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background border hover:bg-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
