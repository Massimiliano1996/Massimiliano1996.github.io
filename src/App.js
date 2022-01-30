import './index.css'
import './App.css';
import './assets/images/world.jpg'
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Meteo from './pages/Meteo'
import Navbar from './components/Home/Navbar';



function App() {






  return (
    <>
{/*  */}
<Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Meteo' element={<Meteo/>}/>
  </Routes>
</Router>
    
</>




      

    
  );
}

export default App;
