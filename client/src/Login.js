import { useState } from "react";
import { Button, Form} from 'react-bootstrap'


function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")

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
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    });
  }

  return (
    <Form 
    style={faqStyle}
    onSubmit={handleSubmit}>
      <h3>Login With Username</h3>
      {/* <label htmlFor="username"> Username: </label>
      <br/>
      <input
        type="text"
      /> */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Username</Form.Label>
       <Form.Control 
        id="username"
        value={username}
        onChange={(w) => setUsername(w.target.value)} 
        placeholder="Enter Username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        id="password"
        value={password}
        onChange={(w)=>setPassword(w.target.value)}
        placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">Login</Button>
    </Form>
  );
}


export default Login