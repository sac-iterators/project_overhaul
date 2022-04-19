import React, { useState } from 'react'
import { Button, Navbar, Nav, Container, NavDropdown, Form, FormControl } from 'react-bootstrap';
import ReservationButton from './components/ReservationButton';
import SignInButton from './components/SignInButton';
import Menu from './Menu';
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
  
  const [expanded, setExpanded] = useState(false);
  const toggleMenu = () => setExpanded(!expanded);
    return (
        <Navbar scrolling  variant="dark" bg="black" expand="lg" fixed="top" className="navbar">
          <Container fluid>
             <Navbar.Brand className="nav_title" href="#">Asian N Cajun 2</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '500px' }}
                navbarScroll
              >
                <Nav.Link><Link className="nav_list" to="/">Home</Link></Nav.Link>
                <Nav.Link><Link className="nav_list"  to="/about">About</Link></Nav.Link>
                <Nav.Link><Link  className="nav_list" to="/menu">Menu</Link></Nav.Link>
                {/* <NavDropdown title="Reservations" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link ><div className="nav_list"> <ReservationButton /></div></Nav.Link>
                <Nav.Link > <p className="nav_list" > <SignInButton /></p></Nav.Link>
              </Nav>
             
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