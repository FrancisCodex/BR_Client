import React, { createContext, useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Store user data

  const logout = () => {
    // Remove the user's token from localStorage
    localStorage.removeItem("authToken");

    // Redirect the user to the home page
    window.location.href = "/";
  };

  const authenticate = async () => {
    // Implement your authentication logic here, e.g., by checking if the user is logged in.
    // You can use a token stored in localStorage or cookies.
    const token = localStorage.getItem("authToken");
    if (token) {
      // If the user is authenticated, fetch their data from the server
      // Replace this with your actual API endpoint
      const userData = await fetchUserDataFromServer(); // Implement this function
      setUser(userData);
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProtectedPage = ({ children }) => {
  const isAuthenticated = useContext(AuthContext);
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  return <div>{children}</div>;
};

export { AuthProvider, ProtectedPage, AuthContext };
