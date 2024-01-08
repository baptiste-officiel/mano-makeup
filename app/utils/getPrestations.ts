import toast from "react-hot-toast"

export const getPrestations = async() => {
    try {
      const res = await fetch('http://localhost:3000/api/prestations')
      return res.json()
    } catch (error) {
      toast.error('Les prestations n\'ont pas pu être chargées')
    }
  }