
var url = "http://my_logger.io/log";

function log(message) {
    console.log(message);


}


function print(message) {
    console.log(message + 'say this by dilan');
}

module.exports = {
    log: log,
    print: print

}

