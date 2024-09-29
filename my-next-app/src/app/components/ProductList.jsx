
import ProductCard from "./ProductCard";
import Link from "next/link"; 
import FetchProducts from "./FetchProducts";

export default async function ProductList(props) {



  const getProducts = async ()=>{

        
    const res = await fetch('https://next-ecommerce-api.vercel.app/products');

    const data = await res.json();

     return data
  }

  const products = props.data?props.data: await getProducts();

  if (!products) {
    return (
        <>
        
        <div className="flex items-center justify-center min-h-screen">
        <b>Loading...</b>
  <div className="w-12 h-12 border-4 border-t-2 border-gray-800 border-solid rounded-full animate-spin"></div>
</div>

   
    </>
    );
  }

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      <FetchProducts number={props}/>

    </>
  );
}


