import React from "react"
import Header from "./Header"
import HousingCard from "./HousingCard"

function Housing({ search, setSearch, shelters }) {
	return (
		<div>
			<HousingCard shelters = {shelters}/>
			<Header shelters={shelters} search={search} setSearch={setSearch}/>
		</div>
	)
}

export default Housing