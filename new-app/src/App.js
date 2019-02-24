import React, { Component } from 'react';
import './App.css';
import Location from './components/Location.js'

import Home from './components/Home.js'

class App extends Component {
  getLocation = () =>{
    return (
      <Location />
    )
  }
 
  render() {
    return (

      <Home/>

    );
  }
}

export default App;
