// src/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from '@/utils/axiosConfigs';


const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await axiosInstance.get('/api/auth/user');
            setUser(response.data);
        } catch (error) {
            console.error('Authentication check failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axiosInstance.post('/api/auth/login', { email, password });
            setUser(response.data.user);
            localStorage.setItem('accessToken', response.data.accessToken);
            return response.data.user;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const register = async (name, email, password) => {
        try {
            const response = await axiosInstance.post('/api/auth/register', { name, email, password });
            setUser(response.data.user);
            localStorage.setItem('accessToken', response.data.accessToken);
            return response.data.user;
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await axiosInstance.post('/api/auth/logout');
            setUser(null);
            // localStorage.removeItem('accessToken');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const value = {
        user,
        login,
        register,
        logout,
        loading
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};


