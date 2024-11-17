import React, { ReactNode } from 'react';
import DropdownMenu from './DropdownMenu';

const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>
    <DropdownMenu />
    <div> 
      {children}
    </div>
  </>;
};

export default PageWrapper;
