'use client';  // Client-side component
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import Sort from '../components/Sort';

export default function Search({ title, category, order }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null); // Reset error state
            const queryParams = new URLSearchParams();

            if (title && title.trim()) {
                queryParams.append('search', title.trim());
            }

            if (category && category.trim()) {
                queryParams.append('category', category.trim());
            }

            if (order && order.trim()) {
                queryParams.append('order', order.trim());
            }

            try {
                const response = await fetch(`/api/products?${queryParams.toString()}`);
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
    }, [title, category, order]); // Fetch products when props change

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
