'use client'

import React, { FormEvent, useState } from 'react'
import Modal from '../modal/Modal'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const AddPrestation = () => {

    const router = useRouter();

    const [prestationToAdd, setPrestationToAdd] = useState({
        title: '',
        description: '',
        image: '',
        duration: '',
        price: '',
        secondaryPrice: ''
    })

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const res = await fetch('api/prestations', {
                method: 'POST',
                body: JSON.stringify(prestationToAdd)
            })
            .then((res) => res.json())
            .finally(() => {
                setPrestationToAdd({
                    title: '',
                    description: '',
                    image: '',
                    duration: '',
                    price: '',
                    secondaryPrice: ''
                })
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
                <input type="text" value={prestationToAdd.title} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Titre' onChange={(e) => setPrestationToAdd({...prestationToAdd, title: e.target.value})} />
                    <textarea value={prestationToAdd.description} rows={6} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Description' onChange={(e) => setPrestationToAdd({...prestationToAdd, description: e.target.value})} />
                    <input type="text" value={prestationToAdd.image} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Titre' onChange={(e) => setPrestationToAdd({...prestationToAdd, image: e.target.value})} />
                    <input type="text" value={prestationToAdd.duration} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Titre' onChange={(e) => setPrestationToAdd({...prestationToAdd, duration: e.target.value})} />
                    <input type="text" value={prestationToAdd.price} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Titre' onChange={(e) => setPrestationToAdd({...prestationToAdd, price: e.target.value})} />
                    <input type="text" value={prestationToAdd.secondaryPrice} className='border-2 border-primary-color rounded-md w-full mx-auto px-2 py-1 placeholder:text-sm shadow-sm' placeholder='Titre' onChange={(e) => setPrestationToAdd({...prestationToAdd, secondaryPrice: e.target.value})} />
                    <button type="submit" className='px-4 py-2 bg-primary-color rounded text-beige mt-2 duration-300 hover:bg-primary-color-hover'>Publier</button>
                </form>
            </Modal>
        }
    </>
  )
}

export default AddPrestation
