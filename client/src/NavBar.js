import React from "react";
import Login from './Login'
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div className="navber">
     <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Login/> */}
          <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
          <Nav className="me-auto">
              <NavLink to="/" style={{padding: '10px'}}>Home</NavLink> 
              <NavLink to="/menu" style={{padding: '10px'}}>Menu</NavLink>
              <NavLink to="/housing" style={{padding: '10px'}}>Shelters</NavLink>
              {/* <NavLink to="/catering" style={{padding: '10px'}}>Catering</NavLink> */}
           </Nav>
        </Container>
      </Navbar>      
    </div>
  );
}

export default NavBar;