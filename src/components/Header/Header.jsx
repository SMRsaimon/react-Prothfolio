import React from "react";
import * as ReactNavbar from "react-responsive-animate-navbar";
import About from "../About/About";
import Intro from "../Intro/Intro";
import "./Header.css";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="dark" className="nav-conatiner">
        <Navbar.Brand as={Link} to="/">
          <div className="img-container">
            <img className="w-50" src="https://i.ibb.co/mh61wGp/mylogo.png" alt="" srcset="" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-auto">
            {/* <Link to="/home">Features</Link> */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/work">
              Works
            </Nav.Link>
            <Nav.Link as={Link} to="/features">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
