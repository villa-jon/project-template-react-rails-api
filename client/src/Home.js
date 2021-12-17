import React, {useEffect, useState} from "react"
import Image from 'react-bootstrap/Image'
import Login from './Login'
import kids from "./kids.png";

function Home() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch("/me").then((response) => {
		  if (response.ok) {
		    response.json().then((user) => setUser(user));
		  }
		});
	      }, []);

	function handleLogin(user) {
		setUser(user);
	      }
	    
	function handleLogout() {
		setUser(null);
	      }

	return (
		<div className="Home">
			<Login
			onLogin={handleLogin}
			onLogout={handleLogout}
			resdient={user}
			/>
			<br/>
			<Image src={kids} className="kids-style" rounded/>
		</div>

	);
}

export default Home