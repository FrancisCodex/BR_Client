import React, { createContext, useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import instance from "../../hooks/useRefreshToken";
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticating, setAuthenticating] = useState(true);
  const [user, setUser] = useState(null); // Store user data


  const ROLE_COMBINATIONS = {
  GENERAL: ['admin', 'owner', 'user'],
  MANAGERS: ['admin', 'owner'],
  ADMIN: ['admin']
};

  const fetchUserData = async (accessToken) => {

    console.log("Fetching user Data: ", accessToken);
    try {
      // Decode the access token to get the user ID
      const decoded = jwtDecode(accessToken);
      console.log("What is the decoded token: ", decoded);
      const response = await instance.get('/api/userdata');
  
      if (response.status === 200) {

        const data = response.data;
        console.log('User data:', data);
        setUser(data.user);
        return data.user;
      } else {
        console.error('Error fetching user data');
        // Add error handling code here
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Add error handling code here
    }
  };

  const login = async (formData) => {
    try {
      const response = await axios.post("http://localhost:8080/api/user/login", formData);
      const token = response.data.token;
      const accessToken = response.data.accessToken;
      const decodedToken = jwtDecode(token);

      if (response.status === 200) {
        Cookies.set('token', token, { expires: 7 });
        localStorage.setItem('accessToken', accessToken);
        console.log('login successfully');

        const userData = await fetchUserData(accessToken);
        setUser(userData);
        setIsAuthenticated(true);

        return decodedToken;
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Wrong email or password.');
      } else {
        throw new Error('An error occurred.');
      }
    }
  };
  
  


  const logout = async () => {
    try {
      Cookies.remove('token');
      localStorage.removeItem('accessToken');
      
      // Make a request to the server to log out
      await axios.post('http://localhost:8080/api/user/logout');
      console.log('Logout successful');

  
      setIsAuthenticated(false);
      // Redirect the user to the home page
      window.location.href = "/";
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  

  const authenticate = async () => {

    console.log("Authenticating...");
    //using localstorage to put token and retrieve token
    const token = Cookies.get('token');
    const accessToken = localStorage.getItem('accessToken');
    console.log("Token in the authenticate: ", accessToken);
    if (accessToken) {
      const userData = await fetchUserData(accessToken);
      setUser(userData);
      console.log("Is this setting the correct user?: ", userData);
      setIsAuthenticated(true);
      console.log("Authentication state2: ", isAuthenticated);
    }
    setAuthenticating(false); 
  };

  useEffect(() => {
    authenticate();
  }, []);
  
  if(authenticating){
   return <div>Loading....</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, login, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProtectedPage = ({ children }) => {
  const isAuthenticated = useContext(AuthContext).isAuthenticated;
  const token = Cookies.get('token');

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }
  
  return <div>{children}</div>;
};

export { AuthProvider, ProtectedPage, AuthContext };
