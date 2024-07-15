import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePoints } from './pointsContext';
import { useCart } from './CartContext'; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const { emptyCart } = useCart();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { setPoints } = usePoints(); // Ensure this is correctly imported and used

    useEffect(() => {
        const storedAuth = JSON.parse(localStorage.getItem('isAuthenticated')) || false;
        setIsAuthenticated(storedAuth);
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
    };

    const logout = () => {
        console.log('Logging out...'); // Debugging line
        setIsAuthenticated(false);
        emptyCart();
        localStorage.setItem('isAuthenticated', JSON.stringify(false));
        setPoints(0); // Reset points to zero
        localStorage.setItem('points', JSON.stringify(0)); // Reset points in localStorage as well
        console.log('Points after logout:', 0); // Debugging line
    };
    

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
