
import React from 'react'
import ResturantNavbar from './components/ResturantNavbar'
import Title from './components/Title'
import Ratings from './components/Ratings'
import Description from './components/Description'
import Images from './components/Images'
import ReviewSection from './components/ReviewSection'
import ReservationCard from './components/ReservationCard'

import { Metadata } from "next";
import { PrismaClient, Review } from '@prisma/client'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
    title: 'Corrine Bar (Nakkhu) | OpenTable',
  }
  interface Restaurant{
    id: number;
    name: string;
    images: string[];
    description: string;
    slug: string;
    reviews: Review[];
}

const prisma = new PrismaClient();
const fetchRestaurantBySlug = async (slug:string) : Promise<Restaurant> =>{
  const restaurant = await prisma.restaurant.findUnique({
    where:{
      slug,
    },
    select:{
      id:true,
      name:true,
      images:true,
      description:true,
      slug:true,
      reviews:true,
    }
  })

  if(!restaurant){
    notFound();
  }
  return restaurant; 
  
}


export default async function ResturantDetails({params}:{params:{slug: string}}) {

  const restaurant = await fetchRestaurantBySlug(params.slug)
  return (
    
        <>
          
          <div className="bg-white  w-[70%] rounded p-3 shadow">
            <ResturantNavbar slug={restaurant.slug}/>
            <Title name={restaurant.name}  />
            <Ratings reviews={restaurant.reviews}/>
            <Description description= {restaurant.description}/>
            <Images images={restaurant.images}/>
            <ReviewSection reviews={restaurant.reviews} />
          </div>
          <ReservationCard/>
        
      {/* Description Portion */}
      </>
  )
}
