function Thermostat() {
  this.temperature = 20;
}

 var MINTEMP = 10;

Thermostat.prototype.getCurrentTemp = function () {
  return this.temperature;
};

Thermostat.prototype.increase = function () {
  this.temperature += 1;
};

Thermostat.prototype.decrease = function () {
  if (this.temperature < MINTEMP) {
    throw new Error ('Temperature cannot below 10');
  }
  else {
    this.temperature -= 1;
  }
};
