function Thermostat() {
  this.temperature = 20;
}

 var MINTEMP = 10;
 var MAXTEMP = 32;

  Thermostat.prototype.getCurrentTemp = function () {
    return this.temperature;
  };

  Thermostat.prototype.increase = function () {
    if (this.temperature > MAXTEMP) {
      throw new Error('Temperature cannot be above 25');
    } else {
      this.temperature += 1;
    }
  };

  Thermostat.prototype.decrease = function () {
    if (this.temperature < MINTEMP) {
      throw new Error ('Temperature cannot below 10');
    }
    else {
      this.temperature -= 1;
    }
  };

  Thermostat.prototype.powerSavingMode = function () {
    MAXTEMP = 25;
  };
