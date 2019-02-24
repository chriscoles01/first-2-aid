import React, { Component } from 'react';
import EmergencyItem from './EmergencyItem';
import PropTypes from 'prop-types';

class Emergencies extends Component {
  render() {
    return (
    this.props.loggedin.loggedin ?
     this.props.emergencies.map((emergency) => (
      emergency.place == null ? <div></div>: <div><br/> <EmergencyItem key={emergency.id_str} emergency={emergency} name={{name: this.props.name}} myLoc={{myLoc: this.props.myLoc}}/> <br/></div>
    ))
    : <div>Please log in as a first aider to see situations</div>
    
  )}
}

// PropTypes
Emergencies.propTypes = {
    emergencies: PropTypes.array.isRequired
}

export default Emergencies;