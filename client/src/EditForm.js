import React from "react"
import "./HousingCard.css"
import { Card, Button } from "react-bootstrap"

function EditForm({current, onSubmit, setCurrent}){
	console.log(current)

	const housing = () => {
		return (
		<div className="cardParent">
		<Card border="dark" className="card"  >
		<div className="cardText" key={current.id}>
		<Card.Body className="cardText">
			<Card.Title>{current.name}</Card.Title>
			<Card.Text >
				<input
				value={current.description}
				onChange={(e) => setCurrent(e.target.value)}
				>
				</input>
			</Card.Text>
			<Button variant="primary" onClick={() => {onSubmit(current)}}>Submit</Button>
		</Card.Body>
		</div>
		</Card>					
		</div>
		)
	}
		return(
		<div className="newsCardStyle">
			{housing()}			
		</div>	
	)
	}

export default EditForm