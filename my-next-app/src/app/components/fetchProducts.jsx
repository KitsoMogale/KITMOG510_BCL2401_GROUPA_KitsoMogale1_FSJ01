import React from 'react'

export default async function fetchProducts() {
    console.log('123')
    const getProducts = async ()=>{

  
            
        const res = await fetch('https://next-ecommerce-api.vercel.app/products');
    
       return await res.json();
    
      }
  let data =await getProducts()
  
 return data
}
