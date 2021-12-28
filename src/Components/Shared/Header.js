import React from 'react';
import { Navbar,Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Navbar fixed='top' bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Managex</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;