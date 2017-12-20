describe("thermostat", function() {

  var thermostat;
  var ecomode;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("should initialise with a temperature of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });
  describe("change temperature", function() {
    it("should be able to turn the temperature up", function() {
      thermostat.up(1);
      expect(thermostat.temperature).toEqual(21);
    });
    it("shouldn't allow the temperature to go below 10", function() {
      thermostat.temperature = 10;
      expect(function() {thermostat.down()}).toThrow(new Error("Stop it! I'm freezing!"));
    });
    it("should be able to turn the temperature down", function() {
      thermostat.down(1);
      expect(thermostat.temperature).toEqual(19);
    });
    it("should not go higher than 25 if ecomode is on", function() {
      ecomode = jasmine.createSpyObj('ecomodeOn', {'isOn': true});
      thermostat.temperature = 25;
      expect(function() {thermostat.up(ecomode)}).toThrow(new Error("Don't waste dat energy, fool"));
    });
    it("should never go higher than 32", function() {
      ecomode = jasmine.createSpyObj('ecomodeOff', {'isOn': false});
      thermostat.temperature = 32;
      expect(function() {thermostat.up(ecomode)}).toThrow(new Error("Stop it! Mans CAN be too hot"));
    });
    // it("should set the temperature to 25 when ecomode is turned on above that temperature", function() {
    //   thermostat.temperature = 30;
    //   thermostat.ecomode.turnOn;
    //   expect(thermostat.temperature).toEqual(25);
    // })
    it("should have a reset button that sets the temperature to 20", function() {
      thermostat.temperature = 13;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });
});
