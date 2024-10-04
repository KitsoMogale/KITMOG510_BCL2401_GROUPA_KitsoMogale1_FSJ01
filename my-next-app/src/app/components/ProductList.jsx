import ProductCard from "./ProductCard";
import FetchProducts from "./FetchProducts";

export default async function ProductList(props) {
  const getProducts = async ()=>{

        
    const res = await fetch(`http://localhost:3000/api/products`, {
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
      }
    });

    const data = await res.json();

     return data
  }

  const products = props.data?props.data: await getProducts();

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


