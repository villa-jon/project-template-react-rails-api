import React from "react"
import { Card, Button } from "react-bootstrap"
import "./ReviewCard.css"

function ReviewCard({ review }){
	console.log(review)
	
	/*
	the parent is Review.js
	*/

	// const reviewCards = () => {
	// 	let comm;
	// 	let reviewID;
	// 	let rating
	// 	for (let i=0; i < review.length; i++) {
	// 		comm = review[i].comment
	// 		reviewID = review[i].id
	// 		rating = review[i].rating
	// 	}

	// 	return (
			
	// 	<div className="cardParent">
	// 	<Card border="dark" className="card"  >
	// 		<div className="cardText" key={reviewID}>
	// 		<Card.Body className="cardText">
	// 		<Card.Title>Reviews</Card.Title>
	// 		<Card.Text >
	// 		{comm}
	// 		</Card.Text>
 	// 		<p>{rating}</p>
		
	// 		</Card.Body>
	// 		</div>
	// 	</Card>					
	// 	</div>
		
	// 	)
	// }
	const reviewCards = () => {
		return review.map((r) => (
				<div className="cardParent">
		<Card border="dark" className="card"  >
		<div className="cardText" key={r.id}>
		<Card.Body className="cardText">
			<Card.Title>Reviews</Card.Title>
			<Card.Text >
				{r.comment}
				{r.rating}
			</Card.Text>
		
		
		</Card.Body>
		</div>
		</Card>					
		</div>
		)

		)
		// return review.map((r) => {
		// 	<div className="cardParent">
		// <Card border="dark" className="card"  >
		// <div className="cardText" key={r.id}>
		// <Card.Body className="cardText">
		// 	<Card.Title>Reviews</Card.Title>
		// 	<Card.Text >
		// 		{r.comment}
		// 		{r.rating}
		// 	</Card.Text>
		
		
		// </Card.Body>
		// </div>
		// </Card>					
		// </div>
		// })

	}
		return(
		<div >
				{reviewCards()}
		</div>
	)
	}


export default ReviewCard