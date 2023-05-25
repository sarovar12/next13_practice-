import Navbar from '@/app/components/Navbar'
import React from 'react'
import Header from '../components/Header'
import ResturantNavbar from '../components/ResturantNavbar'

import Menu from './components/Menu'

export default function ResturantMenu() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
    <main className='max-w-screen-2xl m-auto bg-white'>
       <Navbar/>
        <Header/>
        <div className="flex m-auto w-2/3 justify-between items-start  -mt-11">
        <div className="bg-white  w-[100%] rounded p-3 shadow">
        <ResturantNavbar/>
        <Menu/>
         </div>
         </div>
        </main>
      </main>
  )
}
