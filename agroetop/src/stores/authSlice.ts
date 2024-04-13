import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/stores/authSlice'; 
import { loginSuccess } from './authSlice'; 
import { refreshToken } from '@/utils/api';


export const store = configureStore({ 
    reducer: {
      auth: authReducer,
      // ... other reducers …
    },
  }); 

const initialState = {
  token: null,
//  userId: null,
  isLoggedIn: false,
  tokenExpiration: null,

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      //state.userId = action.payload.userId;
      state.isLoggedIn = true;
      state.tokenExpiration = Date.now() + (action.payload.expiresIn * 1000); 
    },
    logout(state) {
      // Reset to initial state for logout
      state = initialState; 
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;