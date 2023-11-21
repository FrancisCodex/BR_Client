import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Verifyemail = () => {
    const location = useLocation();
    const token = new URLSearchParams(location.search).get('token');


  return (
    <div>
      <h1>Verify Email</h1>
      <p>{token}</p>
    </div>
  )
}

export default Verifyemail