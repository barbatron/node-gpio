const { Gpio } = require('onoff');
const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'both');

button.watch((err, value) => {
  console.log('button press', value); 
  led.writeSync(value);
});


process.on('SIGINT', _ => {
  led.unexport();
  button.unexport();
});

console.log('Waiting');

