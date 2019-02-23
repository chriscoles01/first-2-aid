import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeForm from './HomeForm'
import Grid from '@material-ui/core/Grid'
import logo from '../logo.svg';
import Location from './Location.js'
import { relative } from 'path';

const styles = theme => ({
    button: {
      spacing: value => value**2,
    }
  });

class Home extends React.Component{
    render (){
        return(
        <React.Fragment>
            <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Button mx={2} variant="contained" color="secondary">
          Share
        </Button>
        <Button margin="50px" variant="contained" color="secondary">
        Learn More
        </Button>
        </div>
          <Location/>
        </header>
    </React.Fragment>
        );
    }
}
export default Home;