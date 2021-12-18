import React from "react";
import { Accordion } from "react-bootstrap"

function About() {
	const faqStyle = {
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: "center",
		flexDirection: 'column',
		paddingTop: '20px',
		fontFamily: 'Montserrat',
		fontWeight: 'bolder'
	}

	return(
		<div style={faqStyle}>
			<h1>What this website is about:</h1>
			<Accordion defaultActiveKey="0">
			<Accordion.Item eventKey="0">
				<Accordion.Header>What this is about?</Accordion.Header>
				<Accordion.Body>
				Current statistics show that houselessness is on the rise. 1 in 4 families in America now suffer from unstable housing and insecure living 
				arrangements. This website is to help give resources, secure housing, and overall ways to help struggling families find affordable residency 
				for haf the cost. 
				</Accordion.Body>
				</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Who am I?</Accordion.Header>
				<Accordion.Body>
				I am one of the many students currently attending FlatIron School for Technology. For my project, I wanted to create a way to access 
				resources for families to use during times of uncertainty. We are currently living in an unstable time in American history and American families 
				deserve to have a home to live in. 
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2">
			<Accordion.Header>Who am I?</Accordion.Header>
				<Accordion.Body>
				I am one of the many students currently attending FlatIron School for Technology. For my project, I wanted to create a way to access 
				resources for families to use during times of uncertainty. We are currently living in an unstable time in American history and American families 
				deserve to have a home to live in. 
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="3">
			<Accordion.Header>Who am I?</Accordion.Header>
				<Accordion.Body>
				I am one of the many students currently attending FlatIron School for Technology. For my project, I wanted to create a way to access 
				resources for families to use during times of uncertainty. We are currently living in an unstable time in American history and American families 
				deserve to have a home to live in. 
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="4">
			<Accordion.Header>Who am I?</Accordion.Header>
				<Accordion.Body>
				I am one of the many students currently attending FlatIron School for Technology. For my project, I wanted to create a way to access 
				resources for families to use during times of uncertainty. We are currently living in an unstable time in American history and American families 
				deserve to have a home to live in. 
				</Accordion.Body>
			</Accordion.Item>
			</Accordion>
		<br/>
		</div>
		
	)
}

export default About