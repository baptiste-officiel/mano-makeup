import { fabulous, montserrat } from '@/app/fonts/fonts'
import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

function Navbar() {
  return (
    <div className={`${montserrat.variable} font-main w-full border-b-4 border-primary-color`}>
        <nav className='relative w-full max-w-6xl mx-auto px-4 md:px-0 flex justify-between items-center py-4'>
            <Link href={'/'}><div className={`${fabulous.variable} font-title text-secondary-color border-4 px-4 py-2 rounded-md border-primary-color text-3xl uppercase`}>Mano</div></Link>
            <Menu />
        </nav>
    </div>
  )
}

export default Navbar
