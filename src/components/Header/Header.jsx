import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isActive = {
    fontWeight: "bold",

    backgroundColor: "#64ffda",
  };
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
            <Nav.Link activeStyle={isActive} as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link activeStyle={isActive} as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link activeStyle={isActive} as={NavLink} to="/work">
              Project
            </Nav.Link>
            <Nav.Link activeStyle={isActive} as={NavLink} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link activeStyle={isActive} as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
