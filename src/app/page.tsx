
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ResturantCard from "./components/ResturantCard";

export default function Home() {

  return (
<main className='bg-gray-100 min-h-screen w-screen'>
    <main className='max-w-screen-2xl m-auto bg-white'>
        <Navbar/>
        <main>
         <Header/>  
        </main>
         <div className="py-3 px-36 mt-10 flex flex-wrap">
          <ResturantCard/>
         </div>
    </main>
  </main>
  )
}
