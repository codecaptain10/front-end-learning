//Example 3
/*Create first webserver
Good practice:
  1.You should declate all possible information, for example Content-Type
  Sometimes browser know what it should answer, sometimes no.

  2. In res.end() you can write HTML-Templates

  3. Good to show your process in DevTools -> Network

 */

//1. Import modul http
const http = require('http');

//2. Create server
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write("<h1 style='color: lightgreen; font-family: arial;'>Hello Node.js Webserver!<h1>");
    res.end(`
        <h1> Hello!I am a message from template! </h1>
        `);

}).listen(3000, '127.0.0.1'); //3. Server listening