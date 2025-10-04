

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './AuthStyles.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './main.css';

// Import and initialize mock API
import { initializeMockAPI } from './utils/mockApi';
initializeMockAPI();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);