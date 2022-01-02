import React, {useEffect} from "react"
import Image from 'react-bootstrap/Image'
// import { Navigate } from "react-router-dom"
import Signup from './Signup'
// import history from './history'
// import { Button } from "react-bootstrap"
import kids from "./kids.png";

function Home({ setUser }) {
	// const [user, setUser] = useState({});
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

	// if (!user) return <Login onLogin={setUser} />;

	// function handleLogin(user) {
	// 	setUser(user);
	// 	const token = user.token
	// 	localStorage.token = token
	// 	console.log(history.push)
	// 	// history.push("/")
	// 	// if (user) {
	// 	// 	return <Navigate to="/home"/>
	// 	// }
	//       }
	  
	// function handleLogout() {
	// 	setUser(null);
	//       }

	return (
		<div className="Home">
			<Image src={kids} className="kids-style" rounded/>
			<Signup 
			setUser={setUser}/>
			<br/>
		</div>

	);
}

export default Home