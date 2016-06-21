function Plane(){

}

Plane.prototype = {
  land: function(airport) {
    airport.clearForLanding(this);
  },

  takeOff: function(airport) {
    airport.clearForTakeOff();
  }

}
