import Navbar from '@/app/components/Navbar'
import Link from 'next/link'
import React from 'react'
import Header from './components/Header'
import ResturantNavbar from './components/ResturantNavbar'
import Title from './components/Title'
import Ratings from './components/Ratings'
import Description from './components/Description'
import Images from './components/Images'
import ReviewSection from './components/ReviewSection'
import ReservationCard from './components/ReservationCard'

export default function ResturantDetails() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
    <main className='max-w-screen-2xl m-auto bg-white'>
       <Navbar/>
          <Header/>
      {/* Description Portion */}
        <div className="flex m-auto w-2/3 justify-between items-start  -mt-11">
          <div className="bg-white  w-[70%] rounded p-3 shadow">
            <ResturantNavbar/>
            <Title/>
            <Ratings/>
            <Description/>
            <Images/>
            <ReviewSection/>
          </div>
          <ReservationCard/>
        </div>
      {/* Description Portion */}
        </main>
      </main>
  )
}
