import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Location from './components/Location.js'
import Emergencies from './components/Emergencies.js'
//import {geolocated} from 'react-geolocated';

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
      
      <Emergencies emergencies={this.state.emergencies}/>

      <Location/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to see if this works :)
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
