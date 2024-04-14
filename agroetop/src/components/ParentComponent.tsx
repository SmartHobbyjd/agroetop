import React from 'react';
import { useClient } from 'next/client'; 
import Header from '@/components/Header';

const ParentComponent: React.FC = () => {
  useClient(); 

  return (
    <div>
      <Header />
      {/* Other child components */}
    </div>
  );
};

export default ParentComponent;
