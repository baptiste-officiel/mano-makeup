'use client'

import React, { useState } from 'react'

function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        alert('handleSubmit')

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
                console.log('Response received')
                if (res.status === 200) {
                  console.log('Response succeeded!')
                  setSubmitted(true)
                  setName('')
                  setEmail('')
                  setMessage('')
                }
              })
        } catch (error) {
            console.log("🚀 ~ file: ContactForm.tsx:41 ~ handleSubmit ~ error:", error)
            
        }
        
    }

  return (
    <div className='w-full lg:w-[45%]'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default ContactForm
