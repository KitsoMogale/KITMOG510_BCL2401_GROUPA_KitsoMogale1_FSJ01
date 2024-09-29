'use client'
import { useState } from "react"
import { useContext } from 'react';
import { SearchContext } from "./SearchProvider";
import { useRouter } from 'next/navigation';

export const SearchBar=()=>{
  const router = useRouter();
  const {search,setSearch} = useContext(SearchContext);
  const [title,setTitle] = useState('')
  
  const handleSearch = () => {
    setSearch(title);
          
          // Pushes a new path with query parameters to the URL
          router.push(`/search?title=${encodeURIComponent(title)}`);

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





