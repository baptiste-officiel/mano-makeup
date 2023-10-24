'use client'

import React, { useState } from 'react'
import Modal from '../modal/Modal'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'                          
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

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
  const [modalDeleteValidation, setModalDeleteValidation] = useState(false)
  const [onEdit, setOnEdit] = useState(false)

  const getPrestation = async(id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/prestations/${id}`)
      const data = await res.json()
      setPrestation(data)
      
      // if (data) {
        setTitle(data.title)
        setDescription(data.description)
        setImage(data.image)
        setDuration(data.duration)
        setPrice(data.price)
        setSecondaryPrice(data.secondaryPrice)
      // }
      
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
        setModalDeleteValidation(false)
        setOnEdit(false)
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
        setModalDeleteValidation(false)
        setPrestation({})
        setPrestationId('')
        router.refresh()
        toast.success('La prestation a bien été supprimée')
      })
    } catch (error) {
        console.log("🚀 ~ file: PostsList.tsx:20 ~ handleDelete ~ error:", error)
        toast.error('La prestation n\'a pas pu être supprimée')
    }
    
  }

  const handleEdit = async(e: any, id?: string) => {
    // console.log(id);
    e.preventDefault();

        const data = {title, description, image, duration, price, secondaryPrice}

        try {
          const response = await fetch(`http://localhost:3000/api/prestations/${id}`, {
            method: 'PUT',
            cache: 'no-store',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data)
        }).then((res) => res.json())
        .finally(() => {
          setTitle('');
          setDescription('');
          setImage('');
          setDuration('');
          setPrice('');
          setSecondaryPrice('');
          router.refresh();
          toast.success('La modification a été prise en compte')
        });
        } catch (error) {
          console.log("🚀 ~ file: AddPosts.tsx:31 ~ handleSubmit ~ error:", error)
          toast.error('La modification n\'a pas pu étre effectuée')
        }
        setModal(false)
        setPrestationId('');
        setPrestation({})
        setOnEdit(false)
    
  }

  return (
    <>
      <div className='w-full px-4 py-6 flex gap-4 flex-wrap mx-auto justify-center'>
        {prestations && 
          prestations.map((item: any) => 
          <div key={item.id} className={`relative w-full py-16 flex flex-col justify-between items-center gap-8 border-4 rounded-3xl border-primary-color bg-cover bg-center before:absolute before:bg-[rgb(0_0_0_/_20%)] before:w-full before:h-full before:top-0 before:left-0 before:rounded-3xl cursor-pointer hover:shadow-xl md:w-[45%]`} style={{backgroundImage: `url(${item.image})`}} onClick={() => toggleModal(item.id)}>
              <h4 className={`relative text-white text-xl font-extrabold uppercase text-center text-stroke z-20`}>{item.title}</h4>
          </div>
          )
        }
      </div>

      {modal && 
        <Modal>
          <span className='absolute top-4 right-4 text-3xl cursor-pointer px-2 z-10' onClick={() => toggleModal()}>&times;</span>
          {prestation && 
            <div className='relative flex flex-col gap-4 pt-16 pb-4 md:w-[80%] md:mx-auto'>

              <div className='absolute top-1 left-0 p-1 cursor-pointer' onClick={() => setModalDeleteValidation(true)}><BsTrash size={24} /></div>
              <div className='absolute top-1 left-12 p-1 cursor-pointer' onClick={() => setOnEdit(!onEdit)}><AiOutlineEdit size={24} /></div>

              {onEdit ? 
                <>
                  <form onSubmit={(e) => handleEdit(e, prestation.id)} className='w-full flex flex-col items-center gap-2 my-8 mx-auto md:w-[80%]'>
                    <input type="text" value={title} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Titre' onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={description} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" value={image} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Image' onChange={(e) => setImage(e.target.value)} />
                    <input type="text" value={duration} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Durée' onChange={(e) => setDuration(e.target.value)} />
                    <input type="text" value={price} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Prix' onChange={(e) => setPrice(e.target.value)} />
                    <input type="text" value={secondaryPrice} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Prix secondaire' onChange={(e) => setSecondaryPrice(e.target.value)} />
                    <button type="submit" className='px-4 py-2 bg-primary-color rounded text-beige mt-2 duration-300 hover:bg-primary-color-hover'>Publier</button>
                </form>
                </> : 
                <>
                  <h1 className='text-2xl uppercase'>{prestation.title}</h1>
                  <p>{prestation.description}</p>
                  <p className='-mb-2'><span className='font-semibold'>Durée : </span>{prestation.duration}</p>
                  <p className='-mb-2'><span className='font-semibold'>Prix : </span>{prestation.price}</p>
                  <p className='-mb-2'><span className='font-semibold'>Autre prix (facultatif) : </span>{prestation.secondaryPrice}</p>
                </>
              }
            </div>
          }
        </Modal>
      }

      {modalDeleteValidation && 
        <Modal>
          <h3 className='text-center text-lg font-medium'>T&apos;es sûre Mano ?</h3>
          <div className='flex gap-4 justify-center mt-5 mb-2 max-w-[600px] mx-auto'>
            <button className='border-2 py-1 w-[35%] rounded-md border-black bg-black text-white duration-300 hover:border-slate-700 hover:bg-slate-700' onClick={() => handleDelete(prestation.id)}>Bien sûr</button>
            <button className='border-2 py-1 w-[35%] rounded-md border-black duration-300 hover:border-slate-500' onClick={() => setModalDeleteValidation(false)}>Non en fait</button>
          </div>
        </Modal>
      }
    </>
  )
}

export default PrestationsList
