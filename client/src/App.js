import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
// import {createBrowserHistory} from 'history' 
import './App.css';
import Home from './Home'
import Housing from './Housing'
import NavBar from './NavBar';
import About from './About'

function App() {
  const [user, setUser] = useState(null);

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
          {/* <Route path="/loginpage"
          element={<LoginPage
          />} */}
        </Routes>
    
    </div>
  );
}

export default App
