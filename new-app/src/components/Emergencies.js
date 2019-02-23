import React, { Component } from 'react';
import EmergencyItem2 from './EmergencyItem';
import PropTypes from 'prop-types';

class Emergencies extends Component {
    render() {
        return this.props.emergencies.map((emergency) => (
            <EmergencyItem2 key={emergency.id} emergency={emergency}/>

        ));
    }
}

// PropTypes
Emergencies.propTypes = {
    emergencies: PropTypes.array.isRequired
}

export default Emergencies;