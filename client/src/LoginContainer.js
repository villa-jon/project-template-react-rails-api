import React from "react";
import Login from './Login'

function LoginContainer({onLogin, resident}) {
	return(
		<div>
			<Login
			onLogin={onLogin}
			// onLogout={logOut}
			resident={resident}/>
		</div>
	)
	

}

export default LoginContainer