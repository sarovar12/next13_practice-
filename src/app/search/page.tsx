
import React from 'react'
import { Metadata } from "next";
import Header from './components/Header'
import SearchSideBar from './components/SearchSideBar'
import ResturantCard from './components/ResturantCard'
import { PRICE, PrismaClient } from '@prisma/client';


export const metadata: Metadata = {
  title: 'Search | OpenTable',
}

const prisma = new PrismaClient()
const fetchLocation= ()=>{
  return prisma.location.findMany();
}
const fetchCuisine= async()=>{
  return prisma.cuisine.findMany();
}


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

export default async function Search({searchParams}:
  {searchParams:{city?: string, cuisine?:string,price?:PRICE}}) {
 const restaurants = await fetchRestaurantByLocation(searchParams.city)
 const location = await fetchLocation();
 const cuisine = await fetchCuisine();
 
  return (
    <>
      <Header/>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar searchParams={searchParams}  location={location} cuisine={cuisine}/>
        <div className='w-5/6'>
       {restaurants.length ?
        (
          restaurants.map(restaurant=>(
            <ResturantCard key={restaurant.id} restaurant={restaurant}/>
          ))
        )
       : <p>No Restaurant Found in this area</p>} 
        </div>
      </div>
  
 </>
  )
  }
