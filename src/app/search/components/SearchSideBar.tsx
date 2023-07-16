import React from 'react'
import { Cuisine, Location, PRICE, } from '@prisma/client'
import Link from 'next/link'

export default function SideBar(
  {location,cuisine,searchParams}:
  {location:Location[],
    cuisine:Cuisine[],
    searchParams:{city?: string, cuisine?:string,price?:PRICE}
  }){

  

    const prices=[{

        price:PRICE.CHEAP,
        label:"$",
        className:"border w-full text-reg font-light text-center rounded-l p-2" 
      },
       {
        price:PRICE.REGULAR,
        label:"$$",
        className:"border w-full text-reg text-center font-light p-2" 
      },
      {
        price:PRICE.EXPENSIVE,
        label:"$$$",
        className:"border w-full text-reg text-center font-light rounded-r p-2" 
      },]
  return (
    <div className="w-1/5">
    <div className="border-b pb-4 flex flex-col">
      <h1 className="font-semibold text-lg"> Region</h1>
      {
        location.map(location=>(
          
          <Link
          key={location.id}
          className='capitalize font-light text-reg cursor-pointer' 
          href={{
            pathname:'/search',
            query:{
              ...searchParams,
              city:location.name},
          }}>
            {location.name} 
          </Link>
          
        ))
      }

      
    </div>
    <div className="border-b pb-4 mt-3 flex flex-col ">
      <h1 className="font-semibold text-lg"> Cuisine</h1>
      {cuisine.map(cuisine=>(
        
          <Link 
          key={cuisine.id}
          className='capitalize font-light text-reg cursor-pointer'
          href={{
            pathname:'/search',
            query:{
              ...searchParams,
              cuisine:cuisine.name},
          }}>
            {cuisine.name}
          </Link>
        
      ))}
    </div>
    <div className="mt-3 pb-4">
      <h1 className="mb-2">
        <div className="flex">
          {
            prices.map(({price,label,className})=>(
              <Link
              className={className}
              href={{
                pathname:'/search',
                query:{
                  ...searchParams,
                  price},
              }} 
              >
                {label}
              </Link>
            ))
          }
        </div>
      </h1>
    </div>
    
  </div>
  )
}
