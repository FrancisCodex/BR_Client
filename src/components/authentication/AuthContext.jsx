import React, { createContext } from "react";

const AuthContext = createContext(null);

export { AuthContext };















// import React, { createContext, useState, useContext, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import Profile from "../protected/profile";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const authenticate = async () => {
//     // Implement your authentication logic here, e.g., by checking if the user is logged in.
//     // You can use a token stored in localStorage or cookies.
//     const token = localStorage.getItem("authToken");
//     console.log("token: ", token);
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     if (token) {
      
//       setIsAuthenticated(true);
//     }
//   };

//   useEffect(() => {
//     authenticate();
//     console.log("Authentication state2:", isAuthenticated);
//   }, []);

//   return (
//     <AuthContext.Provider value={isAuthenticated}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const ProtectedPage = () => {
//   const isAuthenticated = useContext(AuthContext);
//   console.log("Authentication State: ", isAuthenticated);

//   useEffect(() => {
//     // Re-render the component if the authentication state changes.
//     // This will ensure that the component is re-rendered after the
//     // `isAuthenticated` state variable is updated.
//   }, [isAuthenticated]);

//   if (!isAuthenticated) {
//     return <Navigate to="/auth/login" />;
//   }

//   return (
//     <div>
//       <Profile />
//     </div>
//   );
// };

// export { AuthProvider, ProtectedPage };