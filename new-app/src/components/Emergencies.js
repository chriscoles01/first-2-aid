import React, { Component } from 'react';
import EmergencyItem from './EmergencyItem';
import PropTypes from 'prop-types';

class Emergencies extends Component {
  render() {
    return this.props.emergencies.map((emergency) => (
      emergency.place == null ? <div></div>: <EmergencyItem key={emergency.id_str} emergency={emergency} myLoc={{myLoc: this.props.myLoc}}/>
    ));
  }
}

// PropTypes
Emergencies.propTypes = {
    emergencies: PropTypes.array.isRequired
}

export default Emergencies;