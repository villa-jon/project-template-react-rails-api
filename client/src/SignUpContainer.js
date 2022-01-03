import React, {useState} from "react";
import Signup from './Signup'
import {Button} from 'react-bootstrap'


function SignUpContainer({setUser}) {
	const [modalShow, setModalShow] = useState(false);

	return(
		<div>
			<Button variant="primary" onClick={() => setModalShow(true)}>
				Sign Up here      	
			</Button>
			<Signup 
			show={modalShow}
			onHide={() => setModalShow(false)}
			setUser={setUser}/>
		</div>
	)

}

export default SignUpContainer