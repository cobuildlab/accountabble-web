import React from 'react';
import Navbar from './Navbar';
import FooterComponent from './FooterComponent';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
        <div className="view">
          {children}
        </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default Layout;