"use client"

import { useEffect, useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ContactCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-200/20 via-indigo-300/10 to-transparent dark:from-indigo-900/10 dark:via-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-200/20 via-indigo-300/10 to-transparent dark:from-purple-900/10 dark:via-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}>
            <div className="inline-flex items-center justify-center p-2 bg-indigo-100 dark:bg-indigo-500/10 rounded-full mb-6">
              <div className="p-3 bg-indigo-600 dark:bg-indigo-500 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Sit back and let us do the work
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Focus on your business goals while our team of experts handles the technical challenges. 
              We&apos;ll transform your vision into reality with our comprehensive software solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium transition-colors shadow-lg hover:shadow-xl dark:shadow-none"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              {/* <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              >
                Explore Services
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 