import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import ReservationButton from './components/ReservationButton';
import { Link } from "react-router-dom";
import './Home.css';

function Navigation() {
  
  const [active, setActive] = useState(window.location.pathname.replace(/\//, ''));

    return (
        <Navbar scrolling="true" variant="dark" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand className="nav_title" href="#">Asian N Cajun 2</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '500px' }}
                navbarScroll
              >
                <Nav.Link><Link 
                  onClick={() => setActive('home')} 
                  className={active === 'home' ? "nav_list active" : "nav_list"} to="/">
                    Home
                </Link></Nav.Link>
                <Nav.Link><Link 
                  onClick={() => setActive('about')} 
                  className={active === 'about' ? "nav_list active" : "nav_list"}  
                  to="/about">
                    About
                </Link></Nav.Link>
                <Nav.Link><Link 
                  onClick={() => setActive('menu')} 
                  className={active === 'menu' ? "nav_list active" : "nav_list"} 
                  to="/menu">
                    Menu
                </Link></Nav.Link>
                <Nav.Link><div 
                  onClick={() => setActive('reservations')} 
                  className={active === 'reservation' ? "nav_list active" : "nav_list"}> 
                    <ReservationButton />
                </div></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navigation