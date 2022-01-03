import React from "react"
import Image from 'react-bootstrap/Image'
import kids from "./kids.png";
import SignUpContainer from "./SignUpContainer";

function Home({ doUser }) {
	// const [user, setUser] = useState({});
	// const navigate = useNavigate(); 

	// useEffect(() => {
	// 	fetch("/residents", {
	// 		method: "GET",
	// 	})
	// 	  .then((user) => {
	// 	  doUser(user);
	// 	// setSearch(data.data);
	// 	  console.log(user)
	// 	  })
	// 	}, []);

	return (
		
		<div className="Home">
			<Image src={kids} className="kids-style" rounded/>

			<SignUpContainer
			doUser={doUser}
			/>
			<br/>
		</div>

	);
}

export default Home