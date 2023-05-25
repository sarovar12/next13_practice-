import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
    <Link href='/' className='font-bold text-gray-700 text-2xl'> {" "} Open Table{" "}</Link>
      <div>
        <div className='flex '>
            <button className="bg-blue-400 text-white border rounded mr-3 p-1 px-4"> Sign In</button>
            <button className="border p-1 px-4 rounded">Sign Up</button>
        </div>
      </div>
    
    </nav>
    
  )
}
