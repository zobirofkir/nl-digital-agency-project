import React from 'react'
import BlogShowComponent from '@/components/blogs/BlogShowComponent'
import AppLayout from '@/layouts/app-layout'

interface BlogShowPageProps {
  blog: {
    id: number
    title: string
    slug: string
    excerpt: string
    content: string
    featured_image: string
    author: string
    date: string
    category: string
    meta_title?: string
    meta_description?: string
    published_at: string
  }
}

const BlogShowPage = ({ blog }: BlogShowPageProps) => {
  return (
    <AppLayout 
      headerTextColor='black'
      title={blog.meta_title || blog.title}
      description={blog.meta_description || blog.excerpt}
    >
      <BlogShowComponent blog={blog} bgColor="white" textColor="black" />
    </AppLayout>
  )
}

export default BlogShowPage