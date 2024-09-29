'use client'
import React from 'react'
import ProductList from '../components/ProductList';
import { useContext,useEffect,useState } from 'react';
import { SearchContext } from "../components/SearchProvider";
import ProductCard from '../components/ProductCard';
import FetchProducts from '../components/FetchProducts';

export default function page() {

    const {search,setSearch} = useContext(SearchContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
          setLoading(true);
          setError(null); // Reset error state
    
          try {
            const response = await fetch(`https://next-ecommerce-api.vercel.app/products?search=${search}`);
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
    
        if (search.trim()) {
          fetchProducts();
        }
      }, [search])

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
