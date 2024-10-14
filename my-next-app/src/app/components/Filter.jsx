"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import {FilterContext, SortContext } from "./FilterProvider";
import { SearchContext } from "./SearchProvider";
import { useRouter } from 'next/navigation';

export default function Filter() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const [category, setCategory] = useState([]);
    const [cat,setCat] = useState('')
    const [error, setError] = useState(null);
    const {filter,setFilter} = useContext(FilterContext);
    const {search,setSearch} = useContext(SearchContext);
    const {sort,setSort}= useContext(SortContext);
    const router = useRouter();

    useEffect(() => {
        const fetchCategories = async () => {
          setError(null); // Reset error state
    
          try {
            const response = await fetch(`api/categories`);
            if (!response.ok) {
              throw new Error('Failed to fetch Categories');
            }
            const data = await response.json();
            // console.log(data)
            setCategory(data);
          } catch (err) {
            setError(err.message);
          } 
        };
    
          fetchCategories();
        
      }, []);

      // if (error) return <p>Error: {error}</p>;




  return (
    <div>
     <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          value={cat}
          onChange={(e) => {
            setCat(e.target.value);setFilter(e.target.value);
// Pushes a new path with query parameters to the URL
let query = '/search?';

if (search !== '') {
  query += `title=${encodeURIComponent(search)}&`;
}

query += `category=${encodeURIComponent(e.target.value)}&`; // category is always present since it's from e.target.value

if (sort !== '') {
  query += `order=${encodeURIComponent(sort)}`;
}

// Remove any trailing '&' or '?' if no parameters were appended
query = query.replace(/[&?]$/, '');

// Push the new query to the router
router.push(query);

        }}
          className=" px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={cat}>{cat!=''?cat:'Categories'}</option>
          <option value="">All Categories</option>
         {category.map(item=>(
            <option key={item} value={item}>{item}</option>
         ))}
        </select>
      </div>
    </div>
  )
}
