import React, {useState} from "react";
import Signup from './Signup'
import {Button} from 'react-bootstrap'

function SignUpContainer({doUser}) {
	const [modalShow, setModalShow] = useState(false);

	const buttonStyle = {
		paddingTop: "1vh" 
	}

	return(
		<div style={buttonStyle}>
			<Button variant="primary" onClick={() => setModalShow(true)}>
				Sign Up here      	
			</Button>
			<Signup 
			show={modalShow}
			onHide={() => setModalShow(false)}
			setUser={doUser}/>
		</div>
	)

}

export default SignUpContainer