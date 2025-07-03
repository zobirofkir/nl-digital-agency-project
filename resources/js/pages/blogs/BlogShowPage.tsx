import AppLayout from '@/layouts/app-layout'
import BlogShowComponent from '@/components/blogs/BlogShowComponent'
import React from 'react'

const BlogShowPage = ({ id }: { id: string }) => {
  return (
      <BlogShowComponent id={id} />
  )
}

export default BlogShowPage