
import React from 'react'
import Navbar from '../components/Navbar'
import Header from './components/Header'
import SearchSideBar from './components/SearchSideBar'
import ResturantCard from './components/ResturantCard'

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
          <Navbar/>
          <Header/>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar/>
        <div className='w-5/6'>
        <ResturantCard/>
        </div>
      </div>
      </main>
 </main>
  )
}
