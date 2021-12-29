import React, {useEffect, useState} from "react"
import Header from "./Header"
import HousingCard from "./HousingCard"
import NewHousingCard from "./NewHousingCard"

const cardStyle = {
	fontFamily: 'Montserrat',
	fontWeight: 'bolder',
	// padding: '20px'
}

function Housing() {
	const [shelters, setShelters] = useState([])
  	const [search, setSearch] = useState("")

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

	let displayHousing = shelters.filter(
		w => w.name.toLowerCase().includes(search.toLowerCase()))
	      console.log(displayHousing)
	    
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
			shelters={displayHousing} 
			search={search} 
			setSearch={setSearch}/>
			<NewHousingCard addHousing={handleAddHouse}/>
			<HousingCard 
			shelters = {shelters}
			 addHousing={handleAddHouse}
			 updatedAr={handleUpdate}
			/>

		</div>
	)
}

export default Housing