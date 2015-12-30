var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/tty-usbserial1", {
  baudrate: 9600
});

serialPort.on("open", function(){
   var rand = Math.random()*100;
   setInterval(function(){
   serialPort.write(rand, function(err,results){
      console.log("error: "+ err);
      console.log("result: "+ result);
   });
},1000);
});
