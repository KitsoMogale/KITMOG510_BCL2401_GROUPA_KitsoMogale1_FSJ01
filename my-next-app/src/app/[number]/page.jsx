import React from 'react'
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import Sort from '../components/Sort';

export default async function Page({params}) {
  console.log('number1')
  const getProducts = async (id=0)=>{
    // if(id=0){

    // }
      console.log(id,'get')
    let skip = 20*id;
    if(skip<10){
        skip= `0${skip}`
    }
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        
    const res = await fetch(`${apiUrl}/api/products/?lastVisible=0${skip}`);
     console.log(res)
    const data = await res.json();
    console.log(data[0],'[num')
     return data
  }
  
  const data = await getProducts(params.number);
  return (
    <div className="p-12">
                    <div className="flex">
      <Filter/>
      <Sort className='m-2'/>
      </div>
    <ProductList data={data} number={params.number}/>
    </div>
  )
}
