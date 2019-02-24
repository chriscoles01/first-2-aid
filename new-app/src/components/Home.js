import React from 'react';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeForm from './HomeForm'
import Grid from '@material-ui/core/Grid'
import logo from '../graphics-assets/Logo_Font_Slogan.png';
import Location from './Location.js'
import Emergencies from './Emergencies.js'

class Home extends React.Component{

  componentDidMount() {
    fetch('https://api.mydomain.com')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  state = {
    emergencies: [
      {
        id: 1,
        name: 'Simon Brooks',
        description: 'Major laceration on left arm, heavy bleeding',
        distance: '450m',
        userLng: "50.937681",
        userLat: "-1.395844",
        destLng: '50.920505',
        destLat: '-1.404671',
        expanded: true
      },
      {
        id: 2,
        name: 'Chris Coles',
        description: 'Heart palpatations',
        distance: '666m',
        userLng: "50.937681",
        userLat: "-1.395844",
        destLng: '50.920505',
        destLat: '-1.404671',
        expanded: false
      },
      {
        id: 3,
        name: 'Vlad Secosan',
        description: 'Concussion',
        userLng: "50.937681",
        userLat: "-1.395844",
        distance: '72m',
        destLng: '50.920505',
        destLat: '-1.404671',
        expanded: false
      }
    ]
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
          <Emergencies emergencies = {this.state.emergencies} />
        </body>
      </React.Fragment>
    );
  }
}
export default Home;