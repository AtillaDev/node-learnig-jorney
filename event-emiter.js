const EventEmitter = require('events');

const customEmmiter = new EventEmitter();

customEmmiter.on('response', (name, age) => {
  console.log(`data recieved, ${name} ${age}`);
});

customEmmiter.emit('response', 'Atila', 19);
