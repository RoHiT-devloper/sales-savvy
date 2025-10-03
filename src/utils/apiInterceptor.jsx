// src/utils/apiInterceptor.js
import { mockApi } from '../services/mockApi';

// Check if we're in demo mode (Netlify deployment)
const isDemoMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' || 
                   window.location.hostname.includes('netlify.app');

export const apiInterceptor = {
  get: async (url) => {
    if (!isDemoMode) {
      // In production with real backend
      const response = await fetch(url);
      return await response.json();
    }
    
    // Demo mode - use mock data
    console.log(`[MOCK API] GET ${url}`);
    
    if (url.includes('/getAllProducts')) {
      return mockApi.getAllProducts();
    }
    if (url.includes('/api/auth/users')) {
      return mockApi.getAllUsers();
    }
    if (url.includes('/api/orders')) {
      return mockApi.getAllOrders();
    }
    if (url.includes('/api/cart/getCart')) {
      const username = new URL(url).searchParams.get('username');
      return mockApi.getCart(username);
    }
    if (url.includes('/api/wishlist/')) {
      const username = url.split('/').pop();
      return mockApi.getWishlist(username);
    }
    if (url.includes('/api/addresses/user/')) {
      const username = url.split('/').pop();
      return mockApi.getAddresses(username);
    }
    if (url.includes('/api/reviews/product/')) {
      const productId = url.split('/').pop();
      return mockApi.getProductReviews(productId);
    }
    if (url.includes('/api/reviews/summary/')) {
      const productId = url.split('/').pop();
      return mockApi.getRatingSummary(productId);
    }
    
    throw new Error(`Mock API endpoint not found: ${url}`);
  },

  post: async (url, data) => {
    if (!isDemoMode) {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await response.json();
    }
    
    console.log(`[MOCK API] POST ${url}`, data);
    
    if (url.includes('/api/auth/signin')) {
      return mockApi.signIn(data);
    }
    if (url.includes('/api/auth/signup')) {
      return mockApi.signUp(data);
    }
    if (url.includes('/addProduct')) {
      return mockApi.addProduct(data);
    }
    if (url.includes('/updateProduct')) {
      return mockApi.updateProduct(data);
    }
    if (url.includes('/addToCart')) {
      return mockApi.addToCart(data);
    }
    
    throw new Error(`Mock API endpoint not found: ${url}`);
  },

  put: async (url, data) => {
    if (!isDemoMode) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await response.json();
    }
    
    console.log(`[MOCK API] PUT ${url}`, data);
    
    if (url.includes('/api/orders/') && url.includes('/status')) {
      const orderId = url.split('/')[4];
      return mockApi.updateOrderStatus(orderId, data.status);
    }
    
    throw new Error(`Mock API endpoint not found: ${url}`);
  },

  delete: async (url) => {
    if (!isDemoMode) {
      const response = await fetch(url, { method: 'DELETE' });
      return await response.text();
    }
    
    console.log(`[MOCK API] DELETE ${url}`);
    
    if (url.includes('/deleteProduct')) {
      const productId = new URL(url).searchParams.get('id');
      return mockApi.deleteProduct(productId);
    }
    if (url.includes('/api/auth/users/')) {
      const userId = url.split('/').pop();
      return mockApi.deleteUser(userId);
    }
    
    throw new Error(`Mock API endpoint not found: ${url}`);
  }
};