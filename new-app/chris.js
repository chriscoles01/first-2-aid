askForLocation() {
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
}
  
showPosition(position) {
    this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude
    }, this.startSearch.bind(this, true));
}
 