import React from 'react'

export default function loading() {

    setTimeout(()=>console.log('123'),3000)
  return (
    
    <div className="flex items-center justify-center min-h-screen">

    <b>Loading...123</b>
   <div className="w-12 h-12 border-4 border-t-2 border-gray-800 border-solid rounded-full animate-spin"></div>
</div>
  )
}
