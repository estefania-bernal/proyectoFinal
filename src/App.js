import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login'
import Preferences from './components/Preferences/Preferences';
import useToken from '../src/useToken';
import Navbar from './components/NavBar';
import Peliculas from './components/Peliculas/Peliculas';
import Home from './components/Home';
import Ecommerce from './components/Ecommerce/Ecommerce';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <Router>
        <h1 className='text-center'><span class="border-bottom rounded-3">Disney <b>World</b></span></h1>
        <Navbar />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Preferences" element={<Preferences/>}/>
            <Route path="/Peliculas" element={<Peliculas/>}/>
            <Route path="/Ecommerce" element={<Ecommerce/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes> 
      </Router>
    </div>
  );
}

export default App;