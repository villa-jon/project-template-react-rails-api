import React,  {useState } from "react";
import { Button } from "react-bootstrap";
import Login from './Login'

function LoginContainer({onLogin, resident}) {
	const [modalShow, setModalShow] = useState(false);

	const buttonStyle = {
		paddingTop: "1vh" 
	}

	return(
		<div className={buttonStyle}>
			<Button variant="primary" onClick={() => setModalShow(true)}>
        			Login
      			</Button>
			<Login
			onLogin={onLogin}
			resident={resident}
			show={modalShow}
        		onHide={() => setModalShow(false)}
			/>
			
		</div>
	)
	

}

export default LoginContainer