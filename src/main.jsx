import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './AuthStyles.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './main.css';

// Simple mock API initialization without separate file
const initializeMockAPI = () => {
  console.log('🚀 Mock API initialized - Using fake data for demonstration');
  
  // Create some basic fake data
  window.fakeProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 2999,
      description: "High-quality wireless headphones with noise cancellation",
      photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      category: "Electronics",
      reviews: ["Great sound quality!", "Comfortable for long use"],
      rating: 4.5
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 5999,
      description: "Advanced fitness tracker with heart rate monitoring",
      photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      category: "Electronics",
      reviews: ["Accurate tracking", "Good battery life"],
      rating: 4.3
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 899,
      description: "100% organic cotton t-shirt",
      photo: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      category: "Clothing",
      reviews: ["Soft fabric", "True to size"],
      rating: 4.7
    }
  ];

  // Override fetch function
  const originalFetch = window.fetch;
  window.fetch = function(url, options = {}) {
    // Mock API responses
    if (typeof url === 'string' && url.includes('localhost:8080')) {
      console.log('📡 Mock API intercepting:', url);
      
      return new Promise((resolve) => {
        setTimeout(() => {
          // Mock signin
          if (url.includes('/api/auth/signin') && options.method === 'POST') {
            const data = JSON.parse(options.body);
            if ((data.username === 'admin' && data.password === 'admin') || 
                (data.username === 'customer' && data.password === 'customer')) {
              resolve({
                ok: true,
                json: () => Promise.resolve({
                  success: true,
                  message: "Login successful!",
                  user: { 
                    username: data.username, 
                    role: data.username === 'admin' ? 'admin' : 'customer',
                    email: `${data.username}@salesavvy.com` 
                  },
                  products: data.username === 'customer' ? window.fakeProducts : []
                })
              });
            } else {
              resolve({
                ok: false,
                json: () => Promise.resolve({
                  success: false,
                  message: "Invalid credentials"
                })
              });
            }
            return;
          }

          // Mock get all products
          if (url.includes('/getAllProducts')) {
            resolve({
              ok: true,
              json: () => Promise.resolve(window.fakeProducts)
            });
            return;
          }

          // Mock other endpoints with simple responses
          resolve({
            ok: true,
            json: () => Promise.resolve([]),
            text: () => Promise.resolve("Mock API: Operation successful")
          });
        }, 300);
      });
    }
    
    // Use original fetch for other URLs
    return originalFetch.apply(this, arguments);
  };
};

// Initialize mock API
initializeMockAPI();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);