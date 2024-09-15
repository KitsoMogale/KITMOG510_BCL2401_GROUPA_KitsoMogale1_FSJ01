
import Link from "next/link";  // Use Next.js routing
import ProductList from "./components/ProductList";
import { Suspense } from "react";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="p-12">
       

      {/* Use Suspense to render async components */}
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList  number={0} />
      </Suspense>
    </div>
    </>
  );
}

