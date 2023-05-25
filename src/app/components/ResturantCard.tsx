import Link from 'next/link'
import React from 'react'

export default function ResturantCard() {
  return (
    <div className="w-64 h-72 m-2 rounded overflow-hidden border cursor-pointer">
    <Link href="/resturant/corrine-resturant">
      <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/25238871.jpg"
       alt="Resturant Image"
       className="w-full h-36 "></img>
       <div className="p-1">
        <h3 className="font-bold text-2xl mb-2"> Corinne Restaurant </h3>
         
        <div className="flex items-start">
            <div className="flex mb-2 "> ***** </div>
            <p className="ml-2 "> 77 reviews</p>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className=" mr-3 ">Mexican</p>
          <p className="mr-3"> $$$$</p>
          <p> Torronto </p>
          </div>
          <p className="mt-1 font-bold text-sm"> Booked 3 times today</p>
        </div> 
    </Link>
  </div>
  )
}
