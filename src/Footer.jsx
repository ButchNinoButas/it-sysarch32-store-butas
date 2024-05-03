import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#ffffff', padding: '20px', textAlign: 'center' }} className='mt-4'>
      <p>&copy; {new Date().getFullYear()} Pokemon Store</p>
    </footer>
  );
};

export default Footer;