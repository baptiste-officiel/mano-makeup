'use client'

import Link from "next/link"

type PrestationProps = {
    title?: string,
    id?: string,
    background?: string
}

const Prestation = ({
    title, id, background
}: PrestationProps) => {

    // Modify aspect of the title to pass it in url params 
    id = title?.toLowerCase().normalize('NFD').replace(/\s+/g, '').replace(/\//, '').replace(/[\u0300-\u036f]/g, "");

  return (
    <>
    <Link href={`/prestation/${id}`} className="block w-full my-2 md:w-[45%] bg-slate-700 rounded-3xl md:my-0">
        <div className={`relative w-full py-16 flex flex-col justify-between items-center gap-8 border-4 rounded-3xl border-primary-color bg-cover bg-center before:absolute before:bg-[rgb(0_0_0_/_20%)] before:w-full before:h-full before:top-0 before:left-0 before:rounded-2xl`} style={{backgroundImage: `url(${background})`}}>
            <h4 className={`relative text-white text-xl font-extrabold uppercase text-center text-stroke z-20`}>{title}</h4>
        </div>
    </Link>
    </>
  )
}

export default Prestation
