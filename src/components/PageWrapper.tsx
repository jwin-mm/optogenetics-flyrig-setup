import React, { ReactNode } from 'react';
import './PageWrapper.css'
import Sidenav from './Sidenav';

const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const openNav = () => {
    const sidenav = document.getElementById("sidenav");
    const wrapper = document.getElementById("wrapper");

    let sidenavWidth;
    if (window.innerWidth <= 480) {
        sidenavWidth = "200px"; // Small screen
    } else if (window.innerWidth <= 768) {
        sidenavWidth = "250px"; // Medium screen
    } else {
        sidenavWidth = "500px"; // Large screen
    }

    sidenav!.style.width = sidenavWidth;
    wrapper!.style.marginLeft = sidenavWidth;
    document.body.style.backgroundColor = "rgba(50, 40, 40, 0.81)";

    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      img.style.transition = 'filter 0.5s';
      img.style.filter = 'brightness(0.5)'; // Adjust percentage to control gray level
    });
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
