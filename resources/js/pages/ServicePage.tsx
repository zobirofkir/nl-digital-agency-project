import ServiceComponent from '@/components/services/ServiceComponent'
import AppLayout from '@/layouts/app-layout'
import React from 'react'

const ServicePage = () => {
  return (
    <AppLayout headerTextColor="white">
      <div>
        <ServiceComponent bgColor="black" />
      </div>
    </AppLayout>
  )
}

export default ServicePage