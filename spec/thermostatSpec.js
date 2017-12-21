'use strict';
describe("thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("should initialise with a temperature of 20", function() {
    expect(thermostat.getTemp()).toEqual(20);
  });
  describe("change temperature", function() {
    it("should be able to turn the temperature up", function() {
      thermostat.up();
      expect(thermostat.getTemp()).toEqual(21);
    });
    it("shouldn't allow the temperature to go below 10", function() {
      thermostat.temperature = 10;
      expect(function() {
        thermostat.down()
      }).toThrow(new Error("Stop it! I'm freezing!"));
    });
    it("should be able to turn the temperature down", function() {
      thermostat.down();
      expect(thermostat.getTemp()).toEqual(19);
    });
    it("should not go higher than 25 if ecomode is on", function() {
      thermostat.temperature = 25;
      expect(function() {
        thermostat.up()
      }).toThrow(new Error("Don't waste dat energy, fool"));
    });
    it("should never go higher than 32", function() {
      thermostat.temperature = 32;
      expect(function() {
        thermostat.up()
      }).toThrow(new Error("Stop it! Mans CAN be too hot"));
    });
    // it("should set the temperature to 25 when ecomode is turned on above that temperature", function() {
    //   thermostat.temperature = 30;
    //   thermostat.ecomode.ecomodeTurnOn;
    //   expect(thermostat.getTemp()).toEqual(25);
    // })
    it("should have a reset button that sets the temperature to 20", function() {
      thermostat.temperature = 13;
      thermostat.reset();
      expect(thermostat.getTemp()).toEqual(20);
    });
  });
  describe("usage enquire", function() {
    it("should return low-usage when temperature is below 18", function() {
      thermostat.temperature = 16;
      expect(thermostat.usageEnquire()).toEqual("low-usage");
    });
    it("should return medium-usage when temperature is between 18 and 24", function() {
      thermostat.temperature = 21;
      expect(thermostat.usageEnquire()).toEqual("medium-usage");
    });
    it("should return high-usage when temperature is 25 or above", function() {
      thermostat.temperature = 27;
      expect(thermostat.usageEnquire()).toEqual("high-usage");
    });
  });

  describe("Turn ecomode on and off", function() {
    it("can be turned off", function() {
      thermostat.ecomodeIsOn = true;
      thermostat.ecomodeTurnOff();
      expect(thermostat.ecomodeIsOn).toEqual(false);
    });
    it("can be turned on", function() {
      thermostat.ecomodeIsOn = false;
      thermostat.ecomodeTurnOn();
      expect(thermostat.ecomodeIsOn).toEqual(true);
    });
  });
  it("should default to on", function() {
    expect(thermostat.ecomodeIsOn).toEqual(true);
  });
});
