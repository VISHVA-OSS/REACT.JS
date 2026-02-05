import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import"./App.css";

// Navbar component

function NavbarMenu() {
  return (
    <Navbar bg="warning" variant="dark" expand="lg">
      <Container>
        {/* Logo / Brand */}
        <Navbar.Brand href="#">HOME PAGE</Navbar.Brand>

        {/* Hamburger button (appears in mobile) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu a">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#content">Content</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Home component
export default NavbarMenu;
