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
    githubUrl: 'https://github.com/DennisDemir24/habiter-landing',
    client: 'Habiter App',
    challenge: 'We needed a marketing page for Habiter, a mobile application for creating better habits and track your progress.',
    solution: 'We used Next.js and TypeScript to build a marketing page for Habiter.',
  },
  {
    title: 'Habiter Mobile App',
    description: 'Habiter is a mobile application for creating better habits and track your progress.',
    tags: ['React-Native', 'Expo', 'TailwindCSS', 'SQL'],
    imageUrl: '/projects/habiter-app.png',
    demoUrl: '',
    githubUrl: 'https://github.com/DennisDemir24/habiter',
    client: 'Habiter App',
    challenge: 'I wanted a mobile app to help me create better habits and track my progress. I looked around for a application that could help me with that, but I couldn\'t find one that I liked. So thats when Habiter was born.',
    solution: 'I wanted to build a mobile app that helps me create better habits and track my progress. I built it using React-Native and Expo.',
  },
  {
    title: 'HobbyLink',
    description: 'HobbyLink is a platform that connects people with similar hobbies and interests, facilitating meaningful relationships through shared passions.',
    tags: ['NextJs', 'Supabase', 'TailwindCSS', 'PostgreSQL'],
    imageUrl: '/projects/hobby-link.png',
    demoUrl: '',
    githubUrl: 'https://github.com/DennisDemir24/hobby-link',
    client: 'HobbyLink',
    challenge: 'The vision is to create a vibrant community where people discover others who share their passions, form meaningful connections, and enrich their hobby experiences through collaborative learning and shared activities.',
    solution: 'We built a platform that allows users to discover others who share their passions, form meaningful connections, and enrich their hobby experiences through collaborative learning and shared activities.',
  },
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
            Discover how we&apos;ve helped businesses transform their digital presence and achieve remarkable results through innovative solutions
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