
import React from 'react'
import Header from '../components/Header'
import ResturantNavbar from '../components/ResturantNavbar'

import Menu from './components/Menu'

export default function ResturantMenu() {
  return (
    <>  
        <div className="bg-white  w-[100%] rounded p-3 shadow">
        <ResturantNavbar/>
        <Menu/>
         </div>
    </>
  )
}
