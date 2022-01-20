import React, { useState } from 'react'
import { Form, Button, Modal } from "react-bootstrap"

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

function Login({ onLogin, resident, onHide, show }) {
	const [name, setUsername] = useState('');
	const [password, setPassword] = useState('');
	//  const history = createBrowserHistory()
	// const [login, setLogin] = useState(false)

	function handleSubmit(w) {
		w.preventDefault();
			return fetch("/login", {
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
			.then((response) => response.json())
			.then((resident) => {
				onLogin(resident)
			})
	}

	return (<div>
		<Modal
		size="sm"
		aria-labelledby="contained-modal-title-vcenter"
		centered
		hide={onHide}
		show={show}
		>
		<Form 
		style={faqStyle}
		onSubmit={handleSubmit}>
		<h3>Login</h3>
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
		<br/>
		<Button 
		type="submit"
		>Login
		</Button>
		{console.log(resident)}
		</Form>
		<Modal.Footer>
       		<Button onClick={() => onHide()}>Close</Button>
      		</Modal.Footer>
		</Modal>
		</div>
	);
}

export default Login