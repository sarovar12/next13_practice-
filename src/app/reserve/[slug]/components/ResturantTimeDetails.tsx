import React from 'react'

export default function ResturantTimeDetails() {
  return (
    <div>
    <h3 className="font-bold"> You're almost done!</h3>
    <div className="mt-5 flex">
      <img src="https://resizer.otstatic.com/v2/photos/wide-huge/2/52456565.jpg" alt="Resturant Img"
      className="w-32 h-18 rounded" />
      <div className="ml-4 ">
        <h1 className="text-3xl font-bold">Rouge at Red Rock Casino Resort & Spa</h1>
        <div className="flex mt-3">
          <p className="mr-6">Tues, 22 , 2023</p>
          <p className="mr-6">7:30 pm</p>
          <p className="mr-6">3 People</p>
        </div>
      </div>
    </div>
  </div>
  )
}
