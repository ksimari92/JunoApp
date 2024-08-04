import React from 'react'
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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href="/productos">Productos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CarritoIcon/>

            </Navbar>
        </header>
    )
}

export default Header