askForLocation() {
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
}
  
showPosition(position) {
    this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude
    }, this.startSearch.bind(this, true));
}
 

{
    id: 1,
    name: 'Simon Brooks',
    description: 'Major laceration on left arm, heavy bleeding',
    distance: '450m',
    userLng: "50.937681",
    userLat: "-1.395844",
    destLng: '50.920505',
    destLat: '-1.404671',
    expanded: true
  },
  {
    id: 2,
    name: 'Chris Coles',
    description: 'Heart palpatations',
    distance: '666m',
    userLng: "50.937681",
    userLat: "-1.395844",
    destLng: '50.920505',
    destLat: '-1.404671',
    expanded: false
  },
  {
    id: 3,
    name: 'Vlad Secosan',
    description: 'Concussion',
    userLng: "50.937681",
    userLat: "-1.395844",
    distance: '72m',
    destLng: '50.920505',
    destLat: '-1.404671',
    expanded: false
  }