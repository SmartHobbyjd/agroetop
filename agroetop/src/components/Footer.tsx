import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white py-6 mt-8 text-center"> 
        <p>&copy; {new Date().getFullYear()} Agro é top e aqui é Agro</p>
    </footer>
  );
};

export default Footer;
