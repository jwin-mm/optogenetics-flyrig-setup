import React, { ReactNode } from 'react';
import './PageWrapper.css'
import Sidenav from './Sidenav';

const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const openNav = () => {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("wrapper").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

  return <>
    <Sidenav />
    <div id='wrapper'> 
      <div id="menu-icon" onClick={openNav}>
                ☰
      </div>
      {children}
    </div>
  </>;
};

export default PageWrapper;
