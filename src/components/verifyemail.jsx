import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Verifyemail = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/user/verify', { token });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      console.log(token);
      verifyEmail();
    }
  }, [token]);

  return (
    <div>
      <h1>Verify Email</h1>
      <p>{token}</p>
    </div>
  );
};

export default Verifyemail;