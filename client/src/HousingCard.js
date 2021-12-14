import React from "react"
import { Card, Button } from "react-bootstrap"

function HousingCard({shelters}){
	const shelter = shelters.map((shelters) => 
		<div className="cardParent">
		<Card border="dark" className="card" key={shelters.id} >
		<Card.Img variant="top" src = {shelters.image} placeholder={"holder.js/100px180"}/>
		<div className="cardText">
		<Card.Body className="cardText">
			<Card.Title>{shelter.name}</Card.Title>
			<Card.Text >
				{shelters.description.length > 50 ? <li>
				{shelters.description.substring(0, 15) + "..." }
				</li> : <li>{shelters.description}</li> }
				<li>{shelters.created_at}</li>
			</Card.Text>
			<Button variant="primary" href={shelters.url}>Link</Button>
		</Card.Body>
		</div>
		</Card>					
		</div>
	)
		return(
		<div className="newsCardStyle">
			{shelter}				
		</div>
	)
	}

export default HousingCard