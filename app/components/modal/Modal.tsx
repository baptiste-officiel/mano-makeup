import React, { PropsWithChildren } from 'react'

const Modal = ({children}: PropsWithChildren) => {
  return (
    <div className='w-full min-w-full min-h-screen fixed top-0 left-0 bg-slate-600 bg-opacity-60 flex justify-center items-center z-40'>
      <div className={`relative bg-white w-[80%] py-6 px-4 rounded-lg lg:w-[60%]}`}>
        {children}
      </div>
    </div>
  )
}

export default Modal
