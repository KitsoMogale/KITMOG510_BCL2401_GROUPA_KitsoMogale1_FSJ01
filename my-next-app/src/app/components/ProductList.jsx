"use client";  // Client component

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link"; 

export default function ProductList(props) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://next-ecommerce-api.vercel.app/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
     if(props.data){
        setProducts(props.data)
     }
     else{
        fetchProducts();
     }
   
  }, []);

  let next = props.number?Number(props.number)+1:1;
  let previous = props.number==1?'/':Number(props.number)-1;

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <ul>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </ul>
    <button><Link href={`${next}`}>next</Link></button>
   {props.number==0?null:<button><Link href={`${previous}`}>previous</Link></button>} 
    </>
  );
}


