import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState('');
  const [inStock, setInStock] = useState(false);

  return (
    <div className="MainPageContainer">
      <h1>IronStore</h1>
      <SearchBar setQuery={setQuery} setInStock={setInStock} />
      <div><ProductTable products={products} query={query} stock={inStock} /></div>
    </div>
  );
}

export default ProductsPage;
