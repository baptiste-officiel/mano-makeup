import React from 'react'
import AddPrestation from '../components/admin/AddPrestation'
import PrestationsList from '../components/admin/PrestationsList'

const Admin = () => {
  return (
    <div className='min-h-screen'>
      <AddPrestation />
      <PrestationsList />
    </div>
  )
}

export default Admin
