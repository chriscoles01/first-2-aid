import React from 'react';
import {geolocated} from 'react-geolocated';
import SimpleMap from './SimpleMap.js'
class Location extends React.Component {
    

    render() {
        
        const coords = {
            coords: this.props.coords
        }
        const location = {
            location: this.props.emergency_location
        }
        return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
            ? <div>Geolocation is not enabled</div>
            : this.props.coords 
            ? <SimpleMap location={coords} emergency_location = {location}/> 
            
            
            : <div>Getting the location data&hellip; </div>;
    }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
    watchPosition: true,
    timeout: Infinity,
  },
  userDecisionTimeout: 5000,
  geolocationProvider: navigator.geolocation
})(Location);