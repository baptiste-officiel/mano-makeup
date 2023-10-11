'use client'

import { PrestationsList } from '@/app/data/PrestationsList';
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  
  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }

  const prestations = PrestationsList

  return (
    <>
      <ul className='list-none text-primary-color font-medium hidden lg:flex'>
        <li className='px-2'><Link href={'/'}>Accueil</Link></li>
        {prestations &&
          prestations.map((item) => 
            <li key={item.id} className='px-2 border-l-2 border-primary-color'><Link href={`/prestation/${item.id}`}>{item.title}</Link></li>
          )
        }
      </ul>
      <div className='flex relative z-30 flex-col gap-1 cursor-pointer lg:hidden' onClick={handleClick}>
        <span className='w-8 h-1.5 bg-primary-color rounded-full'></span>
        <span className='w-8 h-1.5 bg-primary-color rounded-full'></span>
        <span className='w-8 h-1.5 bg-primary-color rounded-full'></span>
      </div>
      <div className={`${toggleMenu ? 'translate-x-0' : '-translate-x-[100%]'} overflow-x-hidden fixed top-0 left-0 w-full h-screen z-20 bg-secondary-color flex justify-center items-center transition`} onClick={handleClick}>
        <ul className='list-none gap-4 text-2xl flex flex-col text-center'>
          <li className='font-semibold'><Link href={'/'}>Accueil</Link></li>
          {prestations &&
          prestations.map((item) => 
            <li key={item.id} className='pt-4 font-semibold border-t-2 border-primary-color'><Link href={`/prestation/${item.id}`}>{item.title}</Link></li>
          )
        }        </ul>
      </div>
    </>
  )
}

export default Menu
