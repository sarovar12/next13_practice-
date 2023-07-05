
import React from 'react'
import ResturantNavbar from '../components/ResturantNavbar'
import Menu from './components/Menu'
import { Metadata } from "next";
export const metadata: Metadata = {
    title: ' Menu | Corrine Bar (Nakkhu) | OpenTable',
  }

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
