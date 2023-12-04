function SearchBar({ setQuery, setInStock }) {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleInStock = (e) => {
    setInStock(e.target.checked);
  };

  return (
    <div className="SearchContainer">
      <p>Search</p>
      <input type="text" onChange={handleSearch} />
      <p>
        <input type="checkbox" onChange={handleInStock} /> Show only products in
        stock
      </p>
    </div>
  );
}

export default SearchBar;
