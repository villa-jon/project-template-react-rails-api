import React, {useEffect, useState} from "react"
import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './Home'
// import HousingCard from './HousingCard'
import Housing from './Housing'
import NavBar from './NavBar';
import About from './About'

function App() {
  const [shelters, setShelters] = useState([])
  const [search, setSearch] = useState("")
  // const [user, setUser] = useState(null);

  // useEffect(() => {
	// 	fetch("/residents", {
	// 		method: "GET",
	// 	})
	// 	  .then((user) => {
	// 	  setUser(user);
	// 	// setSearch(data.data);
	// 	  console.log(user)
	// 	  })
	// 	}, []);

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

  // function handleLogout() {
	// 	setUser(null);

  // function handleLogin(user) {
	// 	setUser(user);
	// 	console.log(user)
	//       }

  return (
    <div className="App">
      <NavBar
      // onLogout={handleLogout}
      />
      <Routes>
        <Route path="/" 
        element={<Home
          // onLogin={handleLogin}
          // user={user}
        />} />
        <Route 
        className="sixteen wide column centered"
        path="/housing" 
        element={<Housing
        search = {search}
        addHousing={handleAddHouse}
        updatedAr={handleUpdate}
        setShelters = {setShelters}
        setSearch = {setSearch}
        shelters = {displayHousing}
        // handleUpdate={updatedArray}
        />}/>
        <Route path="/about" 
        element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
