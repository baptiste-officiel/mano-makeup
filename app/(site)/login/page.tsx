'use client'

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


function Login() {

  const router = useRouter()

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    try {
      signIn('credentials', {...data, redirect: false})
      .then(() => router.push('/admin'))
    } catch (error) {
    console.log("🚀 ~ file: page.tsx:24 ~ handleSubmit ~ error:", error)
  }
}

  return (
    <>
    <div className='bg-hero min-h-screen bg-cover bg-center pt-28'>
    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 mx-auto rounded-xl bg-white w-4/5 md:w-3/5 lg:w-2/5">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={data.email}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, email: e.currentTarget.value})}
                />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={data.password}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, password: e.currentTarget.value})}
                />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </>
  )
}

export default Login
