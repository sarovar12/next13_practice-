import React from 'react'
interface Props{
    input:{
        firstName:string,
        lastName:string,
        phone:string,
        city:string,
        email:string,
        password :string,
    },
    handleChangeInput:(e: React.ChangeEvent<HTMLInputElement>)=> void,
    isSignIn:boolean
}
export default function AuthModalInput({input,handleChangeInput,isSignIn}:Props) {
  return (
    <div>
{ isSignIn? null:<div className="my-3 flex justify-between text-sm">
            <input value={input.firstName}
            onChange={handleChangeInput}
            name='firstName'
                className='border rounded p-2 py-3 w-[49%] ' placeholder='First Name'/>
            <input value={input.lastName}
                onChange={handleChangeInput}
                name='lastName'
                className='border rounded p-2 py-3 w-[49%] ' placeholder='Last Name'/>
        </div>}
        <div 
         className='my-2 flex justify-between text-sm' >
        <input
         value={input.email}
         name='email'
         onChange={handleChangeInput}
         className='border rounded p-2 py-3 w-full ' placeholder='Email'/>
        </div>
{isSignIn? null:<div className="my-3 flex justify-between text-sm">
            <input value={input.phone}
            name='phone'
            onChange={handleChangeInput}
             className='border rounded p-2 py-3 w-[49%] ' placeholder='Phone Number'/>
            <input value={input.city}
            name='city'
            onChange={handleChangeInput}
             className='border rounded p-2 py-3 w-[49%] ' placeholder='City'/>
        </div>}
        <div className='my-2 flex justify-between text-sm' >
        <input
        name='password'
        type='password' 
        value={input.password}
        onChange={handleChangeInput}

         className='border rounded p-2 py-3 w-full ' placeholder='Password'/>
        </div>

    </div>
  )
}
