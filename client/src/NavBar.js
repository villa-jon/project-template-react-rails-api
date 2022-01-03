import React from "react";
// import Login from './Login'
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function NavBar({ onLogout }) {
  
  function logOut() {
		fetch("/logout", { 
		  method: "DELETE" })
		  .then((r)=>
      { if (r.ok) {
        onLogout(null)
      }});
	      }

  return (
    <div className="navber">
     <Navbar expand="lg" bg="light" variant="light">
        <Container>
          {/* <Login/> */}
          <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
          <Nav className="me-auto">
              <NavLink to="/home" style={{padding: '10px'}}>Home</NavLink> 
              <NavLink to="/about" style={{padding: '10px'}}>About</NavLink>
              <NavLink to="/housing" style={{padding: '10px'}}>Shelters</NavLink>
              <NavLink to="/loginpage" style={{padding: '10px'}}>Login</NavLink>
           </Nav>
        </Container>
        <div>
		 	<Button type="submit" onClick={logOut}>Logout</Button>
			 </div>
      </Navbar>    
    </div>
  );
}

export default NavBar;