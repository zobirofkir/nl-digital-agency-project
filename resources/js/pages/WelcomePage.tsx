import SliderComponent from '@/components/SliderComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import AboutComponent from '@/components/about/AboutComponent'
import ServiceComponent from '@/components/services/ServiceComponent'

const WelcomePage = () => {
  return (
    <AppLayout>
      <Head title="Accueil" />      
      <section className='overflow-hidden'>

        <div>
            <SliderComponent />        
        </div>

        <div>
          <ServiceComponent />
        </div>

        <div>
          <AboutComponent />
        </div>

      </section>
    </AppLayout>
  )
}

export default WelcomePage