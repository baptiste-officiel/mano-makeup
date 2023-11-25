import { fabulous, montserrat } from '@/app/fonts/fonts'
import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'

const getPrestations = async() => {
  try {
    const res = await fetch('http://localhost:3000/api/prestations')
    return res.json()
  } catch (error) {
    console.log("🚀 ~ file: Prestations.tsx:15 ~ getPrestations ~ error:", error)
  }
}

async function Navbar() {

  const prestations = await getPrestations();

  return (
    <div className={`${montserrat.variable} font-main w-full border-b-4 border-primary-color`}>
        <nav className='relative w-full max-w-6xl mx-auto px-4 xl:px-0 flex justify-between items-center py-4'>
            <Link href={'/'}><Image src={'/img/flower.png'} width={50} height={50} alt='Accueil' /></Link>
            <Menu prestations={prestations} />
        </nav>
    </div>
  )
}

export default Navbar
