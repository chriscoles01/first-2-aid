import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Home extends React.Component{
    render (){
        return(
        <React.Fragment>
    <AppBar position="static" color="default">
    <Toolbar>
      <Button>Features</Button>
      <Button>Enterprise</Button>
      <Button>Support</Button>
      <Button color="primary" variant="outlined">
        Login
      </Button>
    </Toolbar>
    </AppBar>
    </React.Fragment>
        );
    }
}
export default Home;