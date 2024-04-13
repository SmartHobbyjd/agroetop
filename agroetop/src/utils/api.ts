import axios from 'axios';
import store from '@/stores/authSlice';

const api = axios.create({
  baseURL: 'https://alphabyteinnovations.com', 
});

export const loginUser = async (usernameOrEmail: string, password: string) => {
  try {
    const response = await axios.post('/auth/login', { usernameOrEmail, password });

    // Check that the 'token' property exists
    if (!response.data.token) {
      throw new Error('Login failed: Token not found in the response'); // Specific Error
    } 

    return {
      token: response.data.token,
      expiresIn: response.data.expiresIn 
    }; 
  } catch (error) {
    if (error.response) {
      // API returns an error response (e.g., 401 Unauthorized)
      if (error.response.status === 401) {
        throw new Error('Invalid username or password');  
      } else { 
        // Handle other status codes (500, etc.)
        throw new Error(`Server Error: ${error.response.status}`); 
      }
    } else {
      // Network error or something else
      throw new Error('Could not connect to the server'); 
    }
  }
  export const refreshToken = async () => { 
    const state = store.getState();
    const expiredToken = state.auth.token; 
  
    try {
      const response = await axios.post('/auth/refresh', { expiredToken });
  
      // Customize based on your API's response 
      if (response.data.success) {
        return {
          newToken: response.data.token,
          newExpiration: response.data.expiresIn, // If your API provides it
        };
      } else {
        throw new Error('Could not refresh token'); // Update error if needed
      } 
    } catch (error) {
       // ... handle refresh errors (see below) ...
    }
  };
};
