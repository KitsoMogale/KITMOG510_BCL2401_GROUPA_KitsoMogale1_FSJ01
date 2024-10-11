'use client';  // Mark the component as a client-side component
import React, { Suspense, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'next/navigation';
import Filter from '../components/Filter';
import Sort from '../components/Sort';

export default function Search() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchParams = useSearchParams(); // Safe to use on client
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    useEffect(() => {
        // Only execute on the client side (Next.js ensures it here)
        if (searchParams) {
            setSearch(searchParams.get('title') || '');
            setFilter(searchParams.get('category') || '');
            setSort(searchParams.get('order') || '');
        }
    }, [searchParams]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null); // Reset error state
            const queryParams = new URLSearchParams();

            if (search && search.trim()) {
                queryParams.append('search', search.trim());
            }

            if (filter && filter.trim()) {
                queryParams.append('category', filter.trim());
            }

            if (sort && sort.trim()) {
                queryParams.append('order', sort.trim());
            }

            try {
                const response = await fetch(`https://tranquil-cactus-a90f1e.netlify.app/api/products?${queryParams.toString()}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [search, filter, sort]); // Fetch products when search, filter, or sort change

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
       
            <div className="p-12">
                <div className="flex">
                    <Filter />
                    <Sort className="m-2" />
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.length > 0 && products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
    );
}
