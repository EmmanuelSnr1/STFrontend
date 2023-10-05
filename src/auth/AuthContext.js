import React, { createContext, useState, useReducer, useContext } from 'react';

export const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        default:
            return state;
    }
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return context;
};

export const AuthContextProvider = ({ children }) => {

    // Retrieve the user data from localStorage
    const storedUser = localStorage.getItem('user');
    
    // Check if storedUser is defined before trying to parse it
    const initialUser = (storedUser && storedUser !== "undefined") ? JSON.parse(storedUser) : null;

    // Use initialUser as the initial state for the user
    const [state, dispatch] = useReducer(authReducer, {
        user: initialUser
    });
    

    const logout = () => {
        // Remove user data from local storage
        localStorage.removeItem('user');
        // Dispatch logout action
        dispatch({ type: 'LOGOUT' });
    };

    console.log('AuthContext State:', state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
