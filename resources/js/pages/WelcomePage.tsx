import { lazy, Suspense } from 'react'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'

// Lazy load heavy components
const SliderComponent = lazy(() => import('@/components/SliderComponent'))
const AboutComponent = lazy(() => import('@/components/about/AboutComponent'))
const ServiceComponent = lazy(() => import('@/components/services/ServiceComponent'))
const ProjectComponent = lazy(() => import('@/components/projects/ProjectComponent'))
const ContactComponent = lazy(() => import('@/components/contacts/ContactComponent'))
const SubscriptionComponent = lazy(() => import('@/components/subscriptions/SubscriptionComponent'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
  </div>
)

const WelcomePage = () => {
  return (
    <AppLayout headerTextColor="black" footerBgColor="white" footerTextColor="black">
      <Head title="Accueil" />      
      <section className='overflow-hidden'>

        <Suspense fallback={<LoadingSpinner />}>
          <SliderComponent />        
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <AboutComponent />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ServiceComponent bgColor="red" />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ProjectComponent bgColor="white" textColor="black" />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ContactComponent bgColor="white" textColor="black" />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <SubscriptionComponent bgColor="white" textColor="black" />
        </Suspense>
        
      </section>
    </AppLayout>
  )
}

export default WelcomePage