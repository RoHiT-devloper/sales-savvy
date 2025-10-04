import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CustomerPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const sampleProducts = [
      {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 2999,
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life",
        photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        category: "Electronics",
        rating: 4.5,
        reviews: 125
      },
      {
        id: 2,
        name: "Smart Fitness Watch",
        price: 5999,
        description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone notifications",
        photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        category: "Electronics",
        rating: 4.3,
        reviews: 89
      },
      {
        id: 3,
        name: "Organic Cotton T-Shirt",
        price: 899,
        description: "100% organic cotton t-shirt, comfortable and eco-friendly. Available in multiple colors",
        photo: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        category: "Clothing",
        rating: 4.7,
        reviews: 234
      },
      {
        id: 4,
        name: "Stainless Steel Water Bottle",
        price: 1299,
        description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours",
        photo: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
        category: "Lifestyle",
        rating: 4.8,
        reviews: 167
      },
      {
        id: 5,
        name: "Professional Camera Backpack",
        price: 4599,
        description: "Water-resistant camera backpack with customizable compartments for all your photography gear",
        photo: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        category: "Photography",
        rating: 4.6,
        reviews: 78
      },
      {
        id: 6,
        name: "Wireless Phone Charger",
        price: 1599,
        description: "Fast wireless charging pad compatible with all Qi-enabled devices with safety features",
        photo: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
        category: "Electronics",
        rating: 4.4,
        reviews: 203
      }
    ];
    
    setProducts(sampleProducts);
    
    // Initialize quantities
    const initialQuantities = {};
    sampleProducts.forEach(product => {
      initialQuantities[product.id] = 1;
    });
    setQuantities(initialQuantities);
    
    setLoading(false);
  }, []);

  const handleQuantityChange = (productId, change) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change)
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    setCartItems(prev => [...prev, { ...product, quantity }]);
    
    // Show success notification (you can implement this)
    console.log(`Added ${quantity} ${product.name} to cart`);
  };

  const handleAddToWishlist = (product) => {
    if (wishlistItems.find(item => item.id === product.id)) {
      setWishlistItems(prev => prev.filter(item => item.id !== product.id));
    } else {
      setWishlistItems(prev => [...prev, product]);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(products.map(product => product.category))];

  if (loading) {
    return (
      <div className="customer-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="customer-container">
      {/* Welcome Header */}
      <div className="welcome-header">
        <div className="welcome-content">
          <h1>
            Welcome to <span className="username-highlight">SalesSavvy</span>
          </h1>
          <p className="welcome-subtitle">Discover amazing products at great prices</p>
        </div>
        
        <div className="header-actions">
          <div className="welcome-stats">
            <div className="stat-card">
              <span className="stat-number">{products.length}</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{cartItems.length}</span>
              <span className="stat-label">In Cart</span>
            </div>
          </div>
          
          <div className="action-icons-container">
            <Link to="/wishlist" className="wishlist-icon-container">
              <div className="wishlist-icon">
                ❤️
                {wishlistItems.length > 0 && (
                  <span className="wishlist-count-badge">{wishlistItems.length}</span>
                )}
              </div>
              <span className="wishlist-label">Wishlist</span>
            </Link>
            
            <Link to="/cart" className="view-cart-container">
              <div className="view-cart-icon">
                🛒
                {cartItems.length > 0 && (
                  <span className="cart-count-badge">{cartItems.length}</span>
                )}
              </div>
              <span className="view-cart-label">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="customer-search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-container">
          <span className="filter-icon">📂</span>
          <select
            className="customer-category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Summary */}
      <div className="results-summary">
        <p>
          Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products
          {searchTerm && ` for "${searchTerm}"`}
          {selectedCategory !== 'all' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Products Grid */}
      <div className="customer-products-grid">
        {filteredProducts.length === 0 ? (
          <div className="empty-products">
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <h3>No Products Found</h3>
              <p>Try adjusting your search or filter criteria</p>
              {(searchTerm || selectedCategory !== 'all') && (
                <button 
                  className="clear-filters-btn"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        ) : (
          filteredProducts.map(product => {
            const quantity = quantities[product.id] || 1;
            const totalPrice = product.price * quantity;
            const isInWishlist = wishlistItems.find(item => item.id === product.id);
            const isInCart = cartItems.find(item => item.id === product.id);

            return (
              <div key={product.id} className="customer-card">
                {/* Product Image Section */}
                <div className="product-image-section">
                  <div className="customer-image">
                    {product.photo ? (
                      <img 
                        src={product.photo} 
                        alt={product.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className="image-placeholder"
                      style={{display: product.photo ? 'none' : 'flex'}}
                    >
                      📷
                    </div>
                  </div>
                  <div className="product-badge">
                    {product.category}
                  </div>
                </div>

                {/* Product Details Section */}
                <div className="product-details-section">
                  <div className="product-header">
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                    </div>
                    <div className="product-price">
                      <span className="price">Rs.{product.price}</span>
                      <span className="price-unit">per item</span>
                    </div>
                  </div>

                  {/* Product Controls Section */}
                  <div className="product-controls-section">
                    <div className="quantity-section">
                      <span className="quantity-label">Quantity:</span>
                      <div className="customer-quantity">
                        <button 
                          onClick={() => handleQuantityChange(product.id, -1)}
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(product.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-status">
                      <div className="cart-indicator">
                        {isInCart && (
                          <span className="cart-badge">In Cart</span>
                        )}
                        <div className="total-price">
                          <span className="total-label">Total:</span>
                          <span className="total-amount">Rs.{totalPrice}</span>
                        </div>
                      </div>
                    </div>

                    <div className="action-buttons">
                      <button 
                        className={`customer-add-to-cart ${isInCart ? 'in-cart' : ''}`}
                        onClick={() => handleAddToCart(product)}
                      >
                        {isInCart ? '✓ Added to Cart' : `Add to Cart (${quantity})`}
                      </button>
                      <button 
                        className={`wishlist-btn ${isInWishlist ? 'in-wishlist' : ''}`}
                        onClick={() => handleAddToWishlist(product)}
                      >
                        {isInWishlist ? '❤️' : '🤍'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Order History Section (Optional - can be removed if not needed) */}
      <div className="order-history-section">
        <div className="section-header">
          <h2>Why Shop With Us?</h2>
          <p>Experience the best in online shopping</p>
        </div>
        <div className="orders-list">
          <div className="order-card">
            <div className="order-header">
              <div className="order-info">
                <h3>Fast & Free Shipping</h3>
                <p className="order-date">Delivery within 2-3 business days</p>
              </div>
              <div className="order-status">
                <span className="status-badge delivered">Free</span>
              </div>
            </div>
          </div>
          
          <div className="order-card">
            <div className="order-header">
              <div className="order-info">
                <h3>Secure Payments</h3>
                <p className="order-date">100% secure payment processing</p>
              </div>
              <div className="order-status">
                <span className="status-badge delivered">Protected</span>
              </div>
            </div>
          </div>
          
          <div className="order-card">
            <div className="order-header">
              <div className="order-info">
                <h3>24/7 Support</h3>
                <p className="order-date">Round-the-clock customer service</p>
              </div>
              <div className="order-status">
                <span className="status-badge delivered">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;