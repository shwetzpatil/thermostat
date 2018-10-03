'use strict';

describe('Thermostat', function(){
  
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
  });
  
  describe('up', function(){
    it('should increase temp by 1 degree', function() {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    })

    it ('should not increase temp above 25 degrees if power saving mode is On', function(){
      thermostat.temp = 25
      expect(function(){thermostat.up();}).toThrowError('Power saving mode is On, Cannot increase above 25 degrees')
    })

    it ('should not increase temp above 32 degrees if power saving mode is Off', function(){
      thermostat.temp = 32
      thermostat.powerSavingModeOn = false
      expect(function(){thermostat.up();}).toThrowError('Power saving mode is Off, Cannot increase above 32 degrees')
    })
  });

  describe('down', function(){
    it('should decrease temp by 1 degree', function() {
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    })
    it('should not decrease the temperature below 10 degrees', function(){
      thermostat.temp = 10;
      expect(function(){thermostat.down();}).toThrowError('Cannot decrease temp below 10 degrees');
    });
  });

  describe('power saving mode', function() {
    it('should on by default', function() {
      expect(thermostat.powerSavingModeOn).toEqual(true)
    });
  });

  describe('reset thermostat', function() {
    it('should reset to default temp', function() {
      thermostat.temp = 24
      thermostat.reset();
      expect(thermostat.temp).toEqual(20)
    });
  });

  describe('thermostat energy usage', function() {
    describe ('when the temperature is below 18 degrees',function() {
      it ('should indicate low usage', function() {
        thermostat.temp = 17
        expect(thermostat.energyUsageStatus()).toEqual('Low energy usage')
      })
    });

    describe ('when the temperature is above 18 and below 25 degrees',function() {
      it ('should indicate medium usage', function() {
        thermostat.temp = 23
        expect(thermostat.energyUsageStatus()).toEqual('Medium energy usage')
      })
    });

    describe ('when the temperature is anything else',function() {
      it ('should indicate high usage', function() {
        thermostat.temp = 45
        expect(thermostat.energyUsageStatus()).toEqual('High energy usage')
      })
    });
  });
});