import React from "react"
import SearchBar from "./SearchBar"
// import {Button} from "react-bootstrap"

// Parent

function Header({ search, setSearch}) {	

	const faqStyle = {
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: "center",
		flexDirection: 'column',
		paddingTop: '20px',
		fontFamily: 'Montserrat',
		fontWeight: 'bolder',
		backgroundColor: "#A7C7E7"
	}

	return (
		<div 
		class="d-flex mx-auto justify-content-center"
		style={faqStyle}
		>
			<div>
			<SearchBar
			// shelters={displayHousing} 
			search={search}
			setSearch = {setSearch}
			/>						
			</div>

		</div>
	)
}

export default Header