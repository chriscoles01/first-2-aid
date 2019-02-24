import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Location from './Location.js'
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';


const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    // transform: 'rotate(0deg)',
    marginLeft: 'auto',
    // transition: theme.transitions.create('transform', {
    //   duration: theme.transitions.duration.shortest,
    // }),
  },
  expandOpen: {
    // transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  finishedavatar: {
    backgroundColor: green[500],
  },
  card: {
    maxWidth: 800,
    marginLeft: "auto",
    marginRight: "auto",
  }
});

class EmergencyItem extends React.Component {
  state = { expanded: false, replySent: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  distance(lat1, lon1, lat2, lon2) {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344 
      return Math.round(dist);
    }
  }

  post = () => {
    fetch('http://127.0.0.1:8080/twitter/reply', {
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.props.emergency.user.screen_name,
          id: this.props.emergency.id_str,
          name: this.props.name.name
        })
      })
      this.setState({replySent: true})

  }

  render() {
    const { classes } = this.props;
    const userLng = this.props.myLoc.myLoc[1];
    const userLat = this.props.myLoc.myLoc[0];
    const location  = this.props.emergency.place == null ? [0,0] : this.props.emergency.place.bounding_box.coordinates[0][0]
    const destLng = location[1];
    const destLat = location[0];
    const distance = this.distance(userLat, userLng, destLat,destLng)
    const mapUrl = "http://maps.google.com/?saddr=" + userLng + "," + userLat + "&daddr=" + destLng + "," + destLat;
    
    return (
      <Card className={classes.card}>
      <CardHeader
          avatar={
            <Avatar  className={this.state.replySent ? classes.finishedavatar : classes.avatar}/>

          }
          
          title={ this.state.replySent ? "First responder on the way,  " + this.props.emergency.created_at:  "NEEDS ATTENTION,  " + this.props.emergency.created_at}

        />
        <CardContent>
          <div>
            <h1>{this.props.emergency.user.name}, {this.props.emergency.place == null ? "no location: look at description" : this.props.emergency.place.full_name + ", " + distance + "km"} </h1>
            <p>{this.props.emergency.text}</p>
          </div>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>          
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
           
          >
          See location and directions
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div>
            <Button color="secondary" variant="contained" onClick={ () => window.open(mapUrl,'_blank')} className={classes.button}>Get Directions</Button>            
            <Location emergency_location={ location}/>
            </div>
            <Button onClick={() => {this.post()}}>Post reply</Button>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

EmergencyItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmergencyItem);