var Thermostat = function(){
  this.temperature = 20;
  this.up = function() {
    this.temperature += 1;
  };
  this.down = function() {
    this.temperature -= 1;
  };
};
