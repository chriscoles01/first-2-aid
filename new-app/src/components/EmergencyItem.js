import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class EmergencyItem extends Component {
    render() {
        return (
            <div style={itemStyle}> 
                <h3>{ this.props.emergency.name }</h3>
                <p>{ this.props.emergency.distance }</p>
            </div>
        );
    }
}

// PropTypes
EmergencyItem.propTypes = {
    EmergencyItem: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: '#cccccc'
}

export default EmergencyItem
