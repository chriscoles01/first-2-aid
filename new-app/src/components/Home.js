import React from 'react';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeForm from './HomeForm'
import Grid from '@material-ui/core/Grid'
import logo from '../logo.svg';
import Location from './Location.js'

class Home extends React.Component{
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
    </React.Fragment>
        );
    }
}
export default Home;