'use client'
import React from 'react'
import Link from 'next/link';

export default function FetchProducts(props) {

    let next = props.number.number?Number(props.number.number)+1:1;
    let previous = props.number.number==1?'/':Number(props.number.number)-1;

  return (
    <div className="flex  mt-4">
    {/* Conditional rendering of buttons */}
    {props.number.number !== 0 && (
      <button className="bg-gray-800 m-2 text-white px-4 py-2 rounded">
        <Link href={`${previous}`}>Previous</Link>
      </button>
    )}
    <button className="bg-gray-800 m-2 text-white px-4 py-2 rounded">
      <Link href={`${next}`}>Next</Link>
    </button>
  </div>
  )
}


