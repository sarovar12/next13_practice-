import Link from 'next/link'
import React from 'react'

export default function ResturantNavbar() {
  return (
    <nav className="flex text-reg border-b pb-2">
    <Link href="/resturant/corrine-resturant/" className="mr-7"> Overview</Link>
    <Link href="/resturant/corrine-resturant/menu" className="mr-7"> Menu</Link>
  </nav>
  )
}
