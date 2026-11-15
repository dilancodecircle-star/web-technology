/*const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write('hello world');
        res.end();
    }
    if (req.url === '/api/name') {
        res.write(JSON.stringify["dinuli", "suvinya"]);
        res.end();
    }
});

server.on('connection', function (socket) {
    console.log('new connection..');
})

server.listen(3000);
console.log('listen on port 3000');*/

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("hello DD");
        res.end();

    }
});

server.on('connection', function () {
    console.log("new connection");

})

server.listen(3000);
console.log("listen port 3000 ...");
