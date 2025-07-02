import ProjectComponent from '@/components/projects/ProjectComponent'
import AppLayout from '@/layouts/app-layout'
import React from 'react'

const ProjectPage = () => {
  return (
    <AppLayout headerTextColor="white">
        <div>
            <ProjectComponent />
        </div>
    </AppLayout>
  )
}

export default ProjectPage