import React from 'react';

const DemoBanner = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '12px 20px',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      borderBottom: '1px solid rgba(255,255,255,0.2)'
    }}>
      🚀 DEMO MODE - Using Sample Data | 
      <span style={{ margin: '0 15px' }}>Admin: <code>admin</code> / <code>admin</code></span>
      <span>Customer: <code>customer</code> / <code>customer</code></span>
    </div>
  );
};

export default DemoBanner;