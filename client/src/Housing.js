import React, {useEffect, useState} from "react"
import Header from "./Header"
import HousingCard from "./HousingCard"
import EditForm from "./EditForm"
import NewHousingCard from "./NewHousingCard"
import {useParams} from "react-router-dom"

let cardStyle = {
	fontFamily: 'Montserrat',
	fontWeight: 'bolder',
	// padding: '20px'
}

function Housing() {
	let initialFormState = {
		id: "",
		address: "",
		rating: "",
		description: "",
		name: "",
		url: ""
	}

	const [shelters, setShelters] = useState([])
  	const [search, setSearch] = useState("")
	const [editing, setEditing] = useState(false)
	const [current, setCurrent] = useState(initialFormState)
	const { id } = useParams()

	useEffect(() => {
		console.log("useEffect");
		fetch("/shelters", {
		  method: "GET",
		})
		  .then((r) => r.json())
		  .then((shelters) => {
		  setShelters(shelters);
		// setSearch(data.data);
		  console.log(shelters)
		  })
		}, []);

	const editHouse = (shelters) => {
		console.log(shelters)
		setEditing(true);
		setCurrent({
			id: shelters.id, 
			address: shelters.address,
			rating: shelters.rating, 
			description: shelters.description, 
			name: shelters.name, 
			url: shelters.url

		})
	}


	
	function handleDelete(w, id) {
		console.log("id", id)
		w.preventDefault()
		fetch(`/shelters/${id}`, {
			method: "DELETE", 
		})
		// console.log(fetch)
		// .then((response) => response.json())
		.then(() => {
			handleRemoveItem(id)
		})
	}

	function handleRemoveItem(id) {
		const goneBs = shelters.filter((shelter) => shelter.id !== id)
		 setShelters(goneBs);
	       }
	    
	function handleAddHouse(newHouse) {
		  const updatedArray = [...shelters, newHouse];
		  setShelters(updatedArray);
		      }
	     
        function handleUpdate(updatedHE) {
		// setEditing(false)

		// fetch(`/shelters/${id}`, {
		// 	method: "PATCH",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 		"Accept" : "application/json"
		// 	},
		// 	body: JSON.stringify({
		// 		shelters: {
		// 			description: updatedHE.description, 
		// 			name: updatedHE.name, 
		// 		}
		// 	}),
		// 	})
		// 	// .then(response => response.json())
		// 	.then((response) => response.json())
		
		// setShelters(shelters.map(shelters => (shelters.id === updatedHE.id ? updatedHE : shelters)))
	      }


	      const displayHousing = shelters.filter((shelter) => {
		return  shelter.name.toLowerCase().includes(search.toLowerCase())}
		)
	      console.log(displayHousing)
	// const card = {
	// 	backgroundColor: "#A7C7E7"
	// }
	return (
		<div>
			<h1 
			className="d-flex mx-auto justify-content-center"
			style={cardStyle}
			>
				Resource Listings
			</h1>
			<Header 
			shelters={shelters}
			search={search} 
			setSearch={setSearch}/>
			<NewHousingCard addHousing={handleAddHouse}/>
			{editing ? 
			<EditForm
			current={current}

			/> :
			<HousingCard 
			// display={displayHousing}
			editing={editing}
			shelters = {displayHousing}
			addHousing={handleAddHouse}
			updatedAr={editHouse}
			deleteHouse={handleDelete}
			/>}
		</div>
	)
}

export default Housing