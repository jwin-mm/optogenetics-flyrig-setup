import React, { ReactNode, useState, useEffect } from 'react';
import './PageWrapper.css';
import Sidenav from './Sidenav';

const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsNavOpen(false);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div 
  id='wrapper' 
  className={`transition-all duration-300 ${
    isNavOpen && !isMobile ? 'ml-[250px]' : 'ml-0'
  }`}
></div>
      <Sidenav isOpen={isNavOpen} onClose={toggleNav} isMobile={isMobile} />
      <div id='wrapper' className={`ml-0 md:ml-[770px] transition-all duration-300`}>
        <button
          id="menu-icon"
          onClick={toggleNav}
          className={`md:hidden fixed top-4 left-4 z-50 bg-[#0b5091] rounded-lg text-white ${
            isNavOpen ? 'hidden' : 'block'
          }`}
        >
          ☰
        </button>
        {children}
      </div>
      {/* Mobile overlay */}
      {isNavOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleNav}
        />
        
      )}
    </>
  );
};

export default PageWrapper;