import React from 'react'

export default function ReserveForm() {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
    <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="First Name"/>
    <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Last Name"/>
    <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Phone Number"/>
    <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Email"/>
    <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Occasion (Optional)"/>
    <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Special Requests (Optional)"/>
    <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-700"> Complete Reservation</button>
    <p className="mt-4 text-sm text-gray-500" >
    By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Message & data rates may apply. You can opt out of receiving text messages at any time in your account settings or by replying STOP.
    </p>
  </div>
  )
}
