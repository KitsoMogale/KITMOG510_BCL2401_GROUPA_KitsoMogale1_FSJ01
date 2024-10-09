'use client'
import React from 'react'
import { useEffect,useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'next/navigation'

export default function page() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchParams = useSearchParams()
 
    const search = searchParams.get('title');
    const filter = searchParams.get('category');
    const sort = searchParams.get('order');

    useEffect(() => {
        const fetchProducts = async () => {
          setLoading(true);
          setError(null); // Reset error state
              // Create an instance of URLSearchParams to build the query string
       const queryParams = new URLSearchParams();

        // Add 'search' to query params if it's not empty
       if (search  && search.trim()) {
        console.log(search);
          queryParams.append('search', search.trim());
        }

        // Add 'category' to query params if it's not empty
      if (filter && filter.trim()) {
         queryParams.append('category', filter.trim());
         }

      // Add 'sortBy' to query params if it's not empty
      if (sort && sort.trim()) {
        queryParams.append('order', sort.trim());
        }
          try {
            const response = await fetch(`http://localhost:3000/api/products?${queryParams.toString()}`);
            // console.log(response)
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            // console.log(data.products[0])
            setProducts(data.products);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
          fetchProducts();
        
      }, [search,filter,sort])

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;
  return (
    <>
     <div className="p-12">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length>0&&products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      </div>
    </>
  )
}
