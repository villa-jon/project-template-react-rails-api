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

  let displayHousing = shelters.filter(
    w => w.title.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    console.log("useEffect");
    fetch("http://localhost:3000/shelters", {
      method: "GET",
      // headers: {
      //   'Content-Type': 'application/json',
      //   mode: 'cors',
      //   credentials: 'include'
      // },
    })
      .then((r) => r.json())
      .then((shelters) => {
      setShelters(shelters);
    // setSearch(data.data);
      console.log(shelters)
      })
    }, []);

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" 
        element={<Home
          // onLogin={handleLogin}
          // user={user}
          // onLogout={handleLogout}
        />} />
        <Route path="/housing" 
        element={<Housing
        search = {search}
        setSearch = {setSearch}
        shelters = {displayHousing}
        />}/>
        <Route path="/about" 
        element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
