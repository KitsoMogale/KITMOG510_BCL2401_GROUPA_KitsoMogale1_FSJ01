'use client'
import { redirect } from 'next/navigation'
import React from 'react'
import Link from "next/link";

export default function ProductCard(props) {
  return (
    <>
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4">
 <Link href={`/productDetails/${props.product.id}`}>
  <div className="relative" >
    <img id="mainImage" className="w-full h-48 object-cover" src={`${props.product.thumbnail}`} alt="Product Image" />
    
   
    <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1">
      -{props.product.discountPercentage}%
    </div>
  </div>
  </Link>
 
  <div className="px-4 py-4">
    <h2 className="font-bold text-xl mb-2">{props.product.title}</h2>

    <div className="text-sm text-gray-500">
      <span className="font-bold">Category:</span> {props.product.category} 
      <span className="ml-2 font-bold">Brand:</span> {props.product.brand?props.product.brand:'unknown'}
    </div>
    
   
    <div className="mt-3 flex justify-between items-center">
      <div>
        <span className="text-lg font-bold text-gray-800">{props.product.price}</span>
        <span className="text-sm text-gray-500 line-through ml-2">{(props.product.price * (100 + props.product.discountPercentage) / 100).toFixed(2)}</span>
      </div>
      <span className="text-sm font-bold text-green-500">{props.product.stock} in stock</span>
    </div>
  </div>

 
  <div className="px-4 py-2 flex justify-between items-center">
    <div className="flex items-center">
      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.992h5.262c.958 0 1.357 1.228.654 1.81l-4.26 3.277 1.618 4.992c.3.921-.755 1.688-1.541 1.127L10 15.347l-4.26 3.277c-.786.561-1.841-.206-1.541-1.127l1.618-4.992-4.26-3.277c-.703-.582-.304-1.81.654-1.81h5.262L9.049 2.927z" />
      </svg>
      <span className="ml-2 text-gray-600">{props.product.rating} / 5</span>
    </div>
   
  </div>
</div>


    </>
    // <div>{props.product.title}</div>
  )
}
