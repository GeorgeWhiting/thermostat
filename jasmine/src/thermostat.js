var Thermostat = function(){
  this.temperature = 20;

  this.up = function(ecomode = new Ecomode) {
    if (this.temperature >= 32) {
      throw new Error("Stop it! Mans CAN be too hot");
    }
    else if (ecomode.isOn && this.temperature >= 25) {
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
};
