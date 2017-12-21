'use strict';
var Thermostat = function(){
  this.temperature = 20;
  this.ecomodeIsOn = true;
};

Thermostat.prototype.getTemp = function() {
  return this.temperature;
};

Thermostat.prototype.isEcomodeOn = function() {
  return this.ecomodeIsOn === true;
};

Thermostat.prototype.ecomodeTurnOff = function() {
  this.ecomodeIsOn = false;
};

Thermostat.prototype.ecomodeTurnOn = function() {
  this.ecomodeIsOn = true;
};

Thermostat.prototype.up = function() {
  if (this.temperature >= 32) {
    throw new Error("Stop it! Mans CAN be too hot");
  }
  else if (this.ecomodeIsOn && this.temperature >= 25) {
    throw new Error("Don't waste dat energy, fool");
  };
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature <= 10) {
    throw new Error("Stop it! I'm freezing!")
  }
  this.temperature -= 1;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.usageEnquire = function() {
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
