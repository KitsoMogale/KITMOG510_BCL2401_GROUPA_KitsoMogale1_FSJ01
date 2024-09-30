'use client'
import { createContext } from "react"
import { useState } from "react";


// Create context
export const FilterContext = createContext();
export const SortContext = createContext()

export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState("");
  
    return (
      <FilterContext.Provider value={{ filter, setFilter }}>
        {children}
      </FilterContext.Provider>
    );
  };


  export const SortProvider = ({ children }) => {
    const [sort, setSort] = useState("");
  
    return (
      <SortContext.Provider value={{ sort, setSort }}>
        {children}
      </SortContext.Provider>
    );
  };