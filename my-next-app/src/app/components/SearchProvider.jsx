'use client'
import { createContext } from "react"
import { useState } from "react";


// Create context
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
  
    return (
      <SearchContext.Provider value={{ search, setSearch }}>
        {children}
      </SearchContext.Provider>
    );
  };