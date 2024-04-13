import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser } from '@/utils/api';
import { useDispatch } from 'react-redux'; 
import { loginSuccess } from '@/stores/authSlice'; 

const LoginForm = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const token = await loginUser(usernameOrEmail, password);
      
            const dispatch = useDispatch();
            dispatch(loginSuccess(token)); 
      
            router.push('/welcome'); 
          } catch (error) {
          if (error.message === 'Invalid username or password') {
            setErrorMessage('Incorrect username or password. Please try again.'); 
          } else if (error.message.includes('Server Error')) {
            setErrorMessage('There was a server error. Please try again later.');  
          } else {
            setErrorMessage('Could not log in. Please check your network connection.'); 
          }
        }
      };    
    

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4"> 
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="you@example.com"
            value={usernameOrEmail}  
            onChange={(e) => setUsernameOrEmail(e.target.value)} 
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password 
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="*******"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>} 
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
