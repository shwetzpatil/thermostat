
function Thermostat() {
  this.temp = 20
  this.powerSavingModeOn = true
}

Thermostat.prototype = {
  up: function () {
    if (this.powerSavingModeOn === true && this.temp >= 25) {
      throw new Error('Power saving mode is On, Cannot increase above 25 degrees')
    } else if (this.temp >= 32){
      throw new Error('Power saving mode is Off, Cannot increase above 32 degrees')
    } else {
    this.temp += 1;
    }
  },

  down: function () {
    if(this.temp <= 10){
      throw new Error('Cannot decrease temp below 10 degrees');
    } else {
      this.temp -= 1;
    }  
  },

  reset: function () {
    this.temp = 20;
  },

  energyUsageStatus: function () {
    if(this.temp < 18) {
      return 'Low energy usage';
    } else if (this.temp > 18 && this.temp < 25) {
      return 'Medium energy usage';
    } else {
      return 'High energy usage';
    }
  }
}

// Thermostat.prototype.up = function () {
//   if (this.powerSavingModeOn === true && this.temp >= 25) {
//     throw new Error('Power saving mode is On, Cannot increase above 25 degrees')
//   } else if (this.temp >= 32){
//     throw new Error('Power saving mode is Off, Cannot increase above 32 degrees')
//   } else {
//   this.temp += 1;
//   }
// }

// Thermostat.prototype.down = function () {
//   if(this.temp <= 10){
//     throw new Error('Cannot decrease temp below 10 degrees');
//   } else {
//     this.temp -= 1;
//   }  
// }

// Thermostat.prototype.reset = function () {
//   this.temp = 20;
// }

// Thermostat.prototype.energyUsageStatus = function () {
//   if(this.temp < 18) {
//     return 'Low energy usage';
//   } else if (this.temp > 18 && this.temp < 25) {
//     return 'Medium energy usage';
//   } else {
//     return 'High energy usage';
//   }
// }