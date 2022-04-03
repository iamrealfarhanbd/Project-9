import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar ><Link className="navbar-brand" to={'/'}>React-Bootstrap</Link></Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to={'/'}>Home </Link>
                            <Link className='nav-link' to={'/reviews'}>Review</Link>
                            <Link className='nav-link' to={'/dashboard'}>Dashboard</Link>
                            <Link className='nav-link' to={'/blog'}>Blog</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;