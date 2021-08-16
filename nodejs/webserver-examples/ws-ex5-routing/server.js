//Example 5
/* 
Switch, pobranie zawartości plików dla konkretnych ścieżek i JSON
*/

const http = require('http');
const port = process.env.port || 3000;

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
}).listen(port, '127.0.0.1', () => {
    console.log(`Listening on ${port} ... `);
});