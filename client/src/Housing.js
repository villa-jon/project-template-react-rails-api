import React, {useEffect, useState} from "react"
import Header from "./Header"
import HousingCard from "./HousingCard"
import NewHousingCard from "./NewHousingCard"
import {useParams} from "react-router-dom"

let cardStyle = {
	fontFamily: 'Montserrat',
	fontWeight: 'bolder',
	// padding: '20px'
}

function Housing() {
	const [shelters, setShelters] = useState([])
  	const [search, setSearch] = useState("")
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
	     
	      function handleUpdate(update) {
		 const updatedHArray = shelters.map((shelter) => {
		    if (shelter.id === update.id) {
		       return update;
			  } else {
		      return shelter;
		      }
		  });
		  setShelters(updatedHArray);
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
			<HousingCard 
			// display={displayHousing}
			shelters = {displayHousing}
			 addHousing={handleAddHouse}
			 updatedAr={handleUpdate}
			 deleteHouse={handleDelete}
			/>

		</div>
	)
}

export default Housing