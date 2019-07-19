import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from "mdbreact";
import Logo from "../assets/img/accountabble-c.png";
import Facebook from "../assets/img/facebook-logo.png";
import Instagram from "../assets/img/instagram.png";

const Navbar = () => {
  const [toggle, setToggle] = useState("");

  const toggleNavbar = collapseID => {
    setToggle(prevState => (prevState !== collapseID ? collapseID : ""));
  };

  const navigateSocialMedia = url => (window.location.href = url);

  return (
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
            <Link to="/">
              <img src={Logo} alt="Logo" width={200} />
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={() => toggleNavbar("navbarCollapse")} />
          <MDBCollapse id="navbarCollapse" isOpen={toggle} navbar>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <Link className="link-nav" to="/#blog">
                  BLOG
                </Link>
              </MDBNavItem>
              <div className="divider-vertical-link d-none d-sm-block" />
              <MDBNavItem>
                <Link className="link-nav" to="/faq">
                  FAQ
                </Link>
              </MDBNavItem>
              <div className="divider-vertical-link d-none d-sm-block" />
              <MDBNavItem>
                <Link className="link-nav" to="/about-us">
                  ABOUT
                </Link>
              </MDBNavItem>
              <div className="divider-vertical-link d-none d-sm-block" />
              <MDBNavItem>
                <Link className="link-nav" to="/contact-us">
                  CONTACT US
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <img
                  className={"social pointer"}
                  onClick={() =>
                    navigateSocialMedia(
                      "https://www.facebook.com/accountabble/"
                    )
                  }
                  src={Facebook}
                  alt="logo"
                />
              </MDBNavItem>
              <MDBNavItem>
                <img
                  className={"ml-3 social pointer"}
                  onClick={() =>
                    navigateSocialMedia(
                      "https://www.instagram.com/accountabble/"
                    )
                  }
                  src={Instagram}
                  alt="logo"
                />
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </React.Fragment>
  );
};

export default Navbar;
