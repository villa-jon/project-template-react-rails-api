import React, {useState} from 'react'
import { Form, Button } from "react-bootstrap"
// import { useHistory } from "react-router-dom";

function Login({ onLogin, resident }) {
	const [name, setUsername] = useState("");
	const [password, setPassword] = useState("");


	function handleSubmit(e) {
		e.preventDefault();
			fetch("/residents", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name }),
			}).then((r) => {
			if (r.ok) {
				r.json().then((resident) => onLogin(resident));
			}
		});
	}

	return (
		<Form onSubmit={handleSubmit}>
		<h3>Login With Username</h3>
		<Form.Label>Username: </Form.Label>
		<input
			type="text"
			id="username"
			value={name}
			onChange={(e) => setUsername(e.target.value)}
		/>
		<Form.Label>Password: </Form.Label>
		<input
			type="text"
			id="password"
			value={password}
			onChange={(e) => setPassword(e.target.value)}
		/>
		<Button type="submit">Login</Button>
		</Form>
	);
}

export default Login