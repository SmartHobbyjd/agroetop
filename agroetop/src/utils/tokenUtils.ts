import store from '@/stores/authSlice';

export const isTokenExpired = () => {
  const state = store.getState();
  const expiration = state.auth.tokenExpiration;

  if (!expiration) { return false; } 

  return expiration <= Date.now(); 
};
