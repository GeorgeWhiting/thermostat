'use strict';
var Thermostat = function(){
  this.temperature = 20;
  this.ecomodeIsOn = true;

  this.up = function() {
    if (this.temperature >= 32) {
      throw new Error("Stop it! Mans CAN be too hot");
    }
    else if (this.ecomodeIsOn && this.temperature >= 25) {
      throw new Error("Don't waste dat energy, fool");
    };
    this.temperature += 1;
  };

  this.down = function() {
    if (this.temperature <= 10) {
      throw new Error("Stop it! I'm freezing!")
    }
    this.temperature -= 1;
  };

  this.reset = function() {
    this.temperature = 20;
  };

  this.usageEnquire = function() {
    switch(true) {
      case (this.temperature < 18):
        return "low-usage";
        break;
      case (this.temperature < 25 && this.temperature > 18):
        return "medium-usage";
        break;
      case (this.temperature >= 25):
        return "high-usage";
        break;
    };
  };



  this.ecomodeTurnOff = function() {
    this.ecomodeIsOn = false;
  };

  this.ecomodeTurnOn = function() {
    this.ecomodeIsOn = true;
  };

};

Thermostat.prototype.getTemp = function() {
  return this.temperature;
};
