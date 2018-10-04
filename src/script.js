$( document ).ready(function() {
  
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temp);

  $('#temperature-up').click(function() {
    thermostat.up();
    // alert( "increase temp" );
    $('#temperature').text(thermostat.temp);
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    $('#temperature').text(thermostat.temp);
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    $('#temperature').text(thermostat.temp);
  });

  $('#power-saving-on').click(function() {
    // thermostat.powerSavingModeOn();
    $('#power-saving-mode').text('on')
    // updateTemperature();
  })

  $('#power-saving-off').click(function() {
    // thermostat.powerSavingModeOff();
    $('#power-saving-mode').text('off')
    // updateTemperature();
  })

  $('#energy-usage').click(function() {
    thermostat.energyUsageStatus()
    $('#energy-status').text(thermostat.energyUsageStatus());
  });
});