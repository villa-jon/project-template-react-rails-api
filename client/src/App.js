// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './Home'
// import HousingCard from './HousingCard'
import Housing from './Housing'
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/housing" element={<Housing/>}/>
        {/* <Route path="/" element={<Catering/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
