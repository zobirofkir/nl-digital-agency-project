import AppLayout from '@/layouts/app-layout'
import BlogComponent from '@/components/blogs/BlogComponent'
import React from 'react'

interface BlogPageProps {
  blogs: Array<{
    id: number
    title: string
    excerpt: string
    featured_image: string
    author: string
    date: string
    category: string
    slug: string
  }>
}

const BlogPage = ({ blogs }: BlogPageProps) => {
  return (
    <AppLayout headerTextColor='black'>
      <BlogComponent bgColor="white" textColor="black" blogs={blogs} />
    </AppLayout>
  )
}

export default BlogPage