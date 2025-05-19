import Link from 'next/link'
import React from 'react'

export default function User() {
  return (
    <div className=' w-full flex flex-col justify-center items-center h-full ' >
      
      <h1> Dashboard Users </h1>

      <ul className='flex flex-col gap-[10px]' >
        <Link href='/about/dashboard/users/1' >James</Link>
        <Link href='/about/dashboard/users/2' >John</Link>
        <Link href='/about/dashboard/users/3' >Jack</Link>
        <Link href='/about/dashboard/users/4' >Jane</Link>
      </ul>

    </div>
  )
}
