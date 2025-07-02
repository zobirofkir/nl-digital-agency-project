import AppLayout from '@/layouts/app-layout'
import BlogShowComponent from '@/components/blogs/BlogShowComponent'
import React from 'react'

const BlogShowPage = ({ id }: { id: string }) => {
  return (
    <AppLayout headerTextColor='white'>
      <BlogShowComponent id={id} />
    </AppLayout>
  )
}

export default BlogShowPage