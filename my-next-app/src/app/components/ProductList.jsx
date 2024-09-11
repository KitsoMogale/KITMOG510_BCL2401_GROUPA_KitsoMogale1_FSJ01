import React from 'react'

export default async function ProductList() {

    const getProducts = async ()=>{

  
            
        const res = await fetch('https://next-ecommerce-api.vercel.app/products');
    
       return await res.json();
    
      }

      const data = await getProducts();
  return (
    <>
    <div>ProductList</div>
    {data.map(product=>{
        return(
            <>
        <div>{product.id}</div>
        <div>{product.title}</div>
        </>
    )
       }   
    )}
    </>
  )
}
