import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='border-t-4 border-primary-color w-full mt-20 pt-12'>
        <div className='w-full max-w-5xl mx-auto flex justify-center items-center gap-8'>
            <a href="https://www.instagram.com/manonverdier_pro/"><Image src={'/img/instagram.svg'} width={50} height={50} alt='Instagram' className='w-10 h-10' /></a>
            <a href="mailto:manon.verdier@hotmail.fr"><Image src={'/img/mail.svg'} width={50} height={50} alt='Mail' className='w-10 h-10' /></a>
        </div>
        <div className='relative w-full text-center text-sm bg-footer bg-cover bg-center mt-12 py-4 before:absolute before:bg-[rgb(0_0_0_/_20%)] before:w-full before:h-full before:top-0 before:left-0'>
          <p className='relative z-20 text-white text-stroke'>Réalisé avec 💜  par <a href="https://pimpmysite.fr" className='font-semibold'>PimpMySite</a> </p>
          <p className='relative z-20 text-white text-stroke font-light text-[10px] mt-1'>Images by <a href="https://www.freepik.com/">Freepik</a></p>
        </div>
    </footer>
  )
}

export default Footer
