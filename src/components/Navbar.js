import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css';

function NavigationBar() {
  return (
    <>
    <Navbar expand="lg" className="navbar-custom" fixed="top">
        <Container>
            <Navbar.Brand href="#home" className="text-white d-flex align-items-center">
                <img
                    src="/profile.jpg"
                    alt="Logo"
                    width="30"
                    height="30"
                    className="d-inline-block align-top me-2 rounded-circle"
                />
                My Portfolio
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#about" className="text-white">About</Nav.Link>
                <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
                <Nav.Link href="#skills" className="text-white">Skills</Nav.Link>
                <Nav.Link href="#resume" className="text-white">Resume</Nav.Link>
                <Nav.Link href="#blog" className="text-white">Blog</Nav.Link>
                <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

      <header className="hero-section d-flex justify-content-center align-items-center text-white text-center" id="home">
        <div className="hero-content text-center">
          <img src="/profile.jpg" alt="Profile" className="profile-img mb-4" />
          <h1 className="hero-title">Hi, I'm <span className="highlight">Nadendla Giri</span></h1>
          <p className="hero-subtitle">My work speaks louder than words</p>
          <div className="mt-4">
            <Button variant="primary" className="me-2" href="#resume">Download Resume</Button>
            <Button variant="outline-light" href="#contact">Get in Touch</Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavigationBar;
