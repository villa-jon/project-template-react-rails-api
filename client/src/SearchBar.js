import React from "react"

function SearchBar({ search, setSearch }) {
	const BarStyling = {
	width:"20rem",
	background:"#F2F1F9", 
	border:"none", 
	padding:"0.5rem"};

	return (
	<div>
	<input 
		type="text"
		id="search"
		style={BarStyling}
	 	value={search}
	        placeholder={"search"}
	        onChange={(w) => setSearch(w.target.value)}
	  />
	</div>
	  
	);
}

export default SearchBar