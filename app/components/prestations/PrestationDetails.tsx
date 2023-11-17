import { caprasimo, fabulous } from '@/app/fonts/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'

const getPrestation = async(id?: string) => {
  console.log("🚀 ~ file: PrestationDetails.tsx:8 ~ getPrestation ~ id:", id)
  try {
    const res = await fetch(`http://localhost:3000/api/prestations`).then(res => res.json())
    // let data = res.json()
    // console.log("🚀 ~ file: PrestationDetails.tsx:12 ~ getPrestation ~ data:", data)
    // return res.json()
    console.log("🚀 ~ file: PrestationDetails.tsx:11 ~ getPrestation ~ res:", res)
    const data = res.map((item: any) => {
       return {...item, id: item.title?.toLowerCase().normalize('NFD').replace(/\s+/g, '').replace(/\//, '').replace(/[\u0300-\u036f]/g, "")}
  })
    console.log("🚀 ~ file: PrestationDetails.tsx:18 ~ getPrestation ~ data:", data)
    const prestation = data.filter((item: any) => item.id === id)
    console.log("🚀 ~ file: PrestationDetails.tsx:20 ~ getPrestation ~ prestation:", prestation)
    return prestation[0]
  } catch (error) {
    // console.log("🚀 ~ file: PrestationDetails.tsx:12 ~ getPrestation ~ o:", error) 
  }
}

interface PrestationDetailsProps {
    id?: string
}

const PrestationDetails:React.FC<PrestationDetailsProps> = async({
    id
}) => {

  console.log(id);
  
  // const params = useParams()
    // console.log("🚀 ~ file: PrestationDetails.tsx:29 ~ params:", params)
    // const prestations = PrestationsList;
    const prestation = await getPrestation(id);
    console.log("🚀 ~ file: PrestationDetails.tsx:40 ~ prestations:", prestation)
    
    // const prestation = prestations.find((item) => item.id == id)

  return (
    <>
      {prestation && 
        <div className='px-4 mt-8 w-full max-w-4xl mx-auto'>
            <Image src={`${prestation.image}`} width={600} height={400} alt={`${prestation.title}`} className='w-full h-[200px] object-cover object-center rounded-2xl' />
            <h2 className={`${caprasimo.variable} font-subtitle text-4xl text-center py-8 text-primary-color uppercase font-semibold sm:text-5xl`}>{prestation.title}</h2>
            <p className='pb-8'>{prestation.description}</p>
            <p className='pb-1'><span className='font-semibold'>Durée : </span>{prestation.duration}</p>
            <p><span className='font-semibold'>Tarif : </span>{prestation.price}€</p>
            {prestation.secondaryPrice && 
            <p><span className='font-semibold'>Tarif : </span>{prestation.secondaryPrice}€</p>
            }
            <div className='flex justify-between py-8 w-full max-w-2xl mx-auto'>
                <Link href={'/'} className='px-4 py-2 min-w-[120px] text-center rounded-lg text-primary-color border-4 border-primary-color duration-200 hover:bg-transparent hover:text-primary-color'>Retour</Link>
                <a href="mailto:manon.verdier@hotmail.fr" className='px-4 py-2 bg-primary-color min-w-[120px] text-center rounded-lg text-white border-4 border-primary-color duration-200 hover:bg-primary-color-hover hover:border-primary-color-hover focus:bg-transparent focus:border-primary-color focus:text-primary-color'>Contacter</a>
            </div>
        </div>
      }
    </>
  )
}

export default PrestationDetails
