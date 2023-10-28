'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

const LogOutButton = () => {
  return (
    <button className='absolute top-4 right-4 px-4 py-1 border-2 border-primary-color rounded-md text-sm' onClick={() => signOut()}>Déconnexion</button>
  )
}

export default LogOutButton
