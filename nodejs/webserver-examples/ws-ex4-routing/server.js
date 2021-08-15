//Example 4
/* Routing
  - Serwer potrafi zwrocic inne zasoby w zaleznosci jaka sciezka w URL sie znajdzie
  - Ustawianie sciezek i metod http 
  - Routing to wykorzystanie sciezek i metod http do rozdzielenia zasobow

 */
const http = require('http');

http.createServer((req, res) => {
    res.end();

}).listen(3000, '127.0.0.1');