import React, { useState } from 'react';
import { Offcanvas, Nav, Image } from 'react-bootstrap';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

interface MobileMenuProps {
    brand: string;
    navItems: { label: string; href: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ brand, navItems }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Offcanvas
            show={showMenu}
            onHide={toggleMenu}
            placement="end"
            className="popup-mobile-menu"
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <a href="/" className="logo">
                        <Image src="/logos-circle.png" alt="Personal Portfolio" />
                    </a>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p className="description">{brand} is a personal portfolio template. You can customize all.</p>
                <Nav className="primary-menu nav-pills onepagenav">
                    {navItems.map((item, index) => (
                        <Nav.Link
                            key={index}
                            href={item.href}
                            className={item.label === 'Clients' ? 'active' : ''}
                        >
                            {item.label}
                        </Nav.Link>
                    ))}
                </Nav>
                <div className="social-share-style-1 mt-4">
                    <span className="title">Find me on</span>
                    <ul className="social-share d-flex list-unstyled">
                        <li className="facebook">
                            <a href="#">
                                <FiFacebook />
                            </a>
                        </li>
                        <li className="instagram">
                            <a href="#">
                                <FiInstagram />
                            </a>
                        </li>
                        <li className="linkedin">
                            <a href="#">
                                <FiLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default MobileMenu;