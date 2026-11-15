const path = require('path');
pathObject = path.parse(__filename);


const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem

console.log('totla memeory is ' + totalMemory);
console.log(`free memory available is ${freeMemory}`);