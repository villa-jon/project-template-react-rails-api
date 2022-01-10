import React from "react";
// import Login from './Login'
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import LoginContainer from "./LoginContainer";

const faqStyle = {
	display: 'flex', 
	alignItems: 'center', 
	justifyContent: "center",
	flexDirection: 'column',
	// paddingTop: '20px',
	fontFamily: 'Montserrat',
	// fontWeight: 'bolder',
// paddingBottom: "1vh"
}

function NavBar({ onLogout, onLogin, users }) {

  function logOut() {
		fetch("/logout", { 
		  method: "DELETE" })
		  .then((r)=>
      		{ if (r.ok) {
        	onLogout(null)
     	 	}});
	      }
 
        // const name = 

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
              {/* <NavLink to="/loginpage" style={{padding: '10px'}}>Login</NavLink> */}
           </Nav>
        </Container>
        {!users ? (
        <div>
        <LoginContainer
        onLogin={onLogin}
        resident={users}
        />
        </div>
         ) :( 
        <div style={faqStyle} >
          <Row  >
            <Col >
              <p style={{width: '7em'}}>Hello, { users.name } </p>
            </Col>
            <Col>
              <Button type="submit" onClick={logOut}>Logout</Button>
            </Col>
          </Row>
          {/* {name} */}
          
			 </div> 
        )} 
      </Navbar>    
    </div>
  );
}

export default NavBar;