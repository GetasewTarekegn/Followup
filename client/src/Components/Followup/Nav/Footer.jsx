import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()} Amhara Bank S.C. All rights reserved. 
          <br />
          October 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;