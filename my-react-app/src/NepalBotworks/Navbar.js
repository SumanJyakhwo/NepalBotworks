import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import Botwork from "../assets/img/crop.png";

function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" sticky="top">
      <Container>
        <NavbarBrand href="/">
          <Link to="/">
            <img
              src={Botwork}
              alt="Nepal Botworks"
              className="img-fluid"
              style={{ height: "50px", width: "60px" }}
            />
            <span className="text-heading fs-12">Nepal</span>{" "}
            <span className="text-red fs-12">Botworks</span>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                to="/home"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/gallery"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/faq"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
