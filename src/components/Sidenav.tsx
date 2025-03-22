import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidenav.css';

const links = [
    { path: '/rig-instructions', label: 'Rig Instructions' },
    { path: '/bill', label: 'Bill of Materials' },
    { path: '/experiment-guide', label: 'Experiment Guide' },
    { path: '/sw-documentation', label: 'Software Documentation' },
    { path: '/sw-installation', label: 'Software Installation' },
    { path: '/sw-manual', label: 'Software Manual' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' }
];

const Sidenav: React.FC<{ 
    isOpen: boolean;
    onClose: () => void;
    isMobile: boolean;
  }> = ({ isOpen, isMobile }) => {
    const [activePage, setActivePage] = useState<string | null>(null);
    const [sectionHeaders, setSectionHeaders] = useState<{ id: string; text: string | null }[]>([]);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleDropdown = (page: string) => {
        setActivePage((prev) => (prev === page ? null : page));
    };

    useEffect(() => {
        const fetchSections = () => {
            const headers = Array.from(document.querySelectorAll('section > h2')).map((header) => ({
                id: header.id,
                text: header.textContent,
            }));
            setSectionHeaders(headers);
        };

        fetchSections();
    }, [location.pathname]);

    const handleLogoClick = () => {
        navigate('/sw-manual');
    };

    return (
        <div 
        id="sidenav"
        className={`${isOpen ? 'is-open' : ''} ${isMobile ? 'mobile-nav' : ''}`}
    >
            <div 
                className="inset-0 bg-white fixed items-center justify-center p-2 ml-7 mx-auto mb-5 w-70 h-[110px] cursor-pointer"
                style={{ zIndex: 0 }} 
            />
            <div 
                className="z-10 fixed items-center justify-center p-2 rounded-3xl ml-7 mx-auto mt-4 mb-5 w-[177px] h-[63px] cursor-pointer"
                style={{ backgroundColor: "#0b5091" }}
                onClick={handleLogoClick}>
                    <img 
                    src="/optogenetics-flyrig-setup/images/logo.png" 
                    className="w-40 h-32 object-contain absolute -top-1" 
                    alt="Logo" 
                    />
                <div 
                    className="absolute w-70 h-28 left-0 top-full bg-gradient-to-b from-white to-transparent pointer-events-none"
                />
            </div>
                

            <div className='mt-39'>
                {links.map((link) => (
                    <div key={link.label} className="sidenav-item ">
                        <Link
                            to={link.path}
                            className="sidenav-link "
                            onClick={() => toggleDropdown(link.label)}
                        >
                            {link.label}
                        </Link>
                       {activePage === link.label && (
                          <div className="ml-10 mb-3">
                                {sectionHeaders.map((header, index) => (
                                    <a
                                        key={`section-${index}`}
                                        href={`#${header.id}`}
                                    >
                                        {header.text}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Sidenav;