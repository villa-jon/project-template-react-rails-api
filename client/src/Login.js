import React, {useState} from 'react'
import { Form, Button } from "react-bootstrap"
// import { useHistory } from "react-router-dom";

function Login({ onLogin, onLogout, user }) {
	const [name, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
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
			}).then(response => response.json())
			.then(resident => {
				if (resident.ok) {
					resident.json
					.then(
						(resident) => onLogin(resident) 
					)
				}
			}
			)
			// .then(response => console.log(response))
		// 	.then((r) => {
		// 	if (r.ok) {
		// 		r.json().then((resident) => {
		// 			console.log(resident)
		// 			onLogin(resident)
		// 		});
		// 	}
		// });
	}

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
		<Form.Label>Password: </Form.Label>
		<input
			type="password"
			id="password"
			value={password}
			onChange={(e) => setPassword(e.target.value)}
		/>
		{user ? (
			<Button type="submit" onClick={onLogout}>Logout</Button>
		) : (
			<Button type="submit">Login</Button>
		)
		} 
		</Form>
		</div>
		
	);
}

export default Login