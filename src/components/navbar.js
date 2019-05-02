import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { 
MDBNavbar,
MDBNavbarBrand, 
MDBNavbarNav, 
MDBNavItem, 
MDBNavbarToggler, 
MDBCollapse,
MDBContainer 
} from "mdbreact";

import Logo from '../assets/img/accountabble-c.png'

const Navbar = () => {
  const [toggle, setToggle] = useState("");

  const toggleNavbar = (collapseID) => {
    setToggle(prevState => prevState !== collapseID ? collapseID : "");
  };

  return(
    <React.Fragment>
    <MDBNavbar
      color="white"
      dark
      expand="md"
      fixed="top"
      scrolling
      transparent
    >
      <MDBContainer>
        <MDBNavbarBrand>
          <img src={ Logo } alt="Logo" width="200"></img>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          onClick={() => toggleNavbar("navbarCollapse")}
        />
        <MDBCollapse
          id="navbarCollapse"
          isOpen={toggle}
          navbar
        >
          <MDBNavbarNav right>
            <MDBNavItem active>
              <Link className="link-nav" to="/">BLOG</Link>
            </MDBNavItem>
            <div className="divider-vertical-link d-none d-sm-block"/>
            <MDBNavItem>
              <Link className="link-nav" to="/faq">FAQ</Link>
            </MDBNavItem>
            <div className="divider-vertical-link d-none d-sm-block"/>
            <MDBNavItem>
              <Link className="link-nav" to="/about-us">ABOUT US</Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </React.Fragment>
    
  )
}

export default Navbar;