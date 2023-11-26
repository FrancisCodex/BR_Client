import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import {jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';

const RoleCheck = ({ children, allowedRoles }) => {
  const token = Cookies.get('token');
  const decodedToken = jwtDecode(token);
  const userRole = decodedToken.role;

  console.log("what is the allowed roles: ", allowedRoles);

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RoleCheck;