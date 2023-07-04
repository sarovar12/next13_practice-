
import Header from "./components/Header";
import ResturantCard from "./components/ResturantCard";

export default function Home() {

  return (
    
        <main>
         <Header/>  
        
         <div className="py-3 px-36 mt-10 flex flex-wrap">
          <ResturantCard/>
         </div>
         </main>

  )
}
