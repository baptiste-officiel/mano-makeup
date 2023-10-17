'use client'

import { caprasimo } from '@/app/fonts/fonts'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        let data = {
            name,
            email,
            message
        }

        try {
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              }).then((res) => {
                // console.log('Response received')
                if (res.status === 200) {
                  // console.log('Response succeeded!')
                  setSubmitted(true)
                  toast.success('Le message a bien été envoyé !')
                  setName('')
                  setEmail('')
                  setMessage('')
                }
              })
        } catch (error) {
          toast.error('Votre message n\'a pas pu être envoyé')
            // console.log("🚀 ~ file: ContactForm.tsx:41 ~ handleSubmit ~ error:", error)
            
        }
        
    }

  return (
    <div className='w-full mx-auto lg:w-[65%]'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className={`${caprasimo.variable} font-subtitle text-primary-color outline-none px-2 py-1 border-4 border-primary-color bg-transparent rounded-lg placeholder-primary-color placeholder:text-sm placeholder:font-subtitle`} placeholder='Votre nom' required />
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${caprasimo.variable} font-subtitle text-primary-color outline-none px-2 py-1 border-4 border-primary-color bg-transparent rounded-lg placeholder-primary-color placeholder:text-sm placeholder:font-subtitle`} placeholder='Votre email' required />
        <textarea cols={4} rows={6} name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} className={`${caprasimo.variable} font-subtitle text-primary-color outline-none px-2 py-1 border-4 border-primary-color bg-transparent rounded-lg placeholder-primary-color placeholder:text-sm placeholder:font-subtitle`} placeholder='Votre message' required />
        <button type="submit" className={`${caprasimo.variable} font-subtitle border-4 border-primary-color bg-primary-color px-4 py-3 rounded-lg text-beige text-lg duration-200 hover:bg-transparent hover:text-primary-color`}>Envoyer</button>
      </form>
    </div>
  )
}

export default ContactForm
