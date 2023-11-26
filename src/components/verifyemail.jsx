import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Verifyemail = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/user/verify', { token });
        console.log(response.data);
        toast.success("Email verified successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Email verification failed.");
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
      <ToastContainer />
    </div>
  );
};

export default Verifyemail;