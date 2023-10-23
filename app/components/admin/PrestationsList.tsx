'use client'

import React, { useState } from 'react'
import Modal from '../modal/Modal'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'                          
import { useRouter } from 'next/navigation'

type Prestation = {
  id?: string,
  title?: string,
  description?: string,
  duration?: string,
  price?: string,
  image?: string,
  secondaryPrice?: string,
}

const PrestationsList = ({prestations}: any) => {

  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [duration, setDuration] = useState('')
  const [price, setPrice] = useState('')
  const [secondaryPrice, setSecondaryPrice] = useState('')
  const [prestationId, setPrestationId] = useState('')
  const [prestation, setPrestation] = useState<Prestation>({})
  console.log("🚀 ~ file: PrestationsList.tsx:16 ~ PrestationsList ~ prestation:", prestation)
  console.log("🚀 ~ file: PrestationsList.tsx:15 ~ PrestationsList ~ prestationId:", prestationId)

  const [modal, setModal] = useState(false)
  const [onEdit, setOnEdit] = useState(false)

  const getPrestation = async(id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/prestations/${id}`)
      const data = await res.json()
      setPrestation(data)
    } catch (error) {
      console.log("🚀 ~ file: PrestationsList.tsx:24 ~ getPrestation ~ error:", error)
    }
  }

  const toggleModal = async(id?: string) => {
    console.log(id)
    if (id) {
      setPrestationId(id)
      await getPrestation(id)
      setModal(!modal)
      } else {
        setPrestationId('')
        setPrestation({})
        setModal(false)
      }
  }

  const handleDelete = async(id?: string) => {
    console.log(id);
    
    try {
      fetch(`http://localhost:3000/api/prestations/${id}`, {
          method: 'DELETE',
          cache: 'no-store'
      },
      ).then(res => res.json())
      .finally(() => {
        setModal(false)
        setPrestation({})
        setPrestationId('')
        router.refresh()
      })
    } catch (error) {
        console.log("🚀 ~ file: PostsList.tsx:20 ~ handleDelete ~ error:", error)
    }
    
  }

  const handleEdit = async(e: any) => {
    // console.log(id);
    
  }

  return (
    <>
      <div className='w-full px-4 py-6 flex flex-col gap-4'>
        {prestations && 
          prestations.map((item: any) => 
          <div key={item.id} className={`relative w-full py-16 flex flex-col justify-between items-center gap-8 border-4 rounded-3xl border-primary-color bg-cover bg-center before:absolute before:bg-[rgb(0_0_0_/_20%)] before:w-full before:h-full before:top-0 before:left-0 before:rounded-3xl cursor-pointer hover:shadow-xl`} style={{backgroundImage: `url(${item.image})`}} onClick={() => toggleModal(item.id)}>
              <h4 className={`relative text-white text-xl font-extrabold uppercase text-center text-stroke z-20`}>{item.title}</h4>
          </div>
          )
        }
      </div>

      {modal && 
        <Modal>
          <span className='absolute top-4 right-4 text-3xl cursor-pointer px-2' onClick={() => toggleModal()}>&times;</span>
          {prestation && 
            <div className='relative flex flex-col gap-4 mt-8 py-4 '>

              <div className='absolute top-4 right-10 p-1 cursor-pointer' onClick={() => handleDelete(prestation.id)}><BsTrash /></div>
              <div className='absolute top-4 right-4 p-1 cursor-pointer' onClick={() => setOnEdit(!onEdit)}><AiOutlineEdit /></div>

              {onEdit ? 
                <>
                  <form onSubmit={(e) => handleEdit(e)} className='w-full flex flex-col items-center gap-2 my-8'>
                    <input type="text" value={title} className='border-2 border-primary-color rounded-md w-full max-w-[300px] mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Titre' onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={description} className='border-2 border-primary-color rounded-md w-full max-w-[300px] mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" value={image} className='border-2 border-primary-color rounded-md w-full max-w-[300px] mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Image' onChange={(e) => setImage(e.target.value)} />
                    <input type="text" value={duration} className='border-2 border-primary-color rounded-md w-full max-w-[300px] mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Durée' onChange={(e) => setDuration(e.target.value)} />
                    <input type="text" value={price} className='border-2 border-primary-color rounded-md w-full max-w-[300px] mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Prix' onChange={(e) => setPrice(e.target.value)} />
                    <input type="text" value={secondaryPrice} className='border-2 border-primary-color rounded-md w-full max-w-[300px] mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Prix secondaire' onChange={(e) => setSecondaryPrice(e.target.value)} />
                    <button type="submit" className='px-4 py-2 bg-primary-color rounded text-beige mt-2 duration-300 hover:bg-primary-color-hover'>Publier</button>
                </form>
                </> : 
                <>
                  <h1 className='text-2xl'>{prestation.title}</h1>
                  <p>{prestation.description}</p>
                  <p><span className='font-semibold'>Durée : </span>{prestation.duration}</p>
                  <p><span className='font-semibold'>Prix : </span>{prestation.price}</p>
                  <p><span className='font-semibold'>Autre prix (facultatif) : </span>{prestation.secondaryPrice}</p>
                </>
              }
            </div>
          }
        </Modal>
      }
    </>
  )
}

export default PrestationsList
