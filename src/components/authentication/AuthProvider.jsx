import React, { createContext, useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticating, setAuthenticating] = useState(true);
  const [user, setUser] = useState(null); // Store user data

  const logout = () => {
    // Remove the user's token from localStorage
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    // Redirect the user to the home page
    window.location.href = "/";
  };

  const authenticate = async () => {

    console.log("Authenticating...");
    //using localstorage to put token and retrieve token
    const token = localStorage.getItem("authToken");
    console.log("Token: ", token);
    if (token) {
      // const userData = await fetchUserDataFromServer(); // this function is to get user information of the user who logged in
      // setUser(userData);
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
    <AuthContext.Provider value={{ isAuthenticated, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProtectedPage = ({ children }) => {
  const isAuthenticated = useContext(AuthContext).isAuthenticated;
  const token = localStorage.getItem("authToken");

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  console.log("authentication state: ", isAuthenticated);

  return <div>{children}</div>;
};

export { AuthProvider, ProtectedPage, AuthContext };
