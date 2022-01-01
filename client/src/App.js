import React, {useEffect, useState} from "react"
import { Route, Routes } from "react-router-dom"
import {createBrowserHistory} from 'history' 
import './App.css';
import Home from './Home'
// import HousingCard from './HousingCard'
import Housing from './Housing'
import NavBar from './NavBar';
import About from './About'

function App() {
  const [user, setUser] = useState({});
  // const navigate = useNavigate(); 
  const history = createBrowserHistory()

  useEffect(() => {
		fetch("/residents", {
			method: "GET",
		})
		  .then(
        (r) => {
          if (r.ok) {
            r.json()
            .then((user) => setUser(user));
          }
      // ;
		// setSearch(data.data);
		  // console.log(user)
      })
  }, []);

  function handleLogout() {
		setUser({});}

  // function handleLogin(user) {
	// 	setUser(user);
	// 	console.log(user.token)
	//       }

  return (
    <div 
    // history={history}
    className="App">
      <NavBar
      onLogout={handleLogout}
      />
      <Routes history={history}>
        {/* <Routes> */}
    
          
       
                  <Route path="/home" 
          element={<Home
            // onLogin={handleLogin}
            resident={user}
            onLogout={handleLogout}
          />} />
          <Route 
          className="sixteen wide column centered"
          path="/housing" 
          element={<Housing
          // search = {search}
          // addHousing={handleAddHouse}
          // updatedAr={handleUpdate}
          // setShelters = {setShelters}
          // setSearch = {setSearch}
          // shelters = {displayHousing}
          // handleUpdate={updatedArray}
          />}/>
          <Route path="/about" 
          element={<About/>}/>
          
        </Routes>
    
    </div>
  );
}

export default App
