"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchBar() {
    const router=  useRouter()
    const [location,setLocation] = useState("");
  return (
    <div className="  text-left py-3 m-auto flex justify-center">
    <input placeholder="State,City,Town" 
    className=" overflow-hidden rounded text-lg mr-3 p-2 w-[450px]"
    value={location}
    onChange={(e)=>setLocation(e.target.value)}></input>
    <button className="bg-red-600 px-9 py-2 rounded font-semibold text-white"
    onClick={()=>{
      if(location === '') return;
      router.push(`/search?city=${location}`)
       setLocation("")
    }}>Lets go</button>
    </div>  
  )
}
