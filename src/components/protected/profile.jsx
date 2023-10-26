import React, { useContext } from "react";
import { ProtectedPage } from "../authentication/AuthProvider"; // Import the ProtectedPage component
import {AuthContext} from "../authentication/AuthProvider"; // Import the AuthContext

const Profile = () => {
  const { logout } = useContext(AuthContext); // Access the logout function from the context

  const handleLogout = () => {
    // Clear the authentication state and remove the token from localStorage
    // You can do this by calling the logout function from the context
    logout();
    localStorage.removeItem("authToken");
  };

  return (
    <ProtectedPage>
      <div>
        <h1>User Profile</h1>
        <h1>This is only for authenticated users</h1>
        <button onClick={handleLogout} className="">Log out</button>
      </div>
    </ProtectedPage>
  );
};

export default Profile;
