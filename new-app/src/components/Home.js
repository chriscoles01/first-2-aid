import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from '../graphics-assets/Logo_Font_Slogan.png';
// import RequestForm from './RequestForm.js'
import Emergencies from './Emergencies.js'
import Login from './Login.js'
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
    requestEnabled: false
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
  
  
  
showPosition(position) {
    this.setState({
        myLoc: [position.coords.longitude, position.coords.latitude]
    });
}
   

  render (){
    
    const { classes } = this.props;
    return(
      <div className={classes.parent}>
         
          <div>
          <Login/>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <span className={classes.helpButton}>
          <Button size="large"  classes={{ sizeLarge: classes.bigButton }} variant="contained" color="secondary">Get a first responder</Button>
          </span>
          {
            // this.state.requestEnabled ? <RequestForm/> : <br/>
          }
          <br/>
          <br/>
          <div>
          <Button size="large"  variant="contained" color="primary" onClick={() => this.getData()}>Reload</Button>

          <Emergencies emergencies = {this.state.emergencies} myLoc = {this.state.myLoc}/>
          </div>
      </div>
     
    );
    
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);