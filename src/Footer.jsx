import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Load the Stripe.js library with your publishable API key
const stripePromise = loadStripe('pk_test_51PF3CWFONVWUdgyARjgw3LRF4OWotcvcefs77Co9uQS0sg4r1LSuKilfs4G2AH9cqg8czeED9ZHiLSxLjqq8ZRTP00r6d6Igh6');

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#ffffff', padding: '20px', textAlign: 'center' }} className='mt-4'>
      <p>&copy; {new Date().getFullYear()} Pokemon Store</p>
    </footer>
  );
};

export default Footer;