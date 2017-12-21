'use strict';
var Thermostat = function(){
  this.DEFAULT_TEMPERATURE = 20;
  this.ECOMODE_MAX = 25;
  this.NO_ECOMODE_MAX = 32;
  this.MEDIUM_USAGE_LIMIT = 18;
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = this.DEFAULT_TEMPERATURE;
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
  if (this.temperature >= this.NO_ECOMODE_MAX) {
    throw new Error("Stop it! Mans CAN be too hot");
  }
  else if (this.ecomodeIsOn && this.temperature >= this.ECOMODE_MAX) {
    throw new Error("Don't waste dat energy, fool");
  };
  this.temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.temperature <= this.MINIMUM_TEMPERATURE) {
    throw new Error("Stop it! I'm freezing!")
  }
  this.temperature --;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.usageEnquire = function() {
  switch(true) {
    case (this.temperature < this.MEDIUM_USAGE_LIMIT):
      return "low-usage";
      break;
    case (this.temperature < this.ECOMODE_MAX && this.temperature > this.MEDIUM_USAGE_LIMIT):
      return "medium-usage";
      break;
    case (this.temperature >= this.ECOMODE_MAX):
      return "high-usage";
      break;
  };
};
