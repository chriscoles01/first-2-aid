import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from '../graphics-assets/Logo_Font_Slogan.png';

import Emergencies from './Emergencies.js'

const styles = theme => ({
  helpButton: {
    maxWidth: 800,
    marginLeft: "auto",
    marginRight: "auto",
  },
  loginButton: {
    maxWidth: 800,
    marginLeft: "auto",
    marginRight: "auto",
  },
  

});

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
    const { classes } = this.props;

    return(
      <Fragment>
      
         
          <div>
          <Button mx="auto" variant="contained" color="secondary">First Aider Login</Button>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          
          <Button className={classes.helpButton} size="lg" style={{marginLeft: "auto",marginRight: "auto"}} variant="contained" color="secondary">Help</Button>

          <Emergencies emergencies = {this.state.emergencies} myLoc = {this.state.myLoc}/>
 
      </Fragment>
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);