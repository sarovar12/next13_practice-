
import React from 'react'
import ResturantNavbar from '../components/ResturantNavbar'
import Menu from './components/Menu'
import { Metadata } from "next";
import { PrismaClient } from '@prisma/client';

export const metadata: Metadata = {
    title: ' Menu | Corrine Bar (Nakkhu) | OpenTable',
  }
const prisma = new PrismaClient();
const fetchRestaurantItems = async ( slug:string)=>{
  const restaurant = await prisma.restaurant.findUnique({
    where:{
      slug
    },
    select:{
      items:true,
    }
  })

  if(!restaurant){
    throw new Error
  }
  return restaurant.items
}

export default async function ResturantMenu({params}:{params:{slug:string}}) {
  const menu = await fetchRestaurantItems(params.slug)
  return (
    <>  
        <div className="bg-white  w-[100%] rounded p-3 shadow">
        <ResturantNavbar slug={params.slug} />
        <Menu menu={menu} />
         </div>
    </>
  )
}
