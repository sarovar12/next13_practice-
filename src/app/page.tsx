import { Metadata } from "next";
import Header from "./components/Header";
import ResturantCard from "./components/ResturantCard";
export const metadata: Metadata = {
  title: 'OpenTable Clone'}
import { PrismaClient, Cuisine, Location, PRICE, Review } from "@prisma/client";

const prisma = new PrismaClient();

export interface ResturantCardType{
  id:number;
  name:string;
  main_image:string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug:string;
  reviews:Review[];
}

const fetchRestaurants = async():Promise<ResturantCardType[]>=>{
  const restaurants = await prisma.restaurant.findMany({
    select:{
      id:true,
      name:true,
      main_image:true,
      cuisine:true,
      slug:true,
      location:true,
      price:true,
      reviews:true,
    }
  });
  return restaurants;
}


export default async function Home() {
const restaurants = await fetchRestaurants();
  return (
    
        <main>
         <Header/>  
        
         <div className="py-3 px-36 mt-10 flex flex-wrap">
          {restaurants.map(restaurant=>(
            <ResturantCard restaurant={restaurant} />
          ))}
          
         </div>
         </main>

  )
}
