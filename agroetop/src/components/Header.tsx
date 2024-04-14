import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-green-800 text-white py-4 shadow-md"> 
            <div className="container mx-auto flex items-center justify-between"> 
                <h1 className="text-2xl font-bold">Agro é Top</h1>

                <nav className="hidden md:flex space-x-6"> 
                    <ul className="flex space-x-4">
                        <li><Link href="/" passHref>Home</Link></li> 
                        <li><Link href="/login" passHref>Login</Link></li>
                        <li><Link href="/registration" passHref>Register</Link></li>
                        <li><Link href="/welcome" passHref>Welcome</Link></li>
                    </ul>
                </nav>

                {/* Add a hamburger button for the responsive menu (to be implemented later) */}
                <button className="block md:hidden">
                    <svg /* hamburger menu icon SVG */> 
                        ...
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
