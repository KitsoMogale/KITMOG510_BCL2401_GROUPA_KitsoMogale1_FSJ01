'use client'
import { createContext,useContext } from "react"
import { useState } from "react";


// Create context
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [state, setState] = useState("");
  
    return (
      <SearchContext.Provider value={{ state, setState }}>
        {children}
      </SearchContext.Provider>
    );
  };