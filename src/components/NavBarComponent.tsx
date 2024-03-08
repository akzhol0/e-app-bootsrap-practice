import React from "react";
import { Button, Container, Nav, Navbar, NavbarToggle } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterLoginComponent from "./RegisterLoginComponent";

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="py-4">
      <Container>
        <NavbarToggle aria-controls="basic-navbar-nav bg-light" />
        <Link to="/">
          <Navbar.Brand className="text-primary">Mansoury.</Navbar.Brand>
        </Link>
        <Navbar.Collapse className="me-0">
          <Nav>
            <Link to="/">
              <Nav.Link href="home">Home</Nav.Link>
            </Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#pages">Pages</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            <RegisterLoginComponent show={false} />
          </Nav>
        </Navbar.Collapse>
        <RegisterLoginComponent show={true} />
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
