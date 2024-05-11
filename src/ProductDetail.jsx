// 
import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import Footer from './Footer';
import MyNavbar from './MyNavbar';

import { loadStripe } from '@stripe/stripe-js';

// Load the Stripe.js library with your publishable API key
const stripePromise = loadStripe('pk_test_51PF3CWFONVWUdgyARjgw3LRF4OWotcvcefs77Co9uQS0sg4r1LSuKilfs4G2AH9cqg8czeED9ZHiLSxLjqq8ZRTP00r6d6Igh6'); // Replace with your publishable key
const handleCheckout= async (product) => {
const stripe = await stripePromise;
const name = product.name;
const price =product.price*100;
// Send a request to the backend to create a checkout session
  const response = await fetch('http://localhost:4000/create-checkout-session', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, price }), // Send product name and price to the backend
});

if (response.ok) {
  // If the request is successful, retrieve the session ID from the response
  const session = await response.json();

  // Redirect the user to the Stripe Checkout page using the session ID
  const result = await stripe.redirectToCheckout({ sessionId: session.id });

  if (result.error) {
    // If there is an error during the redirect, display the error message
    setError(result.error.message);
  }
} else {
  // If there is an error creating the checkout session, display an error message
  setError('Error creating checkout session');
}


// Handle the change event when the user enters a product name
const handleProductNameChange = (event) => {
setProductName(event.target.value);
};
}

const ProductDetail = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const { state } = useLocation();
  const products = state?.products || [];

  // Find the product with the matching productId
  const product = products.find(p => p.id === productId); // Change to compare with id

  // If product is not found, display "Product not found"
  if (!product) {
    return <div>Product not found</div>;
  }

  // Define the handleCheckout function
  // const handleCheckout = (product) => {
    
  //   console.log('Checkout clicked for product:', product);
  //   // Redirect to a checkout page, update cart state, etc.
  // };

  return (
    <>
      <MyNavbar/>
      <Container className='mt-4 py-2 px-4 vh-100' style={{ height: '100vh' }}>
      <Row>
        <Col md={6} className="mb-4">
          <div className="text-center">
            <img src={product.imageURL} alt={product.name} style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain', paddingRight: '40px' }} />
          </div>
        </Col>
        <Col md={6} className="mb-4 d-flex flex-column justify-content-between">
          <div>
            <div className="text-left">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <hr />
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <button onClick={() => handleCheckout(product)}>Checkout</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
      <Footer/>
    </>
  );
};

export default ProductDetail;
