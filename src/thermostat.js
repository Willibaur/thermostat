function Thermostat() {
  this.MINTEMP = 10;
  this.maxTemp = 25;
  this.temperature = 20;
  this.powerSavingStatus = 'true';
  this.colorDisplay = 'yellow';
}


  Thermostat.prototype.getCurrentTemp = function () {
    return this.temperature;
  };

  Thermostat.prototype.increase = function () {
    if (this.temperature > this.maxTemp) {
      throw new Error("Temperature cannot be above " + this.maxTemp);
    } else {
      this.temperature += 1;
    }
  };

  Thermostat.prototype.decrease = function () {
    if (this.temperature < this.MINTEMP) {
      throw new Error ('Temperature cannot below 10');
    }
    else {
      this.temperature -= 1;
    }
  };

  Thermostat.prototype.powerSavingMode = function() {
    if (this.powerSavingStatus) {
      this.maxTemp = 32;
    } else {
      this.maxTemp = 25;
    }
    this.powerSavingStatus = !this.powerSavingStatus;
  };


  Thermostat.prototype.resetTemp = function () {
    this.temperature = 20;
  };

  Thermostat.prototype.setColorDisplay = function () {
    if (this.getCurrentTemp() < 18 ) {
      this.colorDisplay = 'green';
    } else if (this.getCurrentTemp() >= 18 && this.getCurrentTemp() <= 25) {
      this.colorDisplay = 'yellow';
    } else {
      this.colorDisplay = 'red';
    }
  };

  Thermostat.prototype.getColorDisplay = function () {
    this.setColorDisplay();
    return this.colorDisplay;
  };
