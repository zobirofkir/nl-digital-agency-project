import SliderComponent from '@/components/SliderComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const WelcomePage = () => {
  return (
    <AppLayout>
      <Head title="Accueil" />

      <SliderComponent />
      
      <div>
        Welcome Page
      </div>
    </AppLayout>
  )
}

export default WelcomePage