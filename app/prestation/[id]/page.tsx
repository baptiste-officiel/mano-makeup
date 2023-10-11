'use client'

import PrestationDetails from '@/app/components/prestations/PrestationDetails'
import { useParams } from 'next/navigation'
import React from 'react'

function PrestationPage() {

    const params = useParams()
    console.log("🚀 ~ file: page.tsx:7 ~ page ~ params:", params)

    const id = params.id as unknown as number
    console.log("🚀 ~ file: page.tsx:13 ~ PrestationPage ~ id:", id)

  return (
    <div>
      {/* {params.id} */}
      <PrestationDetails id={id} />
    </div>
  )
}

export default PrestationPage
