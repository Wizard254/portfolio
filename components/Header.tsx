import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FiMenu, FiX } from 'react-icons/fi';

interface HeaderProps {
    brand: string;
    navItems: { label: string; href: string }[];
    buyNowUrl: string;
}

const Header: React.FC<HeaderProps> = ({ brand, navItems, buyNowUrl }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="xl"
            fixed="top"
            className="header--sticky sticky"
        >
            <Container className="header-wrapper align-items-center">
                <Navbar.Brand href="/">
                    <img src="/logo-dark.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="header-nav"
                    onClick={toggleNav}
                    className={`d-xl-none ${isNavOpen ? 'open' : ''}`}
                >
                    {isNavOpen ? <FiX /> : <FiMenu />}
                </Navbar.Toggle>
                <Navbar.Collapse
                    id="header-nav"
                    className={`justify-content-end ${isNavOpen ? 'show' : ''}`}
                >
                    <Nav className="primary-menu nav-pills">
                        {navItems.map((item, index) => (
                            <Nav.Link key={index} href={item.href}>
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Button href={buyNowUrl} target="_blank" variant="primary">
                        Buy Now {brand}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;