'use client'
import React from 'react'
import ProductList from '../components/ProductList';
import { useContext,useEffect,useState } from 'react';
import { SearchContext } from "../components/SearchProvider";
import {FilterContext } from "../components/FilterProvider";
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'next/navigation'
import FetchProducts from '../components/FetchProducts';

export default function page() {

    // const {search,setSearch} = useContext(SearchContext);
    // const {filter,setFilter} = useContext(FilterContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchParams = useSearchParams()
 
    const search = searchParams.get('search')
    const filter = searchParams.get('category')
    

    useEffect(() => {
        const fetchProducts = async () => {
          setLoading(true);
          setError(null); // Reset error state
              // Create an instance of URLSearchParams to build the query string
       const queryParams = new URLSearchParams();

        // Add 'search' to query params if it's not empty
       if (search  && search.trim()) {
          queryParams.append('search', search.trim());
        }

        // Add 'category' to query params if it's not empty
      if (filter && filter.trim()) {
         queryParams.append('category', filter.trim());
         }
     
          try {
            const response = await fetch(`https://next-ecommerce-api.vercel.app/products?${queryParams.toString()}`);
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
          fetchProducts();
        
      }, [search,filter])

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>

    </>
  )
}
