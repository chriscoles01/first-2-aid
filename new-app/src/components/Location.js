import React from 'react';
import {geolocated} from 'react-geolocated';
import SimpleMap from './SimpleMap.js'
class Location extends React.Component {
    
    getLocation = () => {
        const geolocation = navigator.geolocation;
        
        const location = new Promise((resolve, reject) => {
            if (!geolocation) {
            reject(new Error('Not Supported'));
            }
            
            geolocation.getCurrentPosition((position) => {
            resolve(position);
            }, () => {
            reject (new Error('Permission denied'));
            });
        });
        return location
    }
    render() {
        
        const coords = {
            coords: this.props.coords
        }
        this.getLocation();
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