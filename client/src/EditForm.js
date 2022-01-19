import React from "react"
import "./HousingCard.css"
import { Card, Button } from "react-bootstrap"

function EditForm({current}){
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
				// onChange={}
				>
				</input>
			</Card.Text>
			{/* {
				editing ? null :
				<Button onClick={() => {updatedAr(shelter)}}>Edit</Button>
			} */}
			<Button variant="primary" href={current.url}>Link</Button>
			{/* <Button variant="primary" onClick={ (e) => deleteHouse(e, shelter.id)}>Delete</Button> */}
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