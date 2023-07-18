import Link from 'next/link'
import RestaurantCardType, { ResturantCardType } from '../page'
import Price from './Price';
import Stars from './Stars';

interface Props {
  restaurant : ResturantCardType;

}

export default function ResturantCard({restaurant}: Props) {
  return (
    <div className="w-64 h-72 m-2 rounded overflow-hidden border cursor-pointer">
    <Link href={`/resturant/${restaurant.slug}`}>
      <img src={restaurant.main_image}
       alt="Resturant Image"
       className="w-full h-36 "></img>
       <div className="p-1">
        <h3 className="font-bold text-2xl mb-2"> {restaurant.name} </h3>
         
        <div className="flex items-start">
             <Stars reviews={restaurant.reviews}/> 
            <p className="ml-2 "> {restaurant.reviews.length} review{restaurant.reviews.length===1?"":"s"} </p>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className=" mr-3 ">{restaurant.cuisine.name}</p>
          <Price price={restaurant.price}/>
          <p> {restaurant.location.name} </p>
          </div>
          <p className="mt-1 font-bold text-sm"> Booked 3 times today</p>
        </div> 
    </Link>
  </div>
  )
}
