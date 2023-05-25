import Link from 'next/link'
import React from 'react'

export default function ResturantCard() {
  return (
      
            <div className="border-b flex  p-5">
            
              <img src="https://images.otstatic.com/prod1/28959017/3/medium.jpg" alt="resturant image"
               className="w-44 rounded"></img>
               <div className="pl-5">
               <h2 className=" text-3xl">FUHU - Resorts World Las Vegas</h2>
               <div className="flex items-start ">
                <div className="flex mb-2"> *****</div>
                <p className="ml-2 text-sm"> Awesome</p>
               </div>
               <div className="mb-9">
                  <div className="font-light flex text-reg">
                    <p className="mr-4">$$$</p>
                    <p className="mr-4">Mexican</p>
                    <p className="mr-4">Ottawa</p>
                  </div>
                </div>
                <div className="text-red-600">
                  <Link href="/resturant/corrine-resturant"> View More Information</Link>
                </div>
               </div> 
            </div>            
            
  )
}
