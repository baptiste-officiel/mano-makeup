import React from 'react'
import AddPrestation from '../components/admin/AddPrestation'
import PrestationsList from '../components/admin/PrestationsList'

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
    <div className='min-h-screen'>
      <AddPrestation />
      <PrestationsList prestations={prestations} />
    </div>
  )
}

export default Admin
