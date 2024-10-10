// import React from 'react'
// import ProductList from '../components/ProductList';

// export default async function page({params}) {

//   const getProducts = async (id)=>{

//     let skip = 20*id;
        
//     const res = await fetch('http://localhost:3000/products/?lastVisible=00'+`${skip}`);

//     const data = await res.json();

//      return data
//   }

//   const data = await getProducts(params.number);
//   return (
//     <div className="p-12">
//     <ProductList data={data} number={params.number}/>
//     </div>
//   )
// }


