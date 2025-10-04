import React, { useState, useEffect } from 'react';

const CustomerPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use direct data or fetch from window object
    const sampleProducts = [
      {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 2999,
        description: "High-quality wireless headphones with noise cancellation",
        photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        category: "Electronics"
      },
      {
        id: 2,
        name: "Smart Fitness Watch",
        price: 5999,
        description: "Advanced fitness tracker with heart rate monitoring",
        photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        category: "Electronics"
      },
      {
        id: 3,
        name: "Organic Cotton T-Shirt",
        price: 899,
        description: "100% organic cotton t-shirt",
        photo: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        category: "Clothing"
      },
      {
        id: 4,
        name: "Stainless Steel Water Bottle",
        price: 1299,
        description: "Insulated stainless steel water bottle",
        photo: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
        category: "Lifestyle"
      }
    ];
    
    setProducts(sampleProducts);
    setLoading(false);
  }, []);

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading products...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Available Products</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px',
        marginTop: '20px'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            textAlign: 'center'
          }}>
            <img 
              src={product.photo} 
              alt={product.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#2c5aa0' }}>Rs.{product.price}</p>
            <button style={{
              background: '#2c5aa0',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerPage;