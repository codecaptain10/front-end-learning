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
//http modul
const http = require('http');
//fs modul - to read/load files
const fs = require('fs');
//path module - to path to our files/templates
const path = require('path');
const port = process.env.port || 3000;

//Example file to show JSON in point 3
const users = [{
    name: "Adam",
    id: "1"
}, {
    name: "Ewa",
    id: "2"
}];

http.createServer((req, res) => {
    //1) Switch 
    switch (req.url) {
        case '/':
            //2) Pobieranie template strony
            fs.readFile(path.join(__dirname, "index.html"), (err, page) => {
                if (err) {
                    console.log(err);
                    res.end("<h1>Problem with loading ...</h1>");
                } else {
                    res.end(page);
                }
            });
            // res.end("<h1>Main page of our Website</h1>");
            break;
        case '/users':
            //2) Pobieranie template strony
            fs.readFile(path.join(__dirname, "users.html"), (err, page) => {
                if (err) {
                    console.log(err);
                    res.end("<h1>Problem with loading ...</h1>");
                } else {
                    res.end(page);
                }
            });
            //res.end("<h1>Users of our Website</h1>");
            break;
        case '/api/users':
            //3) Udostępnianie plików JSON
            const usersJSON = JSON.stringify(users) //JS Object -> JSON
            res.end(usersJSON);
            // res.end("<h1>Users API</h1>");
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