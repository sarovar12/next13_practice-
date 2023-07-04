
import React from 'react'

import Header from './components/Header'
import SearchSideBar from './components/SearchSideBar'
import ResturantCard from './components/ResturantCard'

export default function Search() {
  return (
    <>
          <Header/>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar/>
        <div className='w-5/6'>
        <ResturantCard/>
        </div>
      </div>
  
 </>
  )
}
