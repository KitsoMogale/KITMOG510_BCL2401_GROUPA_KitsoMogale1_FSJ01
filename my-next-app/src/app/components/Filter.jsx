"use client"
import React from 'react'
import { useState,useEffect } from 'react';

export default function Filter() {
    const [category, setCategory] = useState([]);
    const [cat,setCat] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
          setLoading(true);
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
          onChange={(e) => setCat(e.target.value)}
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
