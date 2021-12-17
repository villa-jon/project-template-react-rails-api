import React, {useState} from 'react'
import { Form, Button } from "react-bootstrap"
// import { useHistory } from "react-router-dom";

function Signup() {
	const [fields, handleFieldChange] = useState({
		name: "",
		password: "",
		confirmPassword: "",
		confirmationCode: "",
	      });
	//       const history = useHistory();
	      const [newUser, setNewUser] = useState(null);
	//       const { userHasAuthenticated } = useAppContext();
	      const [isLoading, setIsLoading] = useState(false);
	    
	      function validateForm() {
		return (
		  fields.email.length > 0 &&
		  fields.password.length > 0 &&
		  fields.password === fields.confirmPassword
		);
	      }
	    
	      function validateConfirmationForm() {
		return fields.confirmationCode.length > 0;
	      }
	    
	      async function handleSubmit(event) {
		event.preventDefault();
	    
		setIsLoading(true);
	    
		setNewUser("test");
	    
		setIsLoading(false);
	      }
	    
	      async function handleConfirmationSubmit(event) {
		event.preventDefault();
	    
		setIsLoading(true);
	      }
	
	      function renderConfirmationForm() {
		return (
		  <Form onSubmit={handleConfirmationSubmit}>
		    <Form.Group controlId="confirmationCode" size="lg">
		      <Form.Label>Confirmation Code</Form.Label>
		      <Form.Control
			autoFocus
			type="tel"
			onChange={handleFieldChange}
			value={fields.confirmationCode}
		      />
		      <Form.Text muted>Please check your email for the code.</Form.Text>
		    </Form.Group>
		    <Button 
			isLoading={isLoading}
			disabled={!validateConfirmationForm}
		    	type="submit"></Button>
		  </Form>
		);
	      }
	
	      function renderForm() {
		return (
		  <Form onSubmit={handleSubmit}>
		    <Form.Group controlId="email" size="lg">
		      <Form.Label>Email</Form.Label>
		      <Form.Control
			autoFocus
			type="email"
			value={fields.email}
			onChange={handleFieldChange}
		      />
		    </Form.Group>
		    <Form.Group controlId="password" size="lg">
		      <Form.Label>Password</Form.Label>
		      <Form.Control
			type="password"
			value={fields.password}
			onChange={handleFieldChange}
		      />
		    </Form.Group>
		    <Form.Group controlId="confirmPassword" size="lg">
		      <Form.Label>Confirm Password</Form.Label>
		      <Form.Control
			type="password"
			onChange={handleFieldChange}
			value={fields.confirmPassword}
		      />
		    </Form.Group>
		    <br/>
		    <Button 
			isLoading={isLoading}
			disabled={!validateForm}
			type="submit">Submit</Button>
		  </Form>
		);
	      }

	return(
		<div className="Signup">
		<h3>Sign Up here!</h3>
      		{newUser === null ? renderForm() : renderConfirmationForm()}
    		</div>
	)
}

export default Signup