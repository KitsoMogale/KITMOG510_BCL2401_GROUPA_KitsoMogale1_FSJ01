import React from 'react'

export default function page() {

  const getProducts = async (id)=>{

    let skip = 20*id;

    console.log(id)
        
    const res = await fetch('https://next-ecommerce-api.vercel.app/products/?skip='+`${skip}`);

    const data = await res.json();


  }
  return (
    <div>page</div>
  )
}


