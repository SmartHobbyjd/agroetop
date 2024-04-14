import axios from 'axios';
import { Dispatch } from 'redux';
import { loginSuccess } from '@/stores/authSlice';
import { RootState } from '@/stores/rootReducer'; 

const api = axios.create({
  baseURL: 'https://alphabyteinnovations.com',
});

export const loginUser = async (usernameOrEmail: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { usernameOrEmail, password });

    if (!response.data.token) {
      throw new Error('Login failed: Token not found in the response');
    }

    return {
      token: response.data.token,
      expiresIn: response.data.expiresIn,
    };
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        throw new Error('Invalid username or password');
      } else {
        throw new Error(`Server Error: ${error.response.status}`);
      }
    } else {
      throw new Error('Could not connect to the server');
    }
  }
};

export const refreshToken = async (dispatch: Dispatch, getState: () => RootState) => {
  const state = getState();
  const expiredToken = state.auth.token;

  try {
    const response = await api.post('/auth/refresh', { expiredToken });

    if (response.data.success) {
      dispatch(loginSuccess(response.data.token));
      return {
        newToken: response.data.token,
        newExpiration: response.data.expiresIn,
      };
    } else {
      throw new Error('Could not refresh token');
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw new Error('Could not refresh token');
  }
};
