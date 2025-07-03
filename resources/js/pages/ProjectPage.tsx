import ProjectComponent from '@/components/projects/ProjectComponent'
import AppLayout from '@/layouts/app-layout'
import React from 'react'

const ProjectPage = () => {
  return (
    <AppLayout headerTextColor="white">
        <div>
            <ProjectComponent bgColor="white" textColor="black" />
        </div>
    </AppLayout>
  )
}

export default ProjectPage