import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'; 
import YoutubeEmbed from '@/components/YoutubeEmbed';
import dynamic from 'next/dynamic';

// Dynamically import the LoginForm component to ensure it's only rendered on the client side
const LoginForm = dynamic(() => import('@/app/login/LoginFrom'), { ssr: false });

const LoginPage = () => {
  return (
    <div className="min-h-screen flex py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center">
        <div className="flex-1">
          <YoutubeEmbed videoId="NfH6H_3eq58?si=QO4_YeV-oyhwIV5m" />  
        </div>
        <div className="flex-1">
          <div className="card bg-white shadow-md rounded-lg px-5 py-4">
            <div className="card-header">
              <h1>Agro World</h1>
              <p>Lets make great deals</p> 
            </div>
            <div className="card-body">
              <LoginForm />
            </div>
            <div className="card-footer">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
