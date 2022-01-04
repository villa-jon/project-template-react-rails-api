import React from "react"
import Image from 'react-bootstrap/Image'
import kids from "./kids.png";
import SignUpContainer from "./SignUpContainer";

const faqStyle = {
	display: 'flex', 
	alignItems: 'center', 
	justifyContent: "center",
	flexDirection: 'column',
	// paddingTop: '20px',
	fontFamily: 'Montserrat',
	fontWeight: 'bolder',
	paddingBottom: "9vh",
	fontSize: "9vh",
}

function Home({ doUser }) {
	const imageStyle ={
		paddingTop: "10vh",
		
	}
	return (
		<div className="Home" style={imageStyle} >
			<header
			style={faqStyle}
			>Welcome to our website!</header>
			<Image src={kids}  rounded/>

			<SignUpContainer
			doUser={doUser}
			/>
		</div>

	);
}

export default Home