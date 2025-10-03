// src/utils/mockApi.js
import { fakeProducts, fakeUsers, fakeOrders, fakeCartItems, fakeWishlistItems } from '../data/fakeData';

// Simple mock fetch function
const mockFetch = (url, options = {}) => {
  console.log('Mock API Call:', url, options);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Auth endpoints
      if (url.includes('/api/auth/signin') && options.method === 'POST') {
        const data = JSON.parse(options.body);
        
        if (data.username === 'admin' && data.password === 'admin') {
          resolve({
            ok: true,
            json: () => Promise.resolve({
              success: true,
              message: "Login successful!",
              user: { username: "admin", role: "admin", email: "admin@salesavvy.com" }
            })
          });
          return;
        }
        
        if (data.username === 'customer' && data.password === 'customer') {
          resolve({
            ok: true,
            json: () => Promise.resolve({
              success: true,
              message: "Login successful!",
              user: { username: "customer", role: "customer", email: "customer@example.com" },
              products: fakeProducts
            })
          });
          return;
        }
        
        resolve({
          ok: false,
          json: () => Promise.resolve({
            success: false,
            message: "Invalid username or password"
          })
        });
        return;
      }

      // Get all products
      if (url.includes('/getAllProducts')) {
        resolve({
          ok: true,
          json: () => Promise.resolve(fakeProducts)
        });
        return;
      }

      // Get all users
      if (url.includes('/api/auth/users')) {
        resolve({
          ok: true,
          json: () => Promise.resolve(fakeUsers)
        });
        return;
      }

      // Get all orders
      if (url.includes('/api/orders')) {
        resolve({
          ok: true,
          json: () => Promise.resolve(fakeOrders)
        });
        return;
      }

      // Get cart
      if (url.includes('/api/cart/getCart')) {
        resolve({
          ok: true,
          json: () => Promise.resolve({
            username: 'customer',
            items: fakeCartItems,
            total: fakeCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
          })
        });
        return;
      }

      // Get wishlist
      if (url.includes('/api/wishlist/')) {
        resolve({
          ok: true,
          json: () => Promise.resolve(fakeWishlistItems)
        });
        return;
      }

      // Add to cart
      if (url.includes('/addToCart') && options.method === 'POST') {
        resolve({
          ok: true,
          text: () => Promise.resolve("Product added to cart successfully!")
        });
        return;
      }

      // Add product
      if (url.includes('/addProduct') && options.method === 'POST') {
        resolve({
          ok: true,
          text: () => Promise.resolve("Product added successfully!")
        });
        return;
      }

      // Delete product
      if (url.includes('/deleteProduct')) {
        resolve({
          ok: true,
          text: () => Promise.resolve("Product deleted successfully!")
        });
        return;
      }

      // Update product
      if (url.includes('/updateProduct') && options.method === 'POST') {
        resolve({
          ok: true,
          text: () => Promise.resolve("Product updated successfully!")
        });
        return;
      }

      // Update order status
      if (url.includes('/api/orders/') && url.includes('/status') && options.method === 'PUT') {
        resolve({
          ok: true,
          text: () => Promise.resolve("Order status updated successfully!")
        });
        return;
      }

      // Delete user
      if (url.includes('/api/auth/users/') && options.method === 'DELETE') {
        resolve({
          ok: true,
          text: () => Promise.resolve("User deleted successfully!")
        });
        return;
      }

      // Default - not found
      resolve({
        ok: false,
        text: () => Promise.resolve("Endpoint not found in mock API")
      });
    }, 500); // Simulate network delay
  });
};

// Override the global fetch function
const originalFetch = window.fetch;
window.fetch = function(url, options) {
  // Use mock API for all localhost calls
  if (url.includes('localhost:8080') || url.includes('/api/') || url.startsWith('/')) {
    return mockFetch(url, options);
  }
  // Use original fetch for other URLs
  return originalFetch.apply(this, arguments);
};

export const initializeMockAPI = () => {
  console.log('Mock API initialized - Using fake data for demonstration');
};