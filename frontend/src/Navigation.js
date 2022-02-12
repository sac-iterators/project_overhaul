import React from 'react'

import { Button, Navbar, Nav, Container, NavDropdown, Form, FormControl } from 'react-bootstrap';
import ReservationButton from './components/ReservationButton';
import ReservationFunc from "./components/ReservationButton";

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Asian N Cajun</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <Nav.Link href="#action2">Order</Nav.Link>
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
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation