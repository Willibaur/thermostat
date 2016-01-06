function Thermostat() {
  this.temperature = 20;
}

 var MINTEMP = 10;
 var MAXTEMP = 25;

  Thermostat.prototype.getCurrentTemp = function () {
    return this.temperature;
  };

  Thermostat.prototype.increase = function () {
    if (this.temperature > MAXTEMP) {
      throw new Error("Temperature cannot be above " + MAXTEMP);
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

  Thermostat.prototype.powerSavingModeOn = function () {
    MAXTEMP = 25;
  };

  Thermostat.prototype.powerSavingModeOff = function () {
    MAXTEMP = 32;
  };
