const os = require('os');

// Info about current user
const user = os.userInfo();

// console.log(user);
// console.log(`${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
