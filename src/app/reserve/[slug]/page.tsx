import Navbar from '@/app/components/Navbar'

import React from 'react'
import ReserveForm from './components/ReserveForm'
import ResturantTimeDetails from './components/ResturantTimeDetails'

export default function ReserveResturant(){
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
    <main className='max-w-screen-2xl m-auto bg-white'>
        <Navbar/>
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <ResturantTimeDetails/>
            <ReserveForm/>
          </div>
        </div>
      </main>
  </main>
  )
}
