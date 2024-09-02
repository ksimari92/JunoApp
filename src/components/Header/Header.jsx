import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarritoIcon from './CarritoIcon';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Juno Clothes</Navbar.Brand>
                    <div className="d-flex align-items-center ms-auto">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <CarritoIcon className="ms-2" />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href="/productos">Productos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
