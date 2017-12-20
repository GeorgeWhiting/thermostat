var Thermostat = function(){
  this.temperature = 20;

  this.up = function() {
    this.temperature += 1;
  };

  this.down = function() {
    if (this.temperature <= 10) {
      throw new Error("Stop it! I'm freezing!")
    }
    this.temperature -= 1;
  };
};
