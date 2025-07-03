import ContactComponent from '@/components/contacts/ContactComponent'
import AppLayout from '@/layouts/app-layout'
import React from 'react'

const ContactPage = () => {
  return (
    <AppLayout headerTextColor='black'>
        <div>
          <ContactComponent bgColor="white" textColor="black" />
        </div>
    </AppLayout>
  )
}

export default ContactPage