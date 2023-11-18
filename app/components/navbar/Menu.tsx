'use client'

import { caprasimo } from '@/app/fonts/fonts';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const Menu = ({prestations}: any) => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const pathName = usePathname();
  
  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }

  // console.log('prestaMenu :', prestations);
  
  // const prestations = PrestationsList

  return (
    <>
      <ul className={`${caprasimo.variable} font-subtitle list-none text-primary-color font-medium hidden lg:flex`}>
        <li className='px-2 duration-200 hover:text-secondary-color' ><Link href={'/'} className={`${pathName === '/' ? 'text-secondary-color' : 'text-primary-color'} duration-200 hover:text-secondary-color `}>Accueil</Link></li>
        {prestations &&
          prestations.map((item: any) => 
            <li key={item.id} className='px-2 border-l-2 border-primary-color'><Link href={`/prestation/${item.id}`} className={`${pathName === `/prestation/${item.id}` ? 'text-secondary-color' : 'text-primary-color'} duration-200 hover:text-secondary-color`}>{item.title}</Link></li>
          )
        }
      </ul>
      <div className='flex relative z-30 flex-col gap-1 cursor-pointer lg:hidden' onClick={handleClick}>
        <span className='w-8 h-1.5 bg-primary-color rounded-full'></span>
        <span className='w-8 h-1.5 bg-primary-color rounded-full'></span>
        <span className='w-8 h-1.5 bg-primary-color rounded-full'></span>
      </div>
      <div className={`${toggleMenu ? 'translate-x-0' : '-translate-x-[100%]'} overflow-x-hidden fixed top-0 left-0 w-full h-screen z-20 bg-secondary-color flex justify-center items-center transition duration-500`} onClick={handleClick}>
        <ul className={`${caprasimo.variable} font-subtitle list-none gap-4 text-2xl flex flex-col text-center text-beige`}>
          <li className=''><Link href={'/'}>Accueil</Link></li>
          {prestations &&
          prestations.map((item: any) => 
            <li key={item.id} className='pt-4 border-t-4 border-primary-color'><Link href={`/prestation/${item.id}`}>{item.title}</Link></li>
          )
        }
        </ul>
      </div>
    </>
  )
}

export default Menu
