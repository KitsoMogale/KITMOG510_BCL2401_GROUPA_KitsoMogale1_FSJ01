'use client'
import React from 'react'
import Link from 'next/link';

export default function FetchProducts(props) {
   // console.log(props.number)
    let next = props.number?Number(props.number)+1:1;
    let previous = props.number==1?'/':Number(props.number)-1;

  return (
    <div className="flex  mt-4">
    {/* Conditional rendering of buttons */}
    {props.number !== 0 && (
      <button className="bg-gray-800 m-2 text-white px-4 py-2 rounded">
        <Link href={`${previous}`}>Previous</Link>
      </button>
    )}
    <button onClick={()=>console.log('1234click')} className="bg-gray-800 m-2 text-white px-4 py-2 rounded">
      <Link href={`${next}`}>Next</Link>
    </button>
  </div>
  )
}


