import React, {useEffect, useState} from "react"
import Image from 'react-bootstrap/Image'
// import { useNavigate } from "react-router-dom"
import Login from './Login'
import Signup from './Signup'
import history from './history'
// import { Button } from "react-bootstrap"
import kids from "./kids.png";


function Home() {
	const [user, setUser] = useState({ });
	// const navigate = useNavigate(); 


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
		const token = user.token
		localStorage.token = token
		console.log(history)
		// history.push("/")
		// navigate.push("/home")
	      }
	   
	// function handleLogout() {
	// 	setUser(null);
	//       }

	return (
		<div className="Home">
			<Image src={kids} className="kids-style" rounded/>
			<Login
			onLogin={handleLogin}
			// onLogout={logOut}
			resident={user}/>
			<Signup setUser={setUser}/>
			<br/>
		</div>

	);
}

export default Home