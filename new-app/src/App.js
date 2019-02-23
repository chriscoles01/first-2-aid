import React, { Component } from 'react';
import './App.css';
import Location from './components/Location.js'
import Emergencies from './components/Emergencies.js'
import Home from './components/Home.js'

class App extends Component {
  getLocation = () =>{
    return (
      <Location />
    )
  }
 
  render() {
    return (
      <div className="App">
      <Home/>
      </div>
    );
  }
}

export default App;
