// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import FirestoreExample from './FirestoreExample';
import ProductDetail from './ProductDetail';
import { loadStripe } from '@stripe/stripe-js';

// Load the Stripe.js library with your publishable API key
const stripePromise = loadStripe('pk_test_51PF3CWFONVWUdgyARjgw3LRF4OWotcvcefs77Co9uQS0sg4r1LSuKilfs4G2AH9cqg8czeED9ZHiLSxLjqq8ZRTP00r6d6Igh6');


const App = () => {
  return (
    <Container fluid className="p-0" style={{ backgroundColor: '#ffffff', color: '#black' }}>
        <div>
          <Routes>
            <Route path="/" element={<FirestoreExample />} />
            <Route path="/product-detail/:productId" element={<ProductDetail />} />
            {/* Add more routes here if needed */}
          </Routes>
        </div>
      </Container>
  );
};

export default App;
