"use client"

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/components/icons/logo'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full bg-gradient-to-br dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-gray-900 from-indigo-100/50 via-purple-100/30 to-white" />
      
      {/* Background logo */}
      <div className="absolute inset-0 w-full flex items-center justify-center opacity-[0.03] pointer-events-none">
        <Logo className="w-[800px] h-[800px]" />
      </div>

      {/* Content */}
      <div className="relative w-full px-4 pt-16 md:pt-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Transforming Ideas into{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Digital Excellence</span>
          </h1>
          
          <p 
            className={`text-xl text-gray-700 dark:text-gray-400 mb-8 transition-all duration-700 delay-200 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            We craft innovative software solutions that empower businesses to thrive in the digital age. From custom applications to mobile development, we turn your vision into reality.
          </p>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br dark:from-indigo-900/10 dark:via-indigo-500/5 from-indigo-200/20 via-indigo-300/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr dark:from-purple-900/10 dark:via-indigo-500/5 from-purple-200/20 via-indigo-300/10 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  )
}
