describe('thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat
  });

  it('should initialise with a temperature of 20', function() {
    expect(thermostat._temperature).toEqual(20);
  });
});
