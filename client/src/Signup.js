import { useState } from "react";
import { Button, Form} from 'react-bootstrap'
// import { useNavigate } from 'react-router';

function Signup({ setUser }) {
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
		fontWeight: 'bolder'
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
          name: name,
          password: password
        }
        // password_confirmation: passwordConfirmation

      }),
    }).then((response) => { 
       response.json()
        .then((user) => {
          console.log(response)
          setUser(user)  
          console.log(user)
          // history('/home')
        });
      
    });
  }

  return (
    <Form 
    style={faqStyle}
    onSubmit={handleSubmit}>
      <h3>Sign Up </h3>
      {/* <label htmlFor="username"> Username: </label>
      <br/>
      <input
        type="text"
      /> */}
        <Form.Group className="mb-3" >
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
      <br/>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}


export default Signup