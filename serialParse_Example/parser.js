var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor

var sp = new SerialPort("/dev/tty-usbserial1", {
  parser: serialport.parsers.readline("\n")
});

sp.on("data",function(data){
   console.log(data);
});
