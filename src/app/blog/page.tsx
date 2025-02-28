import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

export default function BlogPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Blog</h1>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
            Discover the latest trends in software development and case studies from our projects
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block"
            >
              <article className="group rounded-xl overflow-hidden border border-gray-800 bg-gray-900/30 transition hover:bg-gray-800/50 hover:border-gray-700">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{post.title}</h2>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <time className="text-sm">{post.date}</time>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    <span className="mr-2">Read article</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 