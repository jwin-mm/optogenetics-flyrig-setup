import React, { ReactNode, useState } from 'react';
import './PageWrapper.css';
import Sidenav from './Sidenav';

const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
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
    wrapper!.classList.add('blurred'); // Add the 'blurred' class to the wrapper
  }

  const closeNav = () => {
    setIsNavOpen(false);
    const wrapper = document.getElementById("wrapper");
    wrapper!.classList.remove('blurred'); // Remove the 'blurred' class from the wrapper
  }

  return <>
    <Sidenav closeNav={closeNav} />
    <div id='wrapper' className={isNavOpen ? 'blurred' : ''}> 
      <div id="menu-icon" onClick={openNav}>
                ☰
      </div>
      {children}
    </div>
  </>;
};

export default PageWrapper;