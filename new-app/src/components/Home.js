import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from '../graphics-assets/Logo_Font_Slogan.png';
// import RequestForm from './RequestForm.js'
import Emergencies from './Emergencies.js'
import Login from './Login.js'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  parent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  bigButton: {
    display: 'flex',
    width: 500,
    height: 500
  }
});

class Home extends React.Component{
  state = {
    emergencies: [],
    myLoc: [],
    requestEnabled: false,
    loggedin: false
  }

  toggleRequest = () => {
    this.setState({requestEnabled: !this.state.requestEnabled})
  }


  askForLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    }
}
  
  componentDidMount() {
    fetch('http://127.0.0.1:5000/')
    .then(response => response.json())
    .then(data => this.setState({ emergencies: data }));
    this.askForLocation()
    console.log(this.state)
   
  }
  getData = () => {
    fetch('http://127.0.0.1:5000/')
    .then(response => response.json())
    .then(data => this.setState({ emergencies: data }));
    console.log(this.state)
}
  
  authenticate = (logged , name) => {
    console.log(name)
    this.setState({loggedin: logged, name: name})
  }


  
showPosition(position) {
    this.setState({
        myLoc: [position.coords.longitude, position.coords.latitude]
    });
}
   

  render (){
    
    
    const { classes } = this.props;
    return(
      <div className={classes.parent}>
          <img src={logo} className="App-logo" alt="logo" />
          <span className={classes.helpButton}>
          </span>
          <div>
          <Grid container spacing={24} align="center">
            <Grid item xs={24}>
              <Login authenticate={this.authenticate}/>
            </Grid>
            <Grid item xs>
              {this.state.loggedin ? <Button variant="contained" color="primary" onClick={() => this.getData()}>Reload</Button> : <div></div>}
              
            </Grid>
          </Grid>
          </div>
          {
            // this.state.requestEnabled ? <RequestForm/> : <br/>
          }
          <br/>
          <br/>
          <div>
          <Emergencies emergencies = {this.state.emergencies} myLoc = {this.state.myLoc} name={this.state.name} loggedin={{loggedin: this.state.loggedin}}/>
          </div>
      </div>
     
    );
    
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);