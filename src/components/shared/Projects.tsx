import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A scalable e-commerce solution with AI-powered recommendations',
    image: '/placeholders/ecommerce-project.jpg',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'FinTech Dashboard',
    description: 'Real-time financial analytics and reporting platform',
    image: '/placeholders/fintech-project.jpg',
    tech: ['Vue.js', 'Python', 'PostgreSQL'],
  },
  {
    title: 'Healthcare App',
    description: 'Telemedicine platform with secure video consultations',
    image: '/placeholders/healthcare-project.jpg',
    tech: ['React Native', 'AWS', 'GraphQL'],
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-400">
            Discover how we&apos;ve helped businesses transform their digital presence
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-xl transition hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="relative p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3 text-white transition hover:bg-indigo-700"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}