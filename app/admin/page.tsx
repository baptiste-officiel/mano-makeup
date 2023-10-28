import React from 'react'
import AddPrestation from '../components/admin/AddPrestation'
import PrestationsList from '../components/admin/PrestationsList'
import LogOutButton from '../components/admin/LogOutButton'

const getPrestations = async() => {
  try {
    const res = await fetch('http://localhost:3000/api/prestations', {
      cache: 'no-store'
    })
    return res.json()
  } catch (error) {
    console.log("🚀 ~ file: Prestations.tsx:15 ~ getPrestations ~ error:", error)
  }
}

const Admin = async() => {

  const prestations = await getPrestations();

  return (
    <div className='min-h-screen relative w-full max-w-7xl mx-auto'>
      <h2 className='text-center text-2xl font-medium pt-8'>Page d&apos;administration</h2>
      <LogOutButton />
      <AddPrestation />
      <PrestationsList prestations={prestations} />
    </div>
  )
}

export default Admin
