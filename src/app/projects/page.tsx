"use client"

import { useEffect, useState } from 'react'
import ProjectCard from '@/components/projects/ProjectCard'

const projects = [
  {
    title: 'Marketing Page for Habiter',
    description: 'Marketing page for Habiter, a mobile application for creating better habits and track your progress.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    imageUrl: '/projects/habiter.png',
    demoUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    client: 'Habiter App',
    industry: 'Retail & Fashion',
    timeline: '6 months',
    teamSize: '8 developers',
    challenge: 'FashionRetail Co. was struggling with an outdated e-commerce platform that couldn\'t handle their growing customer base. They faced frequent site crashes during peak sales, poor mobile experience, and low conversion rates due to generic product recommendations.',
    solution: 'We developed a modern e-commerce platform using Next.js and TypeScript, implementing AI-powered product recommendations, real-time inventory management, and a responsive design. The solution included advanced analytics, A/B testing capabilities, and seamless integration with their existing ERP system.',
    results: [
      '300% increase in mobile conversion rate',
      '50% reduction in server costs through optimized architecture',
      '99.99% uptime during Black Friday sale with 2M+ concurrent users',
      '40% increase in average order value through AI recommendations',
      'Reduced page load time from 4.2s to 0.8s'
    ]
  },
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Enterprise-scale analytics solution with predictive insights and real-time monitoring',
    tags: ['React', 'Python', 'TensorFlow', 'D3.js', 'GCP'],
    imageUrl: '/projects/analytics.jpg',
    demoUrl: 'https://demo-analytics.example.com',
    githubUrl: 'https://github.com/example/analytics',
    client: 'DataCorp Industries',
    industry: 'Business Intelligence',
    timeline: '9 months',
    teamSize: '12 developers',
    challenge: 'DataCorp needed to process and analyze massive amounts of data from multiple sources in real-time. Their existing solution was slow, prone to errors, and couldn\'t provide actionable insights quickly enough for their clients.',
    solution: 'We built a scalable analytics platform using React and Python, incorporating machine learning models for predictive analytics. The solution features real-time data processing, interactive visualizations, and automated report generation with natural language insights.',
    results: [
      'Reduced data processing time by 90%',
      'Achieved 95% accuracy in predictive analytics',
      'Automated 75% of routine analysis tasks',
      'Integrated 50+ data sources in real-time',
      'Saved clients an average of 20 hours per week in manual analysis'
    ]
  },
  {
    title: 'FinTech Mobile Banking Platform',
    description: 'Secure and intuitive mobile banking solution with advanced features',
    tags: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    imageUrl: '/projects/banking.jpg',
    demoUrl: 'https://demo-banking.example.com',
    githubUrl: 'https://github.com/example/banking',
    client: 'NextGen Bank',
    industry: 'Financial Services',
    timeline: '12 months',
    teamSize: '15 developers',
    challenge: 'NextGen Bank wanted to transform their traditional banking services into a digital-first experience. They needed a secure, scalable mobile platform that could handle millions of transactions while providing a seamless user experience.',
    solution: 'We developed a comprehensive mobile banking platform using React Native, implementing biometric authentication, real-time transaction processing, and AI-powered fraud detection. The solution includes features like peer-to-peer payments, investment tracking, and personalized financial insights.',
    results: [
      'Achieved 4.8/5 rating on app stores',
      'Processed $2B+ in transactions in first year',
      'Reduced fraud incidents by 75%',
      '2M+ active users within 6 months',
      'Cut transaction processing time to under 1 second'
    ]
  }
]

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Case Studies
          </h1>
          <p 
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Discover how we've helped businesses transform their digital presence and achieve remarkable results through innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}