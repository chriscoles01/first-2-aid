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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Location from './Location.js'


const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const userLng = this.props.emergency.userLng;
    const userLat = this.props.emergency.userLat;
    const location  = this.props.emergency.place == null ? [0,0] : this.props.emergency.place.bounding_box.coordinates[0][0]
    const destLng = location[1];
    const destLat = location[0];
    const mapUrl = "http://maps.google.com/?saddr=" + userLng + "," + userLat + "&daddr=" + destLng + "," + destLat;
    
    return (
      <Card className={classes.card}>
        <CardContent>
          <div>
            <h1>{this.props.emergency.user.name}, {this.props.emergency.place == null ? "no location" : this.props.emergency.place.bounding_box.coordinates[0][0][1]}</h1>
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
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div>
            <Button color="secondary" variant="contained" onClick={ () => window.open(mapUrl,'_blank')} className={classes.button}>Get Directions</Button>            
            <Location emergency_location={ location}/>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);