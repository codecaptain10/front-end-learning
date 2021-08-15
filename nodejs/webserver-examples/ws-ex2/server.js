//Example 2
/*This is a file to instruct the basic about creating web server in Node.js */


const http = require('http');
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end('<h1> Hello Node.js! I am your web server!</h1>')
}).listen(3000, '127.0.0.1');