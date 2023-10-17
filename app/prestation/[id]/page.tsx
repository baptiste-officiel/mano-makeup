'use client'

import PrestationDetails from '@/app/components/prestations/PrestationDetails'
import { useParams } from 'next/navigation'
import React from 'react'

function PrestationPage() {

    const params = useParams()
    const id = params.id as unknown as number

  return (
    <div>
      <PrestationDetails id={id} />
    </div>
  )
}

export default PrestationPage
