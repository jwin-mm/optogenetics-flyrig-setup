import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const Sidenav: React.FC<{ closeNav: () => void }> = ({ closeNav }) => {
    const [activePage, setActivePage] = useState<string | null>(null);
    const [sectionHeaders, setSectionHeaders] = useState<{ id: string; text: string | null }[]>();
    const location = useLocation();

    const toggleDropdown = (page: string) => {
        setActivePage((prev) => (prev === page ? null : page));
    };

    const handleCloseNav = () => {
        document.getElementById("sidenav")!.style.width = "0px";
        document.getElementById("wrapper")!.style.marginLeft = "0px";
        closeNav(); // Call the closeNav function passed as a prop
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
            img.style.filter = 'none'; 
        });
    }

    useEffect(() => {
        const fetchSections = () => {
            const headers = Array.from(document.querySelectorAll('section > h2')).map((header) => ({
                id: header.id,
                text: header.textContent,
            }));
            setSectionHeaders(headers);
        }

        fetchSections();
    }, [location.pathname]);

    return (
        <div>
            <div id="sidenav">
                <a id="closebtn" onClick={handleCloseNav}>X</a>
                {links.map((link) => (
                    <div key={link.label} className="sidenav-item" style={{ overflowY: "auto"}}>
                        <Link
                            to={link.path}
                            className="sidenav-link"
                            onClick={() => {
                                toggleDropdown(link.label);
                                handleCloseNav();
                            }}
                        >
                            {link.label}
                        </Link>
                        {activePage === link.label && (
                            <div>
                                {
                                    sectionHeaders!.map((header: { id: string; text: string | null }, index: number) => (
                                    <a
                                        key={`section-${index}`}
                                        href={`#${header.id}`}
                                        style={{ fontSize: '18px' }}
                                    >
                                        {header.text}
                                    </a>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidenav;