import React, { useState } from 'react';
import { useNavigation } from 'next/navigation'; 
import { useDispatch } from 'react-redux'; 
import { loginUser } from '@/utils/api';
import { loginSuccess } from '@/stores/authSlice'; 
import { useClient } from 'next/client';

interface LoginFormProps { 
    // Add types if needed
}

use client;

const LoginFrom: React.FC<LoginFormProps> = () => { 
    const [usernameOrEmail, setUsernameOrEmail] = useState<string>(''); 
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null); 
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = await loginUser(usernameOrEmail, password);
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

export default LoginFrom;
