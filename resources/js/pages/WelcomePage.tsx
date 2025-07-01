import SliderComponent from '@/components/SliderComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import AboutComponent from '@/components/about/AboutComponent'
import ServiceComponent from '@/components/services/ServiceComponent'
import ProjectComponent from '@/components/projects/ProjectComponent'
import ContactComponent from '@/components/contacts/ContactComponent'
import SubscriptionComponent from '@/components/subscriptions/SubscriptionComponent'

const WelcomePage = () => {
  return (
    <AppLayout>
      <Head title="Accueil" />      
      <section className='overflow-hidden'>

        <div>
            <SliderComponent />        
        </div>

        <div>
          <AboutComponent />
        </div>

        <div>
          <ServiceComponent />
        </div>

        <div>
          <ProjectComponent />
        </div>

        <div>
          <ContactComponent />
        </div>

        <div>
          <SubscriptionComponent />
        </div>
      </section>
    </AppLayout>
  )
}

export default WelcomePage