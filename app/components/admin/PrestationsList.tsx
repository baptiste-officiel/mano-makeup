import React from 'react'

const getPrestations = async() => {
    try {
      const res = await fetch('http://localhost:3000/api/prestations')
      return res.json()
    } catch (error) {
      console.log("🚀 ~ file: Prestations.tsx:15 ~ getPrestations ~ error:", error)
    }
  }

const PrestationsList = async() => {

    const prestations = await getPrestations();

  return (
    <div>
      {prestations && 
        prestations.map((item: any) => 
            <div key={item.id}>{item.title}</div>
        )
      }
    </div>
  )
}

export default PrestationsList
