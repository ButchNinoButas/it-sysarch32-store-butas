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