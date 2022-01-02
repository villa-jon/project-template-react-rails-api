import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import {createBrowserHistory} from 'history' 
// import axios from "axios";

import { Navigate } from "react-router-dom";

function Login({ onLogin }) {
	const [name, setUsername] = useState({});
	const [password, setPassword] = useState("");
	 const history = createBrowserHistory()
	const [login, setLogin] = useState(true)
	// const history = useHistory()

	function handleSubmit(w) {
		w.preventDefault();
			fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify({ 
				name: name, 
				password: password 
			}),
			})
			// .then(response => response.json())
			.then((response) => response.json())
			.then((resident) => {
				onLogin(resident)
				setLogin(true)
			})
			history.push("/home")
	}

	// function pushRsponse() {
	// 	if (resident.error) {
	// 		alert(resident.error)
	// 	} else {
	// 		const token = resident.token
	// 		localStorage.token = token
	// 	}
	// 	history.push("/home")
	// }

	return (<div>
		<Form onSubmit={handleSubmit}>
		<h3>Login With Username</h3>
		<Form.Label>Username: </Form.Label>
		<input
			type="text"
			id="username"
			value={name}
			onChange={(e) => setUsername(e.target.value)}
		/>
		<br/>
		<Form.Label>Password: </Form.Label>
		<input
			type="password"
			id="password"
			value={password}
			onChange={(e) => setPassword(e.target.value)}
		/>
		<Button 
		tye="submit"
		>Login
		</Button>
		{login ?  <Navigate to="/home" /> : null}
		</Form>
		</div>
	);
}

export default Login