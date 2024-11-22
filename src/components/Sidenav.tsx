import React from 'react';
import { Link } from 'react-router-dom';
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

const Sidenav: React.FC = () => {

    const closeNav = () => {
        document.getElementById("sidenav").style.width = "0px";
        document.getElementById("wrapper").style.marginLeft = "0px";
        document.body.style.backgroundColor = "white";
    }

    return (
        <div>
            <div id="sidenav">
                <a id="closebtn" onClick={closeNav}>X</a>
                {links.map((link, index) => (
                    <Link key={index} to={link.path}
                        style={{
                            transition: '0.3s'
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        
        </div>
    );
};

export default Sidenav;