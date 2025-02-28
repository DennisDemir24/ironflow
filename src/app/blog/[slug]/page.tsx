import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

// Use the imported blog data instead of mock data
const getPost = (slug: string) => {
  return blogPosts.find(post => post.slug === slug)
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  
  if (!post) return notFound()

  return (
    <article className="min-h-screen py-24">
      <div className="container px-4 mx-auto max-w-3xl">
        <Link 
          href="/blog" 
          className="mb-12 inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        
        <header className="mb-16 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <time className="text-sm">{post.date}</time>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          {post.content}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>
        </div>
      </div>
    </article>
  )
} 