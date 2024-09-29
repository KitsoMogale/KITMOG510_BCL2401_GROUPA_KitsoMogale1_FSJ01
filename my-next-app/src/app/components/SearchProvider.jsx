'use client'

import { createContext,useContext } from "react"
import { useState } from "react"

const searchContext = createContext();
export const SearchBar=()=>{

  const {title,setTitle} = useState('');
  
  const handleSearch = () => {
    console.log("Searching for:", title);
  };

    return(
        <div className="relative flex mx-4 max-w-md">
        <input
          type="text"
          onChange={(e)=>{setTitle(e.target.value)}}
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





