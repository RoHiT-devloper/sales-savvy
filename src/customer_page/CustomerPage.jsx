import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CustomerPage.css'; // Separate CSS file

const CustomerPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [notification, setNotification] = useState(null);

  // Sample products data
  const sampleProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 2999,
      description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
      photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      category: "Electronics",
      rating: 4.5,
      reviews: 125,
      features: ["Noise Cancellation", "30hr Battery", "Quick Charge"]
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 5999,
      description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone notifications. Track your health in style.",
      photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      category: "Electronics",
      rating: 4.3,
      reviews: 89,
      features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant"]
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 899,
      description: "100% organic cotton t-shirt, comfortable and eco-friendly. Available in multiple colors and sizes.",
      photo: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      category: "Clothing",
      rating: 4.7,
      reviews: 234,
      features: ["100% Organic", "Eco-Friendly", "Multiple Colors"]
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      price: 1299,
      description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      photo: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      category: "Lifestyle",
      rating: 4.8,
      reviews: 167,
      features: ["24hr Cold", "12hr Hot", "Leak Proof"]
    },
    {
      id: 5,
      name: "Professional Camera Backpack",
      price: 4599,
      description: "Water-resistant camera backpack with customizable compartments for all your photography gear.",
      photo: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      category: "Photography",
      rating: 4.6,
      reviews: 78,
      features: ["Water Resistant", "Customizable", "Padded Protection"]
    },
    {
      id: 6,
      name: "Wireless Phone Charger",
      price: 1599,
      description: "Fast wireless charging pad compatible with all Qi-enabled devices with safety features.",
      photo: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
      category: "Electronics",
      rating: 4.4,
      reviews: 203,
      features: ["Fast Charging", "Universal Compatibility", "Safety Certified"]
    },
    {
      id: 7,
      name: "Yoga Mat Premium",
      price: 2499,
      description: "Non-slip yoga mat with excellent cushioning and alignment guides for perfect poses.",
      photo: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
      category: "Fitness",
      rating: 4.9,
      reviews: 156,
      features: ["Non-Slip", "Eco-Friendly", "Alignment Guides"]
    },
    {
      id: 8,
      name: "Ceramic Coffee Mug Set",
      price: 1799,
      description: "Set of 4 beautiful ceramic mugs, dishwasher and microwave safe with elegant design.",
      photo: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400",
      category: "Home & Kitchen",
      rating: 4.5,
      reviews: 89,
      features: ["Set of 4", "Dishwasher Safe", "Elegant Design"]
    }
  ];

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setProducts(sampleProducts);
      
      // Initialize quantities
      const initialQuantities = {};
      sampleProducts.forEach(product => {
        initialQuantities[product.id] = 1;
      });
      setQuantities(initialQuantities);
      
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Show notification
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleQuantityChange = (productId, change) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change)
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex > -1) {
      // Update quantity if already in cart
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      // Add new item to cart
      setCartItems(prev => [...prev, { ...product, quantity }]);
    }
    
    showNotification(`Added ${quantity} ${product.name} to cart!`, 'success');
  };

  const handleAddToWishlist = (product) => {
    if (wishlistItems.find(item => item.id === product.id)) {
      setWishlistItems(prev => prev.filter(item => item.id !== product.id));
      showNotification(`Removed ${product.name} from wishlist`, 'info');
    } else {
      setWishlistItems(prev => [...prev, product]);
      showNotification(`Added ${product.name} to wishlist!`, 'success');
    }
  };

  const isInCart = (productId) => cartItems.some(item => item.id === productId);
  const isInWishlist = (productId) => wishlistItems.some(item => item.id === productId);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(products.map(product => product.category))];

  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (loading) {
    return (
      <div className="customer-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading amazing products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="customer-container">
      {/* Notification System */}
      {notification && (
        <div className={`notification notification-${notification.type}`}>
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)}>×</button>
        </div>
      )}

      {/* Welcome Header */}
      <div className="welcome-header">
        <div className="welcome-content">
          <h1>
            Welcome to <span className="username-highlight">SalesSavvy</span>
          </h1>
          <p className="welcome-subtitle">Discover amazing products at unbeatable prices</p>
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
            <div className="stat-card">
              <span className="stat-number">Rs.{cartTotal}</span>
              <span className="stat-label">Cart Total</span>
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
            placeholder="Search products by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              className="clear-search-btn"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
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
        {(searchTerm || selectedCategory !== 'all') && (
          <button 
            className="clear-filters-btn"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
          >
            Clear All Filters
          </button>
        )}
      </div>

      {/* Products Grid */}
      <div className="customer-products-grid">
        {filteredProducts.length === 0 ? (
          <div className="empty-products">
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <h3>No Products Found</h3>
              <p>We couldn't find any products matching your criteria.</p>
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Show All Products
              </button>
            </div>
          </div>
        ) : (
          filteredProducts.map(product => {
            const quantity = quantities[product.id] || 1;
            const totalPrice = product.price * quantity;
            const productInCart = isInCart(product.id);
            const productInWishlist = isInWishlist(product.id);

            return (
              <div key={product.id} className="customer-card">
                {/* Product Image Section */}
                <div className="product-image-section">
                  <div className="customer-image">
                    {product.photo ? (
                      <img 
                        src={product.photo} 
                        alt={product.name}
                        loading="lazy"
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
                  <div className="product-rating">
                    <span className="rating-stars">{"⭐".repeat(Math.floor(product.rating))}</span>
                    <span className="rating-text">({product.reviews})</span>
                  </div>
                </div>

                {/* Product Details Section */}
                <div className="product-details-section">
                  <div className="product-header">
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <div className="product-features">
                        {product.features?.slice(0, 2).map((feature, index) => (
                          <span key={index} className="feature-tag">✓ {feature}</span>
                        ))}
                      </div>
                    </div>
                    <div className="product-price">
                      <span className="price">Rs.{product.price.toLocaleString()}</span>
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
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(product.id, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-status">
                      <div className="cart-indicator">
                        {productInCart && (
                          <span className="cart-badge">In Cart</span>
                        )}
                        <div className="total-price">
                          <span className="total-label">Total:</span>
                          <span className="total-amount">Rs.{totalPrice.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="action-buttons">
                      <button 
                        className={`customer-add-to-cart ${productInCart ? 'in-cart' : ''}`}
                        onClick={() => handleAddToCart(product)}
                        disabled={productInCart}
                      >
                        {productInCart ? (
                          <>
                            <span className="check-icon">✓</span>
                            Added to Cart
                          </>
                        ) : (
                          `Add to Cart (${quantity})`
                        )}
                      </button>
                      <button 
                        className={`wishlist-btn ${productInWishlist ? 'in-wishlist' : ''}`}
                        onClick={() => handleAddToWishlist(product)}
                        aria-label={productInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        {productInWishlist ? '❤️' : '🤍'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="section-header">
          <h2>Why Shop With SalesSavvy?</h2>
          <p>Experience the best in online shopping with our premium features</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>Free delivery on orders above Rs. 999</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>100% secure payment processing</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">↩️</div>
            <h3>Easy Returns</h3>
            <p>30-day return policy on all items</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;