import React from "react"
import Header from "./Header"
import HousingCard from "./HousingCard"
import NewHousingCard from "./NewHousingCard"

function Housing({ search, setSearch, shelters, addHousing, updatedAr }) {
	const cardStyle = {
		fontFamily: 'Montserrat',
		fontWeight: 'bolder',
		// padding: '20px'
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
			shelters={shelters} 
			search={search} 
			setSearch={setSearch}/>
			<NewHousingCard addHousing={addHousing}/>
			<HousingCard 
			shelters = {shelters}
			addHousing ={addHousing}
			updatedAr ={updatedAr}
			/>

		</div>
	)
}

export default Housing