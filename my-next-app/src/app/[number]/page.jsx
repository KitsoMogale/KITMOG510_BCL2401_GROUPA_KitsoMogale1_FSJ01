import React from 'react'
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import Sort from '../components/Sort';

export default async function Page({params}) {
  console.log('number1')
  const getProducts = async (id)=>{
      console.log('get')
    let skip = 20*id;
    if(skip<10){
        skip= `0${skip}`
    }
        
    const res = await fetch(`http://localhost:3000/api/products/?lastVisible=0${skip}`,{cache:'no-cache'});

    const data = await res.json();

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
