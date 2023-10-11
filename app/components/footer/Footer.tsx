import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='border-t-4 border-primary-color w-full mt-20 py-12'>
        <div className='w-full max-w-5xl mx-auto flex justify-center items-center gap-8'>
            <a href="https://www.instagram.com/manonverdier_pro/"><Image src={'/img/instagram.svg'} width={50} height={50} alt='Instagram' className='w-10 h-10' /></a>
            <a href="mailto:manon.verdier@hotmail.fr"><Image src={'/img/mail.svg'} width={50} height={50} alt='Mail' className='w-10 h-10' /></a>
        </div>
    </footer>
  )
}

export default Footer
