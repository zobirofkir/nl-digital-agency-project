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
    <AppLayout headerTextColor="black" footerBgColor="white" footerTextColor="black">
      <Head title="Accueil" />      
      <section className='overflow-hidden'>

        <div>
            <SliderComponent />        
        </div>

        <div>
          <AboutComponent />
        </div>

        <div>
          <ServiceComponent bgColor="red" />
        </div>

        <div>
          <ProjectComponent bgColor="white" textColor="black" />
        </div>

        <div>
          <ContactComponent bgColor="white" textColor="black" />
        </div>

        <div>
          <SubscriptionComponent bgColor="white" textColor="black" />
        </div>
        
      </section>
    </AppLayout>
  )
}

export default WelcomePage