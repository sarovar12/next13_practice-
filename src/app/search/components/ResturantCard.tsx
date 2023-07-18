import Link from 'next/link'
import React from 'react'
import { PRICE, Cuisine ,Location, Review } from '@prisma/client'
import Price from '@/app/components/Price';
import { calculateReviewRatingAverage } from '../../../../utils/calculatereviewratingsavg';
import Stars from '@/app/components/Stars';

interface Restaurant{
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location
  slug: string;
  reviews: Review[];
}


export default function ResturantCard({restaurant}:{restaurant:Restaurant}) {
  const renderRatingsText =()=>{
    const rating = calculateReviewRatingAverage(restaurant.reviews)
    if(rating > 4 ) return "Awesome"
      else if (rating<=4 && rating>3) return "Good"
      else if (rating<=3 && rating>0) return "Average"
      else  return "  "
  }
  return (
      
            <div className="border-b flex ml-4  p-5">
            
              <img src={restaurant.main_image} alt="resturant image"
               className="w-44 h-36 rounded"></img>
               <div className="pl-5">
               <h2 className=" text-3xl">{restaurant.name}</h2>
               <div className="flex items-start ">
                <Stars reviews={restaurant.reviews}/>
                <p className="ml-2 text-sm"> {renderRatingsText()}</p>
                {/* <p>{restaurant.reviews.length}</p> */}
               </div>
               <div className="mb-9">
                  <div className="font-light flex text-reg">
                    <p className="mr-4">
                      <Price price={restaurant.price}/>
                    </p>
                    <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
                    <p className="mr-4 capitalize">{restaurant.location.name}</p>
                  </div>
                </div>
                <div className="text-red-600">
                  <Link href={`/resturant/${restaurant.slug}`}> View More Information</Link>
                </div>
               </div> 
            </div>            
            
  )
}
