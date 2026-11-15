
console.log(__filename);
console.log(__dirname);
var url = "http://my_logger.io/log";


const EventEmitter = require('events');
const emitter = new EventEmitter();
class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('login');
    }
}



function print(message) {
    console.log(message + ' say this by dilan');
}

module.exports.log = Logger;

