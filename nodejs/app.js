//path module
/*
const path = require('path');
pathObject = path.parse(__filename);

//os module
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem

console.log('totla memeory is ' + totalMemory);
console.log(`free memory available is ${freeMemory}`);

//file system module

const fs = require('fs');
const files = fs.readdirSync("./")//synchronous
//onsole.log(files);
/*
fs.readdir('fs', function (err, files) {
    if (err) {
        console.log("error", err);
    } else {
        console.log('result', files);
    }
})*/
/*
fs.readdir("./", function (error, files) {
    if (error) {
        console.log(`error is : ${error}`);
    } else {
        console.log(`files are :${files}`)
    }
})
*/

//event module
/*
const EventEmitter = require('events'); // event emmiter is class
const emitter = new EventEmitter();

emitter.on('messageLogged', function (e) { // we can use e or arg
    console.log('listerner called', e);
});

emitter.emit('messageLogged', { id: 1, url: 'http://' });

*/



const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on("login", function (e) {
    console.log('login sucessful', e);
});
const currentDate = new Date();
emitter.emit('login', currentDate);