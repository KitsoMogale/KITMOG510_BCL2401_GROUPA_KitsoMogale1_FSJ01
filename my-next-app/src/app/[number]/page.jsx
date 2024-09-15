import React from 'react'
import ProductList from '../components/ProductList';

export default async function page({params}) {

  const getProducts = async (id)=>{

    let skip = 20*id;
        
    const res = await fetch('https://next-ecommerce-api.vercel.app/products/?skip='+`${skip}`);

    const data = await res.json();

     return data
  }

  const data = await getProducts(params.number);
  return (
    <>
    <ProductList data={data} number={params.number}/>
    </>
  )
}


