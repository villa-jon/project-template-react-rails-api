import React from "react"
import "./HousingCard.css"
import { Card, Button } from "react-bootstrap"

function HousingCard({shelters, deleteHouse}){

	const housing = shelters.map((shelter) => 
		<div className="cardParent">
		<Card border="dark" className="card"  >
		<div className="cardText" key={shelter.id}>
		<Card.Body className="cardText">
			<Card.Title>{shelter.name}</Card.Title>
			<Card.Text >
				{shelter.description.length > 50 ? <li>
				{shelter.description.substring(0, 15) + "..." }
				</li> : <li>{shelter.description}</li> }
				<li>{shelter.created_at}</li>
			</Card.Text>
			<Button variant="primary" href={shelter.url}>Link</Button>
			<Button variant="primary" onClick={ (e) => deleteHouse(e, shelter.id)}>Delete</Button>
		</Card.Body>
		</div>
		</Card>					
		</div>
	)
		return(
		<div className="newsCardStyle">
			{housing}				
		</div>
	)
	}

export default HousingCard