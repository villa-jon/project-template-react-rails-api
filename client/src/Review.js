import React, {useState, useEffect} from "react"
import ReviewCard from "./ReviewCard"
// import { Card, Button } from "react-bootstrap"

function Review({review}){

	// const [review, setReviews]=useState('')
	/*
	We commented out the submit since Jon is thinking about the submit, need to put in the form
	*/
	// function handleSubmit(w) {
	// 	w.preventDefault();
		// useEffect(() => {
			// fetch("/reviews", {
			// method: "GET",
			// headers: {
			// 	"Content-Type": "application/json",
			// 	"Accept" : "application/json"
			// },
			// })
			// .then(response => response.json())
			// .then((response) => response.json())
			// .then((review) => {
				// setReviews(review)
				// console.log(review)
				// return (resident)
				// setLogin(true)
			// })
	// }, [])
	// }	
			// history.push("/home")
		return(
		<div className="reviewsCardStyle">
			<ReviewCard 
			// onSubmit={handleSubmit}
			review={review}
			/>				
		</div>
	)
	}


export default Review