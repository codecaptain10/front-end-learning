//Example 5
/* 
Switch, pobranie zawartości plików dla konkretnych ścieżek i JSON

    - Pobieranie plików i ich wyświetlanie (serwis internetowy)
    - Pobieranie i wyświetlanie docelowo w Express.js
    - Plan:
        1) Instrukcja switch
        2) Pobieranie i udostępnianie plików
        3) Udostępnianie plików JSON
        4) Pliki JavaScript
*/

const http = require('http');
const port = process.env.port || 3000;

http.createServer((req, res) => {
    //1) Switch 
    switch (req.url) {
        case '/':
            res.end("<h1>Main page of our Website</h1>");
            break;
        case '/users':
            res.end("<h1>Users of our Website</h1>");
            break;
        case '/api/users':
            res.end("<h1>Users API</h1>");
            break;
        default:
            res.end("<h1>Website doesn't exist!</h1>");

    }
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

}).listen(port, '127.0.0.1', () => {
    console.log(`Now Listening on ${port} ... `);
});