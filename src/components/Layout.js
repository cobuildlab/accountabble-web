import React from 'react';
import Navbar from './Navbar';
import FooterComponent from './FooterComponent';

const Layout = ({ children, transition }) => {
  return (
    <React.Fragment>
      <Navbar />
        <div className={`view d-flex justify-content-center align-items-center ${transition ? 'fade-in' : ''}`}>
          {children}
        </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default Layout;