import React, { useState } from 'react'
import { Button, Navbar, Nav, Container, NavDropdown, Form, FormControl } from 'react-bootstrap';
import ReservationButton from './components/ReservationButton';
import SignInButton from './components/SignInButton';
import Menu from './Menu';
import { NavLink } from "react-router-dom";

function Navigation() {
  
  const [expanded, setExpanded] = useState(false);
  const toggleMenu = () => setExpanded(!expanded);
    return (
        <Navbar bg="light" expand="lg" sticky="top" className="navbar" expanded={expanded}>
          <Container fluid>
            <Navbar.Brand href="/">Asian N Cajun</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleMenu} />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll 
              >
                <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                <NavLink to="/menu" onClick={toggleMenu}>Menu</NavLink>
                {/* <NavDropdown title="Reservations" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
                <ReservationButton />
              </Nav>
              <SignInButton/>
              
              {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navigation