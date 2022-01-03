import React from "react"
import Image from 'react-bootstrap/Image'
import kids from "./kids.png";
import SignUpContainer from "./SignUpContainer";

function Home({ doUser }) {
	const imageStyle ={
		paddingTop: "10vh",
		
	}
	return (
		<div className="Home" style={imageStyle} >
			<Image src={kids}  rounded/>

			<SignUpContainer
			doUser={doUser}
			/>
			<br/>
		</div>

	);
}

export default Home