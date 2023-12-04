function ProductRow({ products, query, stock }) {
  const filtered = products
    .filter((products) => {
      if (stock === true) {
        return products.inStock === true;
      } else {
        return products;
      }
    })
    .filter((products) => {
      return products.name.toLowerCase().includes(query.toLowerCase());
    });

  return (
    <div>
      <tbody>
        {filtered.map((product) => {
          return (
            <tr
              key={product.id}
              style={{ color: product.inStock ? 'black' : 'red' }}
            >
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
}

export default ProductRow;
