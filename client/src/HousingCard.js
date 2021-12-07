import React from "react"
import { Card, Button } from "react-bootstrap"

function HousingCard({shelters}){
	const shelters = shelters.map((shelters) => 
		<div className="cardParent">
		<Card border="dark" className="card" key={shelters.title} >
		<Card.Img variant="top" src = {shelters.image} placeholder={"holder.js/100px180"}/>
		<div className="cardText">
		<Card.Body className="cardText">
			<Card.Title>{article.title}</Card.Title>
			<Card.Text >
				{shelters.description.length > 50 ? <li>
				{shelters.description.substring(0, 15) + "..." }
				</li> : <li>{shelters.description}</li> }
				<li>Source: {shelters.source}</li>
				<li>Country: {shelters.country}</li>
				<li>Category: {shelters.category}</li>
				<li>{shelters.published_at}</li>
				{/* {article.language} */}
			</Card.Text>
			<Button variant="primary" href={shelters.url}>Link</Button>
		</Card.Body>
		</div>
		</Card>					
		</div>
	)
	
	return(
		<div className="newsCardStyle">
			{tasksthing}				
		</div>
	)
	}

export default HousingCard