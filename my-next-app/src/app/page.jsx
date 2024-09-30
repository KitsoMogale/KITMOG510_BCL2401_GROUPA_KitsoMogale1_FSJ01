
import Link from "next/link";  // Use Next.js routing
import ProductList from "./components/ProductList";
import { Suspense } from "react";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    
    <div className="p-12">
    
        <ProductList  number={0} />
    </div>
    </>
  );
}

