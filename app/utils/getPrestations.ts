export const getPrestations = async() => {
    try {
      const res = await fetch('http://localhost:3000/api/prestations')
      return res.json()
    } catch (error) {
      console.log("🚀 ~ file: Prestations.tsx:15 ~ getPrestations ~ error:", error)
    }
  }