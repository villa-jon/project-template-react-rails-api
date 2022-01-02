import React from "react";
import LoginContainer from './Login'

function LoginPage({onLogin, resident}) {
	return(
		<div>
			<LoginContainer
			onLogin={onLogin}
			// onLogout={logOut}
			resident={resident}/>
		</div>
	)
	

}

export default LoginPage