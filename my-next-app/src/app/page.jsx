import WithAuth from './components/WithAuth';
import ProductList from './components/ProductList';

function Home() {
  return (
    <div className="p-12">
      <ProductList number={0} />
    </div>
  );
}
export default Home;
