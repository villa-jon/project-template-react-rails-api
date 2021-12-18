import React, {useEffect, useState} from "react"
import Image from 'react-bootstrap/Image'
import Login from './Login'
import Signup from './Signup'

import kids from "./kids.png";

function Home() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch("/residents", {
			method: "GET",
		})
		  .then((user) => {
		  setUser(user);
		// setSearch(data.data);
		  console.log(user)
		  })
		}, []);

	function handleLogin(user) {
		setUser(user);
		console.log(user)
	      }
	   
	function handleLogout() {
		setUser(null);
	      }

	return (
		<div className="Home">
			<Login
			onLogin={handleLogin}
			onLogout={handleLogout}
			resdient={user}/>
			<Signup setUser={setUser}/>
			<br/>
			<Image src={kids} className="kids-style" rounded/>
		</div>

	);
}

export default Home