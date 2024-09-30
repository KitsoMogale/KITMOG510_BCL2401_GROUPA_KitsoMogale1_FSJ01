'use client'
import { useState } from "react"
import { useContext } from 'react';
import { SearchContext } from "./SearchProvider";
import { useRouter } from 'next/navigation';
import {FilterContext, SortContext } from "./FilterProvider";

export const SearchBar=()=>{
  const router = useRouter();
  const {search,setSearch} = useContext(SearchContext);
  const [title,setTitle] = useState('')
  const {filter,setFilter} = useContext(FilterContext);
  const {sort,setSort}= useContext(SortContext);
  
  const handleSearch = () => {
    setSearch(title);
          
 // Pushes a new path with query parameters to the URL
let query = '/search?';

if (title !== '') {
  query += `title=${encodeURIComponent(title)}&`;
}

if (filter !== '') {
  query += `category=${encodeURIComponent(filter)}&`;
}

if (sort !== '') {
  query += `order=${encodeURIComponent(sort)}`;
}

// Remove any trailing '&' or '?' if no parameters were appended
query = query.replace(/[&?]$/, '');

// Push the new query to the router
router.push(query);
  

  };

    return(
     
        <div className="relative flex mx-4 max-w-md">
        <input
          type="text"
          onChange={(e)=>{console.log(e.target.value);setTitle(e.target.value)}}
          value={title}
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
          <button 
           onClick={() => handleSearch()}
           className=" px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
             Search
          </button>
      </div>
    )

}





