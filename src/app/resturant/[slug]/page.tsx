
import React from 'react'
import Header from './components/Header'
import ResturantNavbar from './components/ResturantNavbar'
import Title from './components/Title'
import Ratings from './components/Ratings'
import Description from './components/Description'
import Images from './components/Images'
import ReviewSection from './components/ReviewSection'
import ReservationCard from './components/ReservationCard'

import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Corrine Bar (Nakkhu) | OpenTable',
  }

export default function ResturantDetails() {
  return (
    
        <>
          
          <div className="bg-white  w-[70%] rounded p-3 shadow">
            <ResturantNavbar/>
            <Title/>
            <Ratings/>
            <Description/>
            <Images/>
            <ReviewSection/>
          </div>
          <ReservationCard/>
        
      {/* Description Portion */}
      </>
  )
}
