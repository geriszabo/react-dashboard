import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { AppContext } from "../App";
import logo from "../imgs/logo.png";

export function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const { darkModeOn, setDarkModeOn, colorTheme } = useContext(AppContext);

  return (
    <Navbar
      variant={darkModeOn && "dark"}
      expand="lg"
      collapseOnSelect="true"
      expanded={isExpanded}
      onBlur={() => setIsExpanded(false)}
      className={`shadow-sm mb-5 ${darkModeOn && "bg-black"}`}
      style={{
        background: darkModeOn
          ? "radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)"
          : colorTheme.light.gradient,
      }}
    >
    
      <Container
        id="mainContainer"
        style={{ maxWidth: "1200px" }}
        className="d-flex justify-content-center"
      >
          <img
        src={logo}
 
        className="d-inline-block align-top px-5 me-auto"
        alt="Awesomepharma logo"
        style={{
          filter: `${darkModeOn ? "drop-shadow(0 0 7px white)" : "none"}`,
        }}
      />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="ms-auto"
        />
        <Navbar.Collapse
          className="text-center ms-auto"
          id="basic-navbar-nav"
        >
          <Nav className="me-auto ">
            <Nav.Link as={NavLink} to="/">
              <h5 className="me-3 ms-3 px-3">Home</h5>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/barchart">
              <h5 className="me-3 ms-3 px-3">Chart View</h5>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/table">
              <h5 className="me-3 ms-3 px-3">Table View</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form.Switch
        className="px-5 ms-auto"
        id="custom-switch"
        label={darkModeOn ? "🌜" : "🌞"}
        onClick={() => setDarkModeOn((prev) => !prev)}
        style={{width: "2rem"}}
      />
    </Navbar>
  );
}
