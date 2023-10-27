import React from 'react'

const loading = () => {
  return (
    <div className='px-4 mt-8 w-full max-w-4xl mx-auto animate-pulse'>
            <div className='w-full h-[200px] object-cover object-center rounded-2xl bg-primary-color bg-opacity-60'></div>
            <div className={`w-[80%] mx-auto h-16 mt-6 rounded-xl text-primary-color uppercase font-semibold bg-primary-color sm:text-5xl bg-opacity-60`}></div>
            <div className='py-8 mt-4 w-full h-16 bg-primary-color rounded-xl bg-opacity-60'></div>
            <div className='pb-1 bg-opacity-60'></div>
            <div className='w-[20%] h-6 bg-primary-color mt-4 rounded-xl bg-opacity-60'></div>
            <div className='w-[20%] h-6 bg-primary-color mt-2 rounded-xl bg-opacity-60'></div>
            <div className='flex justify-between py-8 w-full max-w-2xl mx-auto'>
                <div className='w-[120px] h-12 bg-primary-color rounded-lg bg-opacity-60'></div>
                <div className='w-[120px] h-12 bg-primary-color rounded-lg bg-opacity-60'></div>
            </div>
        </div>

  )
}

export default loading
