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
        distance: '450m',
        expanded: true
      },
      {
        id: 2,
        name: 'Chris Coles',
        distance: '666m',
        expanded: false
      },
      {
        id: 3,
        name: 'Vlad Secosan',
        distance: '72m',
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
      <Home/>
      </div>
    );
  }
}

export default App;
