
import React from 'react'
import { Metadata } from "next";
import Header from './components/Header'
import SearchSideBar from './components/SearchSideBar'
import ResturantCard from './components/ResturantCard'
import { PrismaClient } from '@prisma/client';

export const metadata: Metadata = {
  title: 'Search | OpenTable',
}

const prisma = new PrismaClient()
const fetchRestaurantByLocation = (city:string | undefined) =>
{
  const select={
      id:true,
      name:true,
      main_image:true,
      price:true,
      cuisine:true,
      location:true,
      slug:true

  }
  if(!city) return prisma.restaurant.findMany({select});
  return prisma.restaurant.findMany({
    where:{
      location:{
        name:{
          equals:city.toLowerCase(),
        }
      },
    },
    select,
  })
}

export default async function Search({searchParams}:{searchParams:{city: string}}) {
 const restaurants = await fetchRestaurantByLocation(searchParams.city)
 
  return (
    <>
      <Header/>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar/>
        <div className='w-5/6'>
       {restaurants.length ?
        (
          restaurants.map(restaurant=>(
            <ResturantCard restaurant={restaurant}/>
          ))
        )
       : <p>No Restaurant Found in this area</p>} 
        </div>
      </div>
  
 </>
  )
  }
