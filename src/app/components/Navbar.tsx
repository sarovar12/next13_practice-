"use client"

import Link from 'next/link'
import React from 'react'
import AuthModal from './AuthModal'
import { useContext } from 'react'
import { AuthenticationContext } from '../context/authContext'
import useAuth from '../../../hooks/useAuth'

export default function Navbar() {
  const {data,loading} = useContext(AuthenticationContext)
  const {signOut} = useAuth()
  return (
    <nav className='bg-white p-2 flex justify-between'>
    <Link href='/' className='font-bold text-gray-700 text-2xl'> {" "} Open Table{" "}</Link>
    <div>
{ loading ? null : 
(<div className='flex '>
          {data ? <button
          onClick={signOut}
          className="bg-blue-400 text-white border rounded mr-3 p-1 px-4">
            Sign Out
            </button>
            :
          <>
          <AuthModal isSignIn={true}/>
          <AuthModal isSignIn={false}/>
          </>
          }
      </div>)}
    
    </div>
    
    </nav>    
  )
}
