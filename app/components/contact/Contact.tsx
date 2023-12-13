import { fabulous } from '@/app/fonts/fonts'
import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <section id='contact' className='my-16 w-full max-w-6xl mx-auto px-4'>
      <h3 className={`${fabulous.variable} font-title text-5xl py-4 pb-10 text-center text-secondary-color [text-shadow:_-2px_2px_0_rgb(195_29_39_/_100%)]`}>Contact</h3>
      <ContactForm />
    </section>
  )
}

export default Contact
