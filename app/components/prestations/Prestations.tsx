import { fabulous } from '@/app/fonts/fonts'
import React from 'react'
import Prestation from './Prestation';

const getPrestations = async() => {
  try {
    const res = await fetch('http://localhost:3000/api/prestations')
    return res.json()
  } catch (error) {
    console.log("🚀 ~ file: Prestations.tsx:15 ~ getPrestations ~ error:", error)
  }
}

async function Prestations() {

  // getPrestations();
    const prestations = await getPrestations();
    // console.log("🚀 ~ file: Prestations.tsx:19 ~ Prestations ~ prestations:", prestations)

  return (
    <div className='mt-16 w-full max-w-6xl mx-auto px-4'>
      <h3 className={`${fabulous.variable} font-title text-5xl py-4 pb-10 text-center text-secondary-color [text-shadow:_-2px_-3px_0_rgb(195_29_39_/_100%)]`}>Prestations</h3>
      <div className='flex flex-col justify-center items-center md:flex-row md:gap-4 md:flex-wrap mx-auto'>
      {prestations && 
        prestations.map((item: any) => 
            <Prestation key={item.id} title={item.title} id={item.id} buttonLabel={item.buttonLabel} background={item.image} />
        )
      }
      </div>
    </div>
  )
}

export default Prestations
