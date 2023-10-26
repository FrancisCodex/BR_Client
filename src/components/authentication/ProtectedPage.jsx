import React, { useAuth } from "react";
import { Navigate } from "react-router-dom";

const ProtectedPages = ({ children }) => {
  const { authed } = useAuth();

  if (!authed) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedPages;
