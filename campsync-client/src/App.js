import logo from './logo.svg';
import './App.css';
import React from 'react';
import { RoutesList } from './Routes';
import Campaigns from './pages/Campaigns';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Homepage
          Campaigns
        </p>
        
        

      </header>
      
      
    </div>
  );
}

export default App;
