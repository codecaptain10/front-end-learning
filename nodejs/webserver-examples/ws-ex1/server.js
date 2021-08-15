//Example 1
//Webserver in Node.js 
/*
  1. Create a new order and server.js file
  2. Set the path in CLI to this file
  3. We need Moduls, we use http module
  4. Create variable http and use method require 
  5. Create server
    - Callback function
    - Parameters: request, response
  6. Set server listening
  7. Start server in CLI:  node server.js 
  8. Open new browser window with adress "127.0.0.1:5500"
  9. We can use request information. For example from how URL we become information: request.url
 */

//CommonJS  - old syntax
const http = require('http');

//ES6 Syntax   - new syntax
//import http from 'http';

//Create server
const server = http.createServer((request, response) => {
    //From which adress become we informaiton
    console.log(`URL: ${request.url}`);
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end('<h1> Hello Node.js! </h1>')
});

//Server listen 
server.listen(5500, '127.0.0.1', () => console.log("Server started!"));