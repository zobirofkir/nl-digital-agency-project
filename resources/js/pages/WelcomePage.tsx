import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const WelcomePage = () => {
  return (
    <AppLayout>
      <Head title="Accueil" />
      <div>
        Welcome Page
      </div>
    </AppLayout>
  )
}

export default WelcomePage