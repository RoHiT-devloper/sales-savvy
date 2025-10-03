import React from 'react';

const DemoBanner = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '10px 20px',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 'bold'
    }}>
      🚀 DEMO MODE - Using Sample Data | Admin: admin/admin | Customer: customer/customer
    </div>
  );
};

export default DemoBanner;