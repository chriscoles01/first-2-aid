import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Location from './components/Location.js'
import {geolocated} from 'react-geolocated';

class App extends Component {

  getLocation = () =>{
    return (
      <Location />
    )
  }
 
  render() {
    return (
      <div className="App">
      
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
