'use client'
// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Optional, for redirecting

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    // Mock API call or Firebase authentication check
   console.log(localStorage.getItem('isLoggedIn'))

    const checkUserLoggedIn = async () => {
      // Simulate a call to the auth service to get user data
      const loggedInUser = localStorage.getItem('isLoggedIn');
      setUser(loggedInUser);
    };

    checkUserLoggedIn();
  }, []);

  const login = (userData) => {
    setUser(userData); // Set the user data when logged in
  };

  const logout = () => {
    console.log("loggedout")
    setUser(false); // Clear the user data when logged out
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => { return useContext(AuthContext)};
