//Example 4
/* Routing
  - Serwer potrafi zwrocic inne zasoby w zaleznosci jaka sciezka w URL sie znajdzie
  - Ustawianie sciezek i metod http 
  - Routing to wykorzystanie sciezek i metod http do rozdzielenia zasobow
  - Póki co jakiej ścieżki nie będziemy pisać w URL to dostaniemy tą samą odpowiedź co w res.end();
  - WAŻNE: Ważne aby ustawić jaki mamy port

  Jak działa Routing ?
    - Praca na obiekcie request
    - URL: req.url, Method: req.method

 */
const http = require('http');
//PORT
const port = process.env.PORT || 3000;


http.createServer((req, res) => {
    //How method and how url 
    //console.log(req.url);
    //console.log(req.method);

    //Czy nasz URL jest równy req.url
    if (req.url === "/") {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(`<h1 style="color: green">MAIN PAGE! Your URL: ${req.url}</h1>`);
    } else if (req.url === "/users") {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(`<h1 style="color: blue">USERS PAGE! Your URL: ${req.url}</h1>`)
    } else {
        //200 or 404
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(`<h1 style="color: red"> NO PAGE! Your URL: ${req.url}</h1>`);
    }


    //res.end(`Hello server! Your url: ${req.url}`);

}).listen(3000, '127.0.0.1', () => {
    console.log(`PORT our servers is ... : ${port}`);
});