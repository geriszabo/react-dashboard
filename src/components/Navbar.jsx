import React, {useState} from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export function NavBar() {
    const [isExpanded, setIsExpanded] = useState(false)



  return (
    <Navbar bg="light" expand="lg" collapseOnSelect="true" expanded={isExpanded} onClick={() => setIsExpanded(prev => !prev)} onBlur={() => setIsExpanded(false)}>
      <Container>
        <Navbar.Brand href="#">
          <img
            src="/src/imgs/logo.png"
            width="60%"
            //   height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" >
            <Link to="/" >Home</Link>
            <Link to="/barchart">Chart View</Link>
            <Link to="/table">Table View</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default BasicExample;
