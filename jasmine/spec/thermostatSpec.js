describe("thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat
  });

  it("should initialise with a temperature of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });
  describe("change temperature", function() {
    it("should be able to turn the temperature up", function() {
      thermostat.up(1);
      expect(thermostat.temperature).toEqual(21);
    });
    it("shouldn't allow the temperature to go below 10", function() {
      thermostat.temperature = 10;
      expect(function() {thermostat.down()}).toThrow(new Error("Stop it! I'm freezing!"))
    })
    it("should be able to turn the temperature down", function() {
      thermostat.down(1);
      expect(thermostat.temperature).toEqual(19);
    });
  });
});
