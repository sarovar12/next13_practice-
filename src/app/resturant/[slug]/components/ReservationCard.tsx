"use client";

export default function ReservationCard() {
  return (
    <div className="w-[27%] relative text-reg">
    <div className="fixed w-[20%] bg-white p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7  text-lg">
          Make a Reservation
        </h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="">
          Party Size
        </label>
        <select name="" className="py-3 border-b font-light" id="">
          <option value="">1 Person</option>
          <option value="">2 Persons</option>
        </select>
      </div>
      <div className=" flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <input type="text" className="py-3 border-b font-light w-28"></input>
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Time</label>
          <select name="" className="py-3 border-b font-light ">
          <option value=""> 7:30 AM</option>
          <option value=""> 9:30 AM</option>
          </select>
        </div>
      </div>
      
      <div className="mt-5">
          <button className="bg-red-600 rounded p-2 w-full text-white font-bold h-16 " > Find a time</button>

        </div>
    </div>
</div>
  )
}
