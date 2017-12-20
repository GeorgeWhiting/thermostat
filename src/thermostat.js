var Thermostat = function(){
  this.temperature = 20;

  this.up = function(ecomode = this.ecomode) {
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
};
