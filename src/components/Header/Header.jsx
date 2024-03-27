import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/Sample Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="logo" width="200"  />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav className="">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="profile">
            <div className="flex-wrapper">
             
              <div className="profile-icon">
                <Link to="/login">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
                
              </div>
              <div className="user-profileName">
                  <h4>jhon</h4>
                </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
