import { useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap'
import "./Signup.css"
// import { useNavigate } from 'react-router';

function Signup({ setUser, onHide, show }) {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const history = useNavigate();
  const faqStyle = {
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: "center",
		flexDirection: 'column',
		paddingTop: '20px',
		fontFamily: 'Montserrat',
		fontWeight: 'bolder',
    paddingBottom: "1vh"
	}

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, password)
    fetch("/residents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        resident: {
          name,
          password,
          passwordConfirmation: passwordConfirmation
        }
      }),
    }).then((response) => { 
     response.json()
        .then((user) => {
          console.log("this is the first response"+ user.name)
          setUser(user)  
         
          // history('/home')
        });
      
    });
  }

  return (
    <Modal 
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    hide={onHide}
    show={show}
    onSubmit={handleSubmit}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter"> Sign Up </Modal.Title>
      </Modal.Header>
      <Form
      style={faqStyle}
      >
      <Form.Group className="mb-3">
       <Form.Label>Username</Form.Label>
       <Form.Control 
        id="username"
        value={name}
        onChange={(w) => setUsername(w.target.value)} 
        placeholder="Enter Username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        id="password"
        value={password}
        onChange={(w)=>setPassword(w.target.value)}
        placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="password_confirmation">Confirm Password</Form.Label>
        <Form.Control
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </Form.Group>
      <Button className="button" variant="primary" type="submit">Submit</Button>
      </Form>
      <Modal.Footer>
        <Button onClick={() => onHide()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default Signup