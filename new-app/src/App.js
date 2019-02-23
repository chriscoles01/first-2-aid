import React, { Component } from 'react';
import './App.css';
import Location from './components/Location.js'
import Emergencies from './components/Emergencies.js'
import Home from './components/Home.js'

class App extends Component {
  state = {
    emergencies: [
      {
        id: 1,
        name: 'Simon Brooks',
        description: 'Major laceration on left arm, heavy bleeding',
        distance: '450m',
        location: '[coordinates]',
        expanded: true
      },
      {
        id: 2,
        name: 'Chris Coles',
        description: 'Heart palpatations',
        distance: '666m',
        location: '[coordinates]',
        expanded: false
      },
      {
        id: 3,
        name: 'Vlad Secosan',
        description: 'Concussion',
        distance: '72m',
        location: '[coordinates]',
        expanded: false
      }
    ]
  }

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
