import WithAuth from './components/WithAuth';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Sort from './components/Sort';

function Home() {
  return (
    <div className="p-12">
            <div className="flex">
      <Filter/>
      <Sort className='m-2'/>
      </div>
      <ProductList number={0} />
    </div>
  );
}
export default Home;
