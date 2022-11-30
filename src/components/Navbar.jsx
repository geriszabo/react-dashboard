import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

export function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Navbar
      variant="light"
      expand="lg"
      collapseOnSelect="true"
      expanded={isExpanded}
      onClick={() => setIsExpanded((prev) => !prev)}
      onBlur={() => setIsExpanded(false)}
      className="shadow-sm mb-3 "
    >
      <Container className="me-auto ms-auto">
        <img
          src="/src/imgs/logo.png"
          maxwidth="10rem"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          // style={{ filter: "drop-shadow(0 0mm 4mm white)" }}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="text-center"
          id="basic-navbar-nav d-flex justify-content-center"
        >
          <Nav className="me-auto ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/barchart">
              Chart View
            </Nav.Link>
            <Nav.Link as={NavLink} to="/table">
              Table View
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form>
          <Form.Check type="switch" id="custom-switch" label="Dark-Mode" />
        </Form>
      </Container>
    </Navbar>
  );
}

// export default BasicExample;
