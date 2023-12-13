import { fabulous, montserrat } from '@/app/fonts/fonts'
import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'
import { getPrestations } from '@/app/utils/getPrestations'


async function Navbar() {

  const prestations = await getPrestations();
  // Select the first 3 elements of prestations to be sure navbar won't be too long 
  const prestationsFiltered = prestations.slice(0, 3);

  return (
    <div className={`${montserrat.variable} font-main w-full border-b-4 border-primary-color`}>
        <nav className='relative w-full max-w-6xl mx-auto px-4 xl:px-0 flex justify-between items-center py-4'>
            <Link href={'/'}><Image src={'/img/flower.png'} width={50} height={50} alt='Accueil' /></Link>
            <Menu prestations={prestationsFiltered} />
        </nav>
    </div>
  )
}

export default Navbar
