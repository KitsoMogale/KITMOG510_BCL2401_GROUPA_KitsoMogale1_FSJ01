'use client'
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import {FilterContext, SortContext } from "./FilterProvider";
import { SearchContext } from "./SearchProvider";
import { useRouter } from 'next/navigation';

export default function Sort() {


    const [sort1,setSort1] = useState('');
    const {filter,setFilter} = useContext(FilterContext);
    const {search,setSearch} = useContext(SearchContext);
    const {sort,setSort}= useContext(SortContext);
    const router = useRouter();

    return (
        <div>
         <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Sort</label>
            <select
              value={sort1}
              onChange={(e) => {
                setSort1(e.target.value);setSort(e.target.value);
               
       // Pushes a new path with query parameters to the URL
          let query = '/search?';

         if (search !== '') {
           query += `title=${encodeURIComponent(search)}&`;
          }

          if (filter !== '') {
           query += `category=${encodeURIComponent(filter)}&`;
        }

            query += `order=${e.target.value}`; // Add sortBy parameter, as it's always required

           // Remove any trailing '&' or '?' if no parameters were appended
         query = query.replace(/[&?]$/, '');

           // Push the new query to the router
           router.push(query);     

             
            }}
              className=" px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Default</option>
              <option value="desc">Descending</option>
              <option value="asc">Acsending</option>
            </select>
          </div>
        </div>
      )
}
