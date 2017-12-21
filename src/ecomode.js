'use strict';
var Ecomode = function(){
  this.isOn = true;

  this.turnOff = function() {
    this.isOn = false;
  };

  this.turnOn = function() {
    this.isOn = true;
  };
};
