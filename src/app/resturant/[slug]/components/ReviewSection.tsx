import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

export default function ReviewSection({reviews}:{reviews:Review[]}) {
  return (
    <div>

{ reviews.length === 0?
<h1 className="font-bold text-3xl mt-10 mb-7 border text-center p-5" >
   No reviews of this restaurant </h1>
   :  (<h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
      What {reviews.length} {reviews.length===1?"person":"people"} are saying
      </h1>)}
    {
      reviews.map(review=>(
        <ReviewCard key={review.id} review={review }/>
      ))
    }
    
    </div>
  )
}
