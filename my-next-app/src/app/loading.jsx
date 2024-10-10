import React from 'react'

export default function Loading() {

    setTimeout(()=>console.log('123'),3000)
  return (

    <div className="animate-pulse flex flex-col items-center">
    <div className="bg-gray-300 w-full h-48 rounded-md"></div> {/* Placeholder for image */}
    <div className="mt-4 bg-gray-300 w-3/4 h-4 rounded-md"></div> {/* Placeholder for title */}
    <div className="mt-2 bg-gray-300 w-1/2 h-4 rounded-md"></div> {/* Placeholder for price */}
    </div>
    
//     <div className="flex items-center justify-center min-h-screen">

//     <b>Loading...123</b>
//    <div className="w-12 h-12 border-4 border-t-2 border-gray-800 border-solid rounded-full animate-spin"></div>
// </div>
  )
}
