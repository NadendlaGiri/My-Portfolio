import React from 'react';
import { Container } from 'react-bootstrap';
import './Navbar.css';

function Footer() {
  return (
    <footer className="footer-custom text-white py-4">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </Container>
    </footer>
  );
}

export default Footer;
