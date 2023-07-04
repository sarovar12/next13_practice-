

import React from 'react'
import ReserveForm from './components/ReserveForm'
import ResturantTimeDetails from './components/ResturantTimeDetails'

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
