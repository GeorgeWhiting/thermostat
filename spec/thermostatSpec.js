'use strict';
describe("thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("should initialise with a temperature equal to the default", function() {
    expect(thermostat.getTemp()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });
  describe("change temperature", function() {
    it("should be able to turn the temperature up", function() {
      thermostat.up();
      expect(thermostat.getTemp()).toEqual(thermostat.DEFAULT_TEMPERATURE+1);
    });
    it("shouldn't allow the temperature to go below default minimum", function() {
      thermostat.temperature = thermostat.MINIMUM_TEMPERATURE;
      expect(function() {
        thermostat.down()
      }).toThrow(new Error("Stop it! I'm freezing!"));
    });
    it("should be able to turn the temperature down", function() {
      thermostat.down();
      expect(thermostat.getTemp()).toEqual(thermostat.DEFAULT_TEMPERATURE-1);
    });
    it("should not go higher than the ecomode maximum if ecomode is on", function() {
      thermostat.temperature = thermostat.ECOMODE_MAX;
      expect(function() {
        thermostat.up()
      }).toThrow(new Error("Don't waste dat energy, fool"));
    });
    it("should never go higher than the maximum", function() {
      thermostat.temperature = thermostat.NO_ECOMODE_MAX;
      expect(function() {
        thermostat.up()
      }).toThrow(new Error("Stop it! Mans CAN be too hot"));
    });
    it("should set the temperature to ecomode max when ecomode is turned on above that temperature", function() {
      thermostat.temperature = 30;
      //console.log(thermostat.getTemp());
      thermostat.ecomodeTurnOn();
      expect(thermostat.getTemp()).toEqual(thermostat.ECOMODE_MAX);
    })
    it("should have a reset button that sets the temperature to the default", function() {
      thermostat.temperature = 13;
      thermostat.reset();
      expect(thermostat.getTemp()).toEqual(thermostat.DEFAULT_TEMPERATURE);
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
      expect(thermostat.isEcomodeOn()).toEqual(false);
    });
    it("can be turned on", function() {
      thermostat.ecomodeIsOn = false;
      thermostat.ecomodeTurnOn();
      expect(thermostat.isEcomodeOn()).toEqual(true);
    });
  });
  it("should default to on", function() {
    expect(thermostat.isEcomodeOn()).toBe(true);
  });
});
