describe("Ecomode", function() {

  var ecomode;

  beforeEach(function() {
    ecomode = new Ecomode;
  });

  describe("Turn on and off", function() {
    it("can be turned off", function() {
      ecomode.isOn = true;
      ecomode.turnOff();
      expect(ecomode.isOn).toEqual(false);
    });
    it("can be turned on", function() {
      ecomode.isOn = false;
      ecomode.turnOn();
      expect(ecomode.isOn).toEqual(true);
    });
  });
  it("should default to on", function() {
    expect(ecomode.isOn).toEqual(true);
  });
});
