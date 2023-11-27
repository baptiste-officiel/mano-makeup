import { fabulous } from '@/app/fonts/fonts'
import React from 'react'
import Prestation from './Prestation';
import { getPrestations } from '@/app/utils/getPrestations';

export type PrestationType = {
  id: string;
  title: string;
  description: string;
  image?: string;
  duration?: string;
  price?: string;
  secondaryPrice?: string;
}

async function Prestations() {

  const prestations = await getPrestations();
  console.log("🚀 ~ file: Prestations.tsx:10 ~ Prestations ~ prestations:", prestations)

  return (
    <div className='mt-16 w-full max-w-6xl mx-auto px-4'>
      <h3 className={`${fabulous.variable} font-title text-5xl py-4 pb-10 text-center text-secondary-color [text-shadow:_-2px_-3px_0_rgb(195_29_39_/_100%)]`}>Prestations</h3>
      <div className='flex flex-col justify-center items-center md:flex-row md:gap-4 md:flex-wrap mx-auto'>
      {prestations && 
        prestations.map((item: PrestationType) => 
            <Prestation key={item.id} title={item.title} id={item.id} background={item.image} />
        )
      }
      </div>
    </div>
  )
}

export default Prestations
