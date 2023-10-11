import React from 'react'
import { caprasimo, fabulous } from '../../fonts/fonts'
import Image from 'next/image'

function AboutSection() {
  return (
    <div className='w-full max-w-6xl mx-auto py-8 flex flex-wrap justify-between md:items-start lg:items-center'>
      <div className='w-full'>
        <h1 className={`${fabulous.variable} font-title text-secondary-color text-7xl sm:text-8xl text-center [text-shadow:_0_5px_0_rgb(195_29_39_/_100%)]`}>Manon Verdier</h1>
        <h2 className={`${caprasimo.variable} font-subtitle text-stroke text-3xl mt-2 text-center sm:text-4xl sm:mt-4`}>Makeup artist</h2>
      </div>
      <div className='relative mt-12 w-full md:w-[45%]'>
      <Image src={'/img/mano.png'} width={600} height={750} alt='Manon' className='w-full px-8 mt-14' />
      <Image src={'/img/flower.png'} width={100} height={100} alt='Flower' className='absolute top-0 right-0' />
      </div>
      <div className='w-full bg-about bg-center bg-cover px-4 py-12 mt-24 md:w-[45%] md:mt-12'>
        <div className='w-full bg-fake-transparent p-4 rounded-2xl'>
            <h3 className={`${fabulous.variable} font-title text-5xl py-4 pb-10 text-secondary-color [text-shadow:_2px_3px_0_rgb(195_29_39_/_100%)]`}>Qui-suis je ?</h3>
            <p className='font-medium'>Maquilleuse lilloise agée de 23 ans, je suis passionnée de mode.
            Plus spécialisée dans les maquillages artistique et mode, je suis tout autant qualifiée pour des mises en beauté plus nude, des maquillages de cinéma et de photo.
            </p><br />
            <p className='font-medium'>J&apos;ai effectué de nombreux stages à l&apos;Opéra de Bordeaux grâce à ma formation chez Annie Lay MakeupSchool, j&apos;ai aussi travaillé pour la Fondation Bergonié sur une publicité contre le cancer; et maquillé pour quelques shootings, notamment pour l&apos;élection de Miss Biganos 2020.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
