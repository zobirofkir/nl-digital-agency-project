import SliderComponent from '@/components/SliderComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import HeaderComponent from '@/components/HeaderComponent'
import AboutComponent from '@/components/about/AboutComponent'
import FlushImage from '@/assets/abouts/about-flush.png'

const WelcomePage = () => {
  return (
    <AppLayout>
      <Head title="Accueil" />      
      <section>
          <SliderComponent />        
      </section>
      <section>

      </section>
      <section>
        <AboutComponent />
      </section>
    </AppLayout>
  )
}

export default WelcomePage