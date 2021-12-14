import React from "react"
import SearchBar from "./SearchBar"
// import {Button} from "react-bootstrap"

// Parent

function Header({shelters, search, setSearch}) {	

	const faqStyle = {
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: "center",
		flexDirection: 'column',
		paddingTop: '20px',
		fontFamily: 'Montserrat',
		fontWeight: 'bolder'
	}

	return (
		<div 
		class="d-flex mx-auto justify-content-center"
		style={faqStyle}
		>
			<div>
			<SearchBar
			shelters={shelters}
			search={search}
			setSearch = {setSearch}
			/>						
			</div>

		</div>
	)
}

export default Header