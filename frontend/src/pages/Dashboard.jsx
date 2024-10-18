//src / components / Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/authContext';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;