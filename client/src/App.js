import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
// import {createBrowserHistory} from 'history' 
import './App.css';
import Home from './Home'
import Housing from './Housing'
import NavBar from './NavBar';
import About from './About'
import Review from './Review'

function App() {
  const [user, setUser] = useState(null);
  const [review, setReviews]=useState('')

  useEffect(() => {
		fetch("/reviews", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Accept" : "application/json"
		},
		})
		// .then(response => response.json())
		.then((response) => response.json()).then(item => {
      console.log(item)
      // console.log()
      setReviews(item)
      console.log(review)
      
    })
		// .then((review) => {
		// 	setReviews(review)
    //   console.log('this is the review in app' + review)
		// 	// return (resident)
		// 	// setLogin(true)
		// })
	}, [])

  function handleLogout() {
		setUser(null);
    localStorage.clear()
  }

  function handleLogin(user) {
		setUser(user);
    // setUser(user);
		const token = user.token
		localStorage.token = token
		// console.log(history.push)
		// console.log(user.token)
	      }

  return (
    <div 
    // history={history}
    className="App">
      <NavBar
      onLogout={handleLogout}
      onLogin={handleLogin}
      users={user}
      // name={name}
      />
      <Routes>
        {/* <Routes> */}    
          <Route path="/home" 
          element={<Home
            doUser={setUser}
          />} />
          <Route 
          className="sixteen wide column centered"
          path="/housing" 
          element={<Housing
          />}/>
          <Route path="/about" 
          element={<About/>}/>
          <Route path="/reviews"
          element={<Review review={review}/>}/>
        </Routes>
    
    </div>
  );
}

export default App
