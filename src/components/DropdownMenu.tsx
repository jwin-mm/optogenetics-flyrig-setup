import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

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

const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="menu-container">
            <div className="menu-icon" onClick={toggleDropdown}>
                ☰
            </div>
            {isOpen && (
                <div className="dropdown">
                   {links.map((link, index) => (
                        <Link key={index} to={link.path}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;