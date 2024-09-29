"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import {FilterContext } from "./FilterProvider";
import { SearchContext } from "./SearchProvider";
import { useRouter } from 'next/navigation';

export default function Filter() {
    const [category, setCategory] = useState([]);
    const [cat,setCat] = useState('')
    const [error, setError] = useState(null);
    const {filter,setFilter} = useContext(FilterContext);
    const {search,setSearch} = useContext(SearchContext);
    const router = useRouter();

    useEffect(() => {
        const fetchCategories = async () => {
          setError(null); // Reset error state
    
          try {
            const response = await fetch(`https://next-ecommerce-api.vercel.app/categories`);
            if (!response.ok) {
              throw new Error('Failed to fetch Categories');
            }
            const data = await response.json();
            setCategory(data);
          } catch (err) {
            setError(err.message);
          } 
        };
    
          fetchCategories();
        
      }, []);

      if (error) return <p>Error: {error}</p>;




  return (
    <div>
     <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          value={cat}
          onChange={(e) => {
            setCat(e.target.value);setFilter(e.target.value);
           
                      // Pushes a new path with query parameters to the URL
          router.push(`/search?title=${encodeURIComponent(search)}&category=${encodeURIComponent(e.target.value)}`);
        }}
          className=" px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
         {category.map(item=>(
            <option key={item} value={item}>{item}</option>
         ))}
        </select>
      </div>
    </div>
  )
}
