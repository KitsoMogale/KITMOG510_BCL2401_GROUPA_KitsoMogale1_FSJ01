import ProductCard from "./ProductCard";
import FetchProducts from "./FetchProducts";

export default async function ProductList(props) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const getProducts = async ()=>{
    // console.log('123456789a');
    let data;
    try {
      const res = await fetch(`${apiUrl}/api/products`,);
      
      // Check if the response is OK (status 200-299)
     // console.log(res)
      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }
      
       data = await res.json();
      console.log(data.products[0], 'Fetched data successfully');
  } catch (error) {
      console.error('Failed to fetch products2:', error);
  }
  
     return data
  }
 //console.log(props.data)
  const products = props.data.products.length>0?props.data: await getProducts();
 console.log( products.products[0],'2');

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      <FetchProducts number={props.number}/>
    </div>
  );
}


