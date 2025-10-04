import React from 'react';
import { Link } from 'react-router-dom';

const Admin_Home = () => {
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>Admin Dashboard</h1>
                <p>Manage your application efficiently</p>
            </div>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <Link to="/userManagement" style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    background: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '2em', marginBottom: '10px' }}>👥</div>
                    <h2>User Management</h2>
                    <p>Manage user accounts and permissions</p>
                </Link>
                
                <Link to="/productManager" style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    background: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '2em', marginBottom: '10px' }}>📦</div>
                    <h2>Product Management</h2>
                    <p>Manage product catalog and inventory</p>
                </Link>
                
                <Link to="/admin/orders" style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    background: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '2em', marginBottom: '10px' }}>🛒</div>
                    <h2>Order Management</h2>
                    <p>View and manage customer orders</p>
                </Link>
                
                <Link to="/admin/analytics" style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    background: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '2em', marginBottom: '10px' }}>📊</div>
                    <h2>Analytics Dashboard</h2>
                    <p>View sales reports and business insights</p>
                </Link>
            </div>
        </div>
    );
};

export default Admin_Home;