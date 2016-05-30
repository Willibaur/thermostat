describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('sets up default settings where', function() {
    it('initial temperature is equals to 20 degrees', function() {
      expect(thermostat.getTemp()).toEqual(20);
    });

    it('power saving mode is ON', function() {
      expect(thermostat.isPowerSaveOn()).toBe(true);
    });
  });

  describe('changes temperature', function() {
    it('up by 1 degree', function() {
      thermostat.increaseTemp();
      expect(thermostat.getTemp()).toEqual(21);
    });

    it('down by 1 degree', function() {
      thermostat.decreaseTemp();
      expect(thermostat.getTemp()).toEqual(19);
    });
  });

  describe('when power saving is', function() {
    it('on, sets maximum temperature to 25 degrees', function() {
      thermostat.temp = 25;
      var msg = 'Temperature cannot be above 25';
      expect(function() { thermostat.increaseTemp(); }).toThrowError(msg);
    });

    // it('off, sets maximum temperature to 32 degrees', function() {
    //   thermostat.powerSavingMode();
    //   thermostat.temp = 32;
    //   var msg = 'Temperature cannot be above 32';
    //   expect(function() { thermostat.increaseTemp(); }).toThrowError(msg);
    // });
  });

  // describe('temperature sensor', function() {
  //   it('cannot be below 10 degrees', function() {
  //     do {
  //       thermostat.decreaseTemp();
  //     } while (thermostat.getTemp() >= 10);
  //     expect(function() { thermostat.decreaseTemp(); }).toThrowError('Temperature cannot below 10');
  //   });
  //
  //   describe('can be reset to 20 degrees if', function() {
  //     it('current temperature is < 20 degrees', function() {
  //       do {
  //         thermostat.decreaseTemp();
  //       } while (thermostat.getTemp() >= 10);
  //       thermostat.resetTemp();
  //       expect(thermostat.getTemp()).toEqual(20);
  //     });
  //
  //     it('current temperature is > 20 degrees', function() {
  //       thermostat.powerSavingMode();
  //       do {
  //         thermostat.increaseTemp();
  //       } while (thermostat.getTemp() >= 32);
  //       thermostat.resetTemp();
  //       expect(thermostat.getTemp()).toEqual(20);
  //     });
  //   });
  //
  //   describe('displays color', function() {
  //     it('green when temperature < 18 degrees', function() {
  //       do {
  //         thermostat.decreaseTemp();
  //       } while (thermostat.getTemp() > 17);
  //       expect(thermostat.getColorDisplay()).toEqual('green');
  //     });
  //
  //     it('yellow when temperature between 18  and 25 degrees', function() {
  //       expect(thermostat.getColorDisplay()).toEqual('yellow');
  //     });
  //
  //     it('red when temperature > 25 degrees', function() {
  //       thermostat.powerSavingMode();
  //       do {
  //         thermostat.increaseTemp();
  //       } while (thermostat.getTemp() <= 25);
  //       expect(thermostat.getColorDisplay()).toEqual('red');
  //     });
  //   });
  // });
});
