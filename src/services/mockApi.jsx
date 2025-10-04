// src/utils/mockApi.js
import { 
  fakeProducts, 
  fakeUsers, 
  fakeOrders, 
  fakeCartItems, 
  fakeWishlistItems,
  fakeAddresses,
  fakeAnalytics 
} from '../data/fakeData';

// Simple mock fetch function
const mockFetch = (url, options = {}) => {
  console.log('📡 Mock API Call:', url, options.method || 'GET');
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // Auth endpoints
        if (url.includes('/api/auth/signin') && options.method === 'POST') {
          const data = JSON.parse(options.body);
          
          if (data.username === 'admin' && data.password === 'admin') {
            resolve({
              ok: true,
              json: () => Promise.resolve({
                success: true,
                message: "Login successful!",
                user: { 
                  username: "admin", 
                  role: "admin", 
                  email: "admin@salesavvy.com" 
                }
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
                user: { 
                  username: "customer", 
                  role: "customer", 
                  email: "customer@example.com" 
                },
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

        // Signup
        if (url.includes('/api/auth/signup') && options.method === 'POST') {
          resolve({
            ok: true,
            json: () => Promise.resolve({
              success: true,
              message: "User registered successfully!"
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
        if (url.includes('/api/orders') && !url.includes('/status')) {
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

        // Get addresses
        if (url.includes('/api/addresses/user/')) {
          resolve({
            ok: true,
            json: () => Promise.resolve(fakeAddresses)
          });
          return;
        }

        // Get analytics
        if (url.includes('/admin/analytics')) {
          resolve({
            ok: true,
            json: () => Promise.resolve(fakeAnalytics)
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
          const productData = JSON.parse(options.body);
          fakeProducts.push({
            ...productData,
            id: fakeProducts.length + 1,
            reviews: productData.reviews || []
          });
          resolve({
            ok: true,
            text: () => Promise.resolve("Product added successfully!")
          });
          return;
        }

        // Delete product
        if (url.includes('/deleteProduct')) {
          const productId = new URL(url).searchParams.get('id');
          const index = fakeProducts.findIndex(p => p.id === parseInt(productId));
          if (index !== -1) {
            fakeProducts.splice(index, 1);
          }
          resolve({
            ok: true,
            text: () => Promise.resolve("Product deleted successfully!")
          });
          return;
        }

        // Update product
        if (url.includes('/updateProduct') && options.method === 'POST') {
          const productData = JSON.parse(options.body);
          const index = fakeProducts.findIndex(p => p.id === productData.id);
          if (index !== -1) {
            fakeProducts[index] = { ...fakeProducts[index], ...productData };
          }
          resolve({
            ok: true,
            text: () => Promise.resolve("Product updated successfully!")
          });
          return;
        }

        // Search product by ID
        if (url.includes('/searchProduct')) {
          const productId = new URL(url).searchParams.get('id');
          const product = fakeProducts.find(p => p.id === parseInt(productId));
          if (product) {
            resolve({
              ok: true,
              json: () => Promise.resolve(product)
            });
          } else {
            resolve({
              ok: false,
              text: () => Promise.resolve("Product not found")
            });
          }
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
          const userId = url.split('/').pop();
          const index = fakeUsers.findIndex(u => u.id === parseInt(userId));
          if (index !== -1) {
            fakeUsers.splice(index, 1);
          }
          resolve({
            ok: true,
            text: () => Promise.resolve("User deleted successfully!")
          });
          return;
        }

        // Forgot password endpoints
        if (url.includes('/api/auth/forgot-password') || 
            url.includes('/api/auth/verify-otp') || 
            url.includes('/api/auth/reset-password')) {
          resolve({
            ok: true,
            text: () => Promise.resolve("Operation completed successfully")
          });
          return;
        }

        // Default - endpoint not found
        console.warn('❌ Mock API endpoint not found:', url);
        resolve({
          ok: false,
          text: () => Promise.resolve(`Mock API endpoint not found: ${url}`)
        });

      } catch (error) {
        console.error('❌ Mock API error:', error);
        resolve({
          ok: false,
          text: () => Promise.resolve(`Mock API error: ${error.message}`)
        });
      }
    }, 300); // Simulate network delay
  });
};

// Override the global fetch function
export const initializeMockAPI = () => {
  const originalFetch = window.fetch;
  
  window.fetch = function(url, options) {
    // Use mock API for all backend calls
    if (typeof url === 'string' && (
        url.includes('localhost:8080') || 
        url.includes('/api/') || 
        url.includes('/getAllProducts') ||
        url.includes('/addProduct') ||
        url.includes('/deleteProduct') ||
        url.includes('/updateProduct') ||
        url.includes('/searchProduct') ||
        url.includes('/addToCart')
    )) {
      return mockFetch(url, options);
    }
    
    // Use original fetch for other URLs (CSS, images, etc.)
    return originalFetch.apply(this, arguments);
  };
  
  console.log('🚀 Mock API initialized - All backend calls will use fake data');
};