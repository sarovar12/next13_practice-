"use client"
import Image from 'next/image'
import React from 'react'
import ErrorImage from '../../../../public/error.webp'
export default function Error({
    error
}:{
    error:Error
}
) {
  return (
    
    <div className=' h-full w-full bg-gray-200 justify-center flex flex-col items-center'>
        <Image src={ErrorImage} alt='Error' className=' justify-center w-56 mb-8' />
        <div className='bg-white px-9 py-14 shadow rounded'>
            <h3 className="text-3xl font-bold"> Cannot find the page</h3>
            <p className='text-reg font-bold'> {error.message}</p>
            <div className="mt-6-text-small font-li"> Error Code:404</div>
        </div>
    </div>
  )
}
