'user strict';

describe('Plane', function() {

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj("airport",['clearForLanding','clearForTakeOff']);
  });


  describe('#land & take off', function(){
    it('can land', function(){
      plane.land(airport)
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane)
    })
   });
  
  describe('#take off', function(){
    it('can take off', function(){
      plane.land(airport)
      plane.takeOff(airport)
      expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
    })
  })
})
