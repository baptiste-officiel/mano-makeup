export const getPrestation = async(id?: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/prestations`).then(res => res.json())
      const data = res.map((item: any) => {
         return {...item, id: item.title?.toLowerCase().normalize('NFD').replace(/\s+/g, '').replace(/\//, '').replace(/[\u0300-\u036f]/g, "")}
    })
      const prestation = data.filter((item: any) => item.id === id)
      return prestation[0]
    } catch (error) {
    }
  }