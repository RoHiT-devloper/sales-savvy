// src/utils/api.jsx - Updated version
import { apiInterceptor } from './apiInterceptor';

export const API_ENDPOINTS = {
  // Auth endpoints
  SIGNUP: '/api/auth/signup',
  SIGNIN: '/api/auth/signin',
  FORGOT_PASSWORD: '/api/auth/forgot-password',
  VERIFY_OTP: '/api/auth/verify-otp',
  RESET_PASSWORD: '/api/auth/reset-password',
  GET_USERS: '/api/auth/users',
  DELETE_USER: '/api/auth/users',
  
  // Product endpoints
  GET_ALL_PRODUCTS: '/getAllProducts',
  ADD_PRODUCT: '/addProduct',
  UPDATE_PRODUCT: '/updateProduct',
  DELETE_PRODUCT: '/deleteProduct',
  SEARCH_PRODUCT: '/searchProduct',
  
  // Cart endpoints
  GET_CART: '/api/cart/getCart',
  ADD_TO_CART: '/addToCart',
  UPDATE_CART: '/api/cart/update',
  REMOVE_FROM_CART: '/api/cart/remove',
  
  // Order endpoints
  SAVE_ORDER: '/api/orders/save',
  GET_ORDERS: '/api/orders',
  GET_USER_ORDERS: '/api/orders/user',
  UPDATE_ORDER_STATUS: '/api/orders',
  
  // Analytics
  GET_ANALYTICS: '/api/analytics',
  
  // Wishlist
  GET_WISHLIST: '/api/wishlist',
  
  // Addresses
  GET_ADDRESSES: '/api/addresses/user',
  
  // Reviews
  GET_PRODUCT_REVIEWS: '/api/reviews/product',
  GET_RATING_SUMMARY: '/api/reviews/summary'
};

// Helper function for API calls
export const apiCall = async (endpoint, options = {}) => {
  const fullUrl = `http://localhost:8080${endpoint}`;
  
  try {
    switch (options.method) {
      case 'POST':
        return await apiInterceptor.post(fullUrl, options.body);
      case 'PUT':
        return await apiInterceptor.put(fullUrl, options.body);
      case 'DELETE':
        return await apiInterceptor.delete(fullUrl);
      default:
        return await apiInterceptor.get(fullUrl);
    }
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Demo mode indicator
export const isDemoMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' || 
                         window.location.hostname.includes('netlify.app');