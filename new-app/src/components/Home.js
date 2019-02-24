import React from 'react';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid'
import logo from '../graphics-assets/Logo_Font_Slogan.png';

import Emergencies from './Emergencies.js'

class Home extends React.Component{

  componentDidMount() {
    fetch('http://127.0.0.1:5000/')
      .then(response => response.json())
      .then(data => this.setState({ emergencies: data }));
      console.log(this.state)
  }

  state = {
    emergencies: [],
    myLoc: []
  }

  render (){
    return(
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Grid container spacing={24}>
              <Grid item mx={5}>
                <Button mx="auto" variant="contained" color="secondary">Help</Button>
              </Grid>
              <Grid item mx={5}>
                <Button mx="auto" variant="contained" color="secondary">Login</Button>
              </Grid>
            </Grid>
          </div>
        </header>
        <body>
          <Emergencies emergencies = {this.state.emergencies} myLoc = {this.state.myLoc}/>
        </body>
      </React.Fragment>
    );
  }
}
export default Home;