// src/components/DemoBanner.jsx
import React from 'react';
import './DemoBanner.css';

const DemoBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="demo-banner">
      <div className="demo-banner-content">
        <span className="demo-icon">🚀</span>
        <div className="demo-text">
          <strong>Demo Mode</strong>
          <span>This is a demonstration with sample data. No real transactions will occur.</span>
        </div>
        <button 
          className="demo-close-btn"
          onClick={() => setIsVisible(false)}
          aria-label="Close demo banner"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default DemoBanner;