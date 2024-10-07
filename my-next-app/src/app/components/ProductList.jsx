import ProductCard from "./ProductCard";
import FetchProducts from "./FetchProducts";

export default async function ProductList(props) {
  const getProducts = async ()=>{
    console.log('123456789a')
    let data;
    try {
      const res = await fetch(`http://localhost:3000/api/products`);
      
      // Check if the response is OK (status 200-299)
      // console.log(res)
      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
       data = await res.json();
      // console.log(data, 'Fetched data successfully');
  } catch (error) {
      console.error('Failed to fetch products:', error);
  }
  
     return data
  }

  const products = props.data?props.data: await getProducts();
  // console.log(products,'2');

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      <FetchProducts number={props}/>
    </div>
  );

}


