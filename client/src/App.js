import React, {useEffect, useState} from "react"
import { Route, Routes } from "react-router-dom"
import {createBrowserHistory} from 'history' 
import './App.css';
import Home from './Home'
import Housing from './Housing'
import NavBar from './NavBar';
import About from './About'
import LoginPage from "./LoginPage";

function App() {
  const [user, setUser] = useState(null);
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
		setUser(null);}

  function handleLogin(user) {
		setUser(user);
    setUser(user);
		const token = user.token
		localStorage.token = token
		console.log(history.push)
		// console.log(user.token)
	      }

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
            doUser={setUser}
          />} />
          <Route 
          className="sixteen wide column centered"
          path="/housing" 
          element={<Housing
          />}/>
          <Route path="/about" 
          element={<About/>}/>
          <Route path="/loginpage"
          element={<LoginPage
          onLogin={handleLogin}
          resident={user}
          />}
          />
        </Routes>
    
    </div>
  );
}

export default App
