import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../graphics-assets/Logo_32.png';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    
    zoom: 18
  };
 
  render() {
    const center = {
        lat: this.props.location.coords.latitude,
        lng: this.props.location.coords.longitude
    }
    return (
    
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '100%', marginBottom: '5vh', marginTop: '5vh'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDDh061bzOObTWtZjdF0Q1PROynuIiSMX4'}}
          defaultCenter={center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.location.coords.latitude}
            lng={this.props.location.coords.longitude}
            text={<img src={marker} alt="marker" />}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;