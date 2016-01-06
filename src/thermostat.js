function Thermostat() {
  this.setTemperature();
}

 var MINTEMP = 10;
 var MAXTEMP = 25;
 var temperature;

  Thermostat.prototype.setTemperature = function () {
   temperature = 20;
  };

  Thermostat.prototype.getCurrentTemp = function () {
    return temperature;
  };

  Thermostat.prototype.increase = function () {
    if (temperature > MAXTEMP) {
      throw new Error("Temperature cannot be above " + MAXTEMP);
    } else {
      temperature += 1;
    }
  };

  Thermostat.prototype.decrease = function () {
    if (temperature < MINTEMP) {
      throw new Error ('Temperature cannot below 10');
    }
    else {
      temperature -= 1;
    }
  };

  Thermostat.prototype.powerSavingModeOn = function () {
    MAXTEMP = 25;
  };

  Thermostat.prototype.powerSavingModeOff = function () {
    MAXTEMP = 32;
  };

  Thermostat.prototype.resetTemp = function () {
    if (this.getCurrentTemp() > 20 ) {
      do {
        this.decrease();
      } while (this.getCurrentTemp() > 20);
    } else {
      do {
        this.increase();
      } while (this.getCurrentTemp() < 20);
    }
  };
