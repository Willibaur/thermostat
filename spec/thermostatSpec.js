describe('Thermostat', function() {
  var thermostat;
});

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('sets up default settings', function() {
    it('initial temperature to 20', function() {
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    it('power saving mode is on', function() {
      do {
        thermostat.increase();
      } while (thermostat.getCurrentTemp() <= 25);
      expect(function() { thermostat.increase(); }).toThrowError('Temperature cannot be above 25');
    });
  });

  describe('changes temperature by', function() {
    it('+1 degree', function() {
      thermostat.increase();
      expect(thermostat.getCurrentTemp()).toEqual(21);
    });

    it('-1 degree', function() {
      thermostat.decrease();
      expect(thermostat.getCurrentTemp()).toEqual(19);
    });
  });

  describe('when power saving is', function() {
    it('on, sets maximum temperature to 25', function() {
      thermostat.powerSavingModeOn();
      do {
        thermostat.increase();
      } while (thermostat.getCurrentTemp() <= 25);
      expect(function() { thermostat.increase(); }).toThrowError('Temperature cannot be above 25');
    });

    it('off, sets maximum temperature to 32', function() {
      thermostat.powerSavingModeOff();
      do {
        thermostat.increase();
      } while (thermostat.getCurrentTemp() <= 32);
      expect(function() { thermostat.increase(); }).toThrowError('Temperature cannot be above 32');
    });
  });

  it('prevents to go below 10 degrees', function() {
    do {
      thermostat.decrease();
    } while (thermostat.getCurrentTemp() >= 10);
    expect(function() { thermostat.decrease(); }).toThrowError('Temperature cannot below 10');
  });

  it('resets temperature to 20', function() {
    do {
      thermostat.decrease();
    } while (thermostat.getCurrentTemp() >= 10);
    thermostat.resetTemp();
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });
