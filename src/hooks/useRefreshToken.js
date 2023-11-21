import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';

// Create an Axios instance for regular requests
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-Type': 'application/json' }
});

// Create a separate Axios instance for refreshing the token
const refreshInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

// Test function
async function test() {
    console.log("test function called");
    try {
    const response = await refreshInstance.get('/api/user/test', { withCredentials: true });
      console.log('Test response:', response.cookies);
    } catch (error) {
      console.error('Test request failed:', error);
    }
  }
  
  // Call the test function
  test();

// Function to check if the token is expired
function isTokenExpired(token) {
  const decoded = jwtDecode(token);
  console.log("what is the token in tokenexpired: ", token);
  console.log("what is the decoded in tokenexpired: ", decoded);
  if (decoded.exp < Date.now() / 1000) {
    return true;
  }else{
    console.log("Token is not yet expired")
    return false;
  }
}

// Add a request interceptor to the regular Axios instance
instance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem('accessToken');
    console.log('Token before check: ', token);

    // Check if token is expired
    if (isTokenExpired(token)) {
      console.log('Token is expired, refreshing...');

    
        // Refresh the token using the separate Axios instance
        const response = await refreshInstance.get('/api/user/refresh' , { withCredentials: true });

        console.log("the response: ", response)

        if (response.status === 200) {
          token = response.data.accessToken;

          console.log("New token: " , token);

          // Store the new access token
          localStorage.setItem('accessToken', token);

          // Update the Authorization header with the new token
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          console.error('Failed to refresh token, status code:', response.status);
        }
    
    } else {
      console.log('Token is not expired');

      // If token is not expired, set the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error('Request failed:', error);
    return Promise.reject(error);
  }
);

export default instance;