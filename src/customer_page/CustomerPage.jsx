import React, { useState, useEffect } from 'react';
import { fakeProducts } from '../data/fakeData';

const CustomerPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use fake data directly
    setProducts(fakeProducts);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="customer-home">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.photo} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rs.{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerPage;