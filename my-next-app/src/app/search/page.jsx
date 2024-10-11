'use client'
import React, { Suspense, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'next/navigation';
import Filter from '../components/Filter';
import Sort from '../components/Sort';

export default function Search() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchParams = useSearchParams();

    const search = searchParams.get('title');
    const filter = searchParams.get('category');
    const sort = searchParams.get('order');
    console.log(search)
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
                const response = await fetch(`http://localhost:3000/api/products?${queryParams.toString()}`);
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
    }, [search, filter, sort]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Suspense fallback={<p>Loading search...</p>}>
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
        </Suspense>
    );
}
