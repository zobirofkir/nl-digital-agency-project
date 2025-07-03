import AppLayout from '@/layouts/app-layout'
import BlogComponent from '@/components/blogs/BlogComponent'
import React from 'react'

const BlogPage = () => {
  return (
    <AppLayout headerTextColor='black'>
      <BlogComponent bgColor="white" textColor="black" />
    </AppLayout>
  )
}

export default BlogPage