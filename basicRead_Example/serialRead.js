var SerialPort = require("serialport").SerialPort

var serialPort = new SerialPort("/dev/tty-usbserial1", {
  baudrate: 57600
});

serialPort.open(function (error) {
  if ( error ) {
    console.log('failed to open: '+ error);
  }
  else {
    console.log('open');
    serialPort.on('data', function(data) {
      console.log('data received: ' + data);
    });
  }
});
