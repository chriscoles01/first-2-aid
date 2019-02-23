import React from 'react';
import {geolocated} from 'react-geolocated';
import SimpleMap from './SimpleMap.js'
class Location extends React.Component {
    
    askForLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
        } else {
            this.startSearch();
        }
    }
      
    showPosition(position) {
        this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude
        }, this.startSearch.bind(this, true));
    }
    render() {
        
        const coords = {
            coords: this.props.coords
        }
        this.askForLocation.bind(this);
        return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
            ? <div>Geolocation is not enabled</div>
            : this.props.coords 
            ? <SimpleMap location={coords}/> 
            
            
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