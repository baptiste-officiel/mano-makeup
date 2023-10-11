'use client'

import Link from "next/link"

interface prestationProps {
    title?: string,
    id?: number,
    buttonLabel?: string,
    background?: string
}

const Prestation:React.FC<prestationProps> = ({
    title, id, buttonLabel, background
}) => {

    // console.log(background);
    // let custombg = background

  return (
    
    <>
    <Link href={`/prestation/${id}`} className="block w-full my-2 md:w-[45%] bg-slate-700 rounded-3xl md:my-0">
        <div className={`w-full py-16 flex flex-col justify-between items-center gap-8 border-4 rounded-3xl border-primary-color bg-cover bg-center`} style={{backgroundImage: `url(${background})`}}>
            <h4 className={`text-white text-xl font-bold uppercase text-center`}>{title}</h4>
        </div>
    </Link>
    </>
  )
}

export default Prestation
