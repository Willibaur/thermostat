describe('Thermostat', function() {
  var thermostat;
});

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it('increases temperature by 1 degree', function() {
    thermostat.increase();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it('dreceases temperature by 1 degree', function() {
    thermostat.decrease();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it('prevents to go below 10 degrees', function() {
    do {
      thermostat.decrease();
    } while (thermostat.getCurrentTemp() >= 10);
    expect(function() { thermostat.decrease(); }).toThrowError('Temperature cannot below 10');
  });

  describe('when power saving is', function() {
    it('on, sets maximum temperature to 25', function() {
      thermostat.powerSavingMode();
      do {
        thermostat.increase();
      } while (thermostat.getCurrentTemp() <= 25);
      expect(function() { thermostat.increase(); }).toThrowError('Temperature cannot be above 25');
    });
  });
