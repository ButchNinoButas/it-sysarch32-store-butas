// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import FirestoreExample from './FirestoreExample';
import ProductDetail from './ProductDetail';


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
