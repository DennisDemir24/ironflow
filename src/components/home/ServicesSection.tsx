"use client"

import { Monitor, Smartphone, Code } from 'lucide-react'
import { useEffect, useState } from 'react'

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your unique business needs. We create scalable, secure, and efficient software that drives your business forward.',
    icon: Code,
    features: [
      'Enterprise Software Solutions',
      'Cloud-Native Applications',
      'API Development & Integration',
      'Legacy System Modernization'
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices and platforms.',
    icon: Smartphone,
    features: [
      'iOS & Android Development',
      'Cross-Platform Solutions',
      'UI/UX Design',
      'App Store Optimization'
    ]
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies. We create engaging digital experiences that convert visitors into customers.',
    icon: Monitor,
    features: [
      'Full-Stack Development',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Performance Optimization'
    ]
  }
]

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container px-4 mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Services</h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We deliver comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            const isMiddleCard = index === 1

            return (
              <div
                key={service.title}
                className={`group relative rounded-xl overflow-hidden 
                          border border-gray-200 dark:border-gray-800 
                          bg-white dark:bg-gray-900/30 
                          shadow-sm hover:shadow-md dark:shadow-none
                          transition hover:bg-gray-50 dark:hover:bg-gray-800/50 
                          hover:border-gray-300 dark:hover:border-gray-700
                          ${isMiddleCard ? 'lg:-mt-8' : ''}`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="p-8">
                  {/* Icon container */}
                  <div className="mb-6 inline-block p-4 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
