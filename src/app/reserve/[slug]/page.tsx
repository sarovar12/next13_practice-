
import React from 'react'
import ReserveForm from './components/ReserveForm'
import ResturantTimeDetails from './components/ResturantTimeDetails'
import { Metadata } from "next";
export const metadata: Metadata = {
    title: ' Reserve at Corrine Bar (Nakkhu) | OpenTable',
  }

export default function ReserveResturant(){
  return (
    <>
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <ResturantTimeDetails/>
            <ReserveForm/>
          </div>
        </div>
  </>
  )
}
