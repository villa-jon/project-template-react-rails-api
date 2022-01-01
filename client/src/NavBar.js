import React from "react";
// import Login from './Login'
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function NavBar({ onLogout, resident }) {
  // const [user, setUser] = useState(null)
  
  function logOut() {
		fetch("/logout", { 
		  method: "DELETE" })
		  .then(()=>onLogout());
	      }

  return (
    <div className="navber">
     <Navbar expand="lg" bg="light" variant="light">
        <Container>
          {/* <Login/> */}
          <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
          <Nav className="me-auto">
              <NavLink to="/" style={{padding: '10px'}}>Home</NavLink> 
              <NavLink to="/about" style={{padding: '10px'}}>About</NavLink>
              <NavLink to="/housing" style={{padding: '10px'}}>Shelters</NavLink>
              {/* <NavLink to="/catering" style={{padding: '10px'}}>Catering</NavLink> */}
           </Nav>
        </Container>
        <div>
		 	<h1>Hello! {resident}</h1> 
		 	<Button type="submit" onClick={logOut}>Logout</Button>
			 </div>
        {/* {resident ? (
		 ) : (
		 	<NavLink to="/">Login</NavLink>
		 )
		 } */}
      </Navbar>    
    </div>
  );
}

export default NavBar;