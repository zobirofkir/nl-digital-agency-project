import ServiceComponent from '@/components/services/ServiceComponent'
import AppLayout from '@/layouts/app-layout'
import React from 'react'

const ServicePage = () => {
  return (
    <AppLayout headerTextColor="black">
      <div className="bg-white">
        <ServiceComponent bgColor="white" />
      </div>
    </AppLayout>
  )
}

export default ServicePage