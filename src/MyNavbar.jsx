import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';

// Load the Stripe.js library with your publishable API key
const stripePromise = loadStripe('pk_test_51PF3CWFONVWUdgyARjgw3LRF4OWotcvcefs77Co9uQS0sg4r1LSuKilfs4G2AH9cqg8czeED9ZHiLSxLjqq8ZRTP00r6d6Igh6');

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="xl" className="px-4">
      <Container fluid>
        <Navbar.Brand href="#home">Pokemon Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Shop</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
