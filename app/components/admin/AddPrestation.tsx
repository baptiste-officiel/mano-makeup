'use client'

import React, { FormEvent, useState } from 'react'
import Modal from '../modal/Modal'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const AddPrestation = () => {

    const router = useRouter();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [duration, setDuration] = useState('')
    const [price, setPrice] = useState('')
    const [secondaryPrice, setSecondaryPrice] = useState('')

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            title,
            description,
            image,
            duration,
            price,
            secondaryPrice
        }

        try {
            const res = await fetch('api/prestations', {
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .finally(() => {
                setTitle('');
                setDescription('');
                setImage('');
                setDuration('');
                setPrice('');
                setSecondaryPrice('')
                setModal(false)
                router.refresh();
                toast.success('La prestation a bien été ajoutée !')
            })
        } catch (error) {
            toast.error('La prestation n\'a pas pu être ajoutée')
            
        }

    }

  return (
    <>
        <div className='w-full h-full my-4'>
            <button className='bg-primary-color mx-auto block mt-8 px-4 py-2 rounded-lg text-beige' onClick={() => toggleModal()}>Ajouter une prestation</button>
        </div>

        {modal && 
            <Modal>
                <span className='absolute top-4 right-4 text-3xl cursor-pointer px-2' onClick={() => toggleModal()}>&times;</span>
                <h4 className='text-xl py-2 font-medium sm:text-center'>Ajouter une prestation</h4>
                <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-2 my-6 mx-auto md:w-[80%]'>
                    <input type="text" value={title} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Titre' onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={description} rows={6} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" value={image} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Image' onChange={(e) => setImage(e.target.value)} />
                    <input type="text" value={duration} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Durée' onChange={(e) => setDuration(e.target.value)} />
                    <input type="text" value={price} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Prix' onChange={(e) => setPrice(e.target.value)} />
                    <input type="text" value={secondaryPrice} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Prix secondaire' onChange={(e) => setSecondaryPrice(e.target.value)} />
                    <button type="submit" className='px-4 py-2 bg-primary-color rounded text-beige mt-2 duration-300 hover:bg-primary-color-hover'>Publier</button>
                </form>
            </Modal>
        }
    </>
  )
}

export default AddPrestation
