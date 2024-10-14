import WithAuth from './components/WithAuth';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Sort from './components/Sort';

function Home() {
  const zero = 0;
  return (
    <div className="p-12">
            <div className="flex">
      <Filter/>
      <Sort className='m-2'/>
      </div>
      <ProductList number={zero} />
    </div>
  );
}
export default Home;
