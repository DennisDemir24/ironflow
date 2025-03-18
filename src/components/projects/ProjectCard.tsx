"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, ChevronDown } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl?: string
  githubUrl?: string
  challenge: string
  solution: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  githubUrl,
  challenge,
  solution,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="bg-background rounded-lg border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300">
      <div
        className="relative aspect-[16/9] overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
        
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {demoUrl && (
            <Link
              href={demoUrl}
              className="group bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300"
              target="_blank"
            >
              Live Demo
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:scale-125" />
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              className="group bg-background/90 text-foreground px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300"
              target="_blank"
            >
              GitHub
              <Github className="w-4 h-4 transition-transform duration-300 group-hover:scale-125 group-hover:text-primary" />
            </Link>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 p-2 hover:bg-accent rounded-full transition-colors hover:text-primary"
            aria-label={isExpanded ? "Show less" : "Show more"}
          >
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`grid gap-6 overflow-hidden transition-all duration-500 ${
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}>
          <div className="overflow-hidden">
            <div className="grid gap-6 pt-4 border-t">

              <div>
                <h4 className="font-semibold mb-2">The Challenge</h4>
                <p className="text-muted-foreground">{challenge}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Our Solution</h4>
                <p className="text-muted-foreground">{solution}</p>
              </div>

              {/* Add a github logo */}
              {githubUrl && (
                <Link
                  href={githubUrl}
                  className="group bg-background/90 text-foreground px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300"
                  target="_blank"
                >
                  <Github className="w-4 h-4 transition-transform duration-300 group-hover:scale-125 group-hover:text-primary" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
