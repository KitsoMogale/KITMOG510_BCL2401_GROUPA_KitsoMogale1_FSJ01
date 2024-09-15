
import Link from "next/link";  // Use Next.js routing
import ProductList from "./components/ProductList";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <p>Hello World</p>

      {/* Use Suspense to render async components */}
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList number={0} />
      </Suspense>
    </>
  );
}

