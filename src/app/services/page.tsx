"use client";

import { Code2, Smartphone, Globe2 } from 'lucide-react'
import { useCallback } from 'react';

// Service data structure
const services = [
  {
    id: 'web-development',
    icon: Globe2,
    title: 'Web Applications',
    description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
    longDescription: 'Our web development team creates powerful, scalable applications that work flawlessly across all devices and browsers. We leverage the latest frameworks and technologies to deliver fast, secure, and user-friendly web experiences.',
    features: [
      'Progressive Web Apps',
      'Single Page Applications',
      'Admin Dashboards',
      'E-commerce Solutions',
      'Content Management Systems',
      'Performance Optimization'
    ]
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.',
    longDescription: 'We build beautiful, intuitive mobile applications that engage users and drive business growth. Our mobile development expertise spans both native and cross-platform solutions, ensuring your app performs flawlessly on any device.',
    features: [
      'iOS & Android Development',
      'Cross-platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
      'Mobile-first Design',
      'Offline Functionality'
    ]
  },
  {
    id: 'custom-software',
    icon: Code2,
    title: 'Custom Software',
    description: 'Tailored software solutions designed and built from the ground up to address your unique business challenges.',
    longDescription: 'When off-the-shelf solutions aren&apos;t enough, our team creates custom software tailored to your specific business needs. We follow a collaborative approach to understand your requirements and deliver solutions that drive efficiency and growth.',
    features: [
      'Enterprise Software Solutions',
      'API Development & Integration',
      'Legacy System Modernization',
      'Workflow Automation',
      'Scalable Architecture',
      'Software Integrations'
    ]
  },
];

export default function ServicesPage() {
  // Smooth scroll function
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <div className="min-h-screen py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900 dark:text-white">Our Services</h1>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            We deliver comprehensive software solutions tailored to your business needs, 
            combining technical excellence with innovative approaches
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/30 transition hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 shadow-sm hover:shadow-md dark:shadow-none"
            >
              <div className="p-8">
                <div className="mb-6 inline-block p-4 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl">
                  <service.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                <button 
                  onClick={() => scrollToSection(service.id)}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  <span className="mr-2">Learn more</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Sections */}
        {services.map((service) => (
          <section 
            id={service.id} 
            key={service.id} 
            className="py-16 border-t border-gray-200 dark:border-gray-800 max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 inline-block p-4 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl">
                  <service.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">{service.longDescription}</p>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What we offer:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-gray-200 dark:border-gray-800 h-full flex items-center justify-center shadow-sm dark:shadow-none">
                <div className="text-center">
                  <service.icon className="h-24 w-24 text-indigo-500 dark:text-indigo-400 mx-auto mb-6 opacity-75" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Ready to get started?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Let&apos;s discuss how our {service.title.toLowerCase()} services can help your business.</p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to transform your business?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you achieve your digital goals. 
            Let&apos;s work together to create solutions that drive your business forward.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
