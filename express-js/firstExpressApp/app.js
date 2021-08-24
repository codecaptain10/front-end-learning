// Import Express package
const express = require('express');
const path = require('path');

//Create web server
const app = express();

//Create web server listening
app.listen(3000, '127.0.0.1', (req, res) => {
    console.log("It works! Hello Express.js :)");
});

/*----- 1 -----*/
//Answer to GET to '/' path
// app.get('/', (req, res) => {
//     console.log("Welcome Star Page!");
//     res.send("<h1>Hello World</h1>");
// });

// //Answer to GET to '/user' path
// app.get('/user', (req, res) => {
//     console.log("Welcome User Page!");
//     res.send("<h1>Hello User!</h1>");
// });

/*----- 2 -----*/
//Parameters from Requst object to console with req.query
// app.all('/', (req, res) => {
//     console.log(req.query);
//     console.log(`Hello ${req.query.name} + ${req.query.surname}`);
// });

/*----- 3 -----*/
//Routing
//GET - Information about user list
// app.get('/', (req) => {
//     console.log('User list');
// });

// //GET - Information about user nr.1
// app.get('/:id', (req) => {
//     console.log('Information abiut User nr.1');
// });

// //POST - Add new user
// app.post('/', (req) => {
//     console.log('Add new User');
// });

// //PATCH - Update selected elements of object
// app.patch('/1', (req) => {
//     console.log('Update selected elements of object');
// });

// //PUT - Replace/update old object with new object
// app.put('/1', (req) => {
//     console.log('Replace old object with new object');
// });

// //DELETE - Delete user
// app.delete('/1', (req) => {
//     console.log('Delete user with id 1');
// });

/*----- 4 -----*/
//Parameters in URL 
/*
Może wystąpić błąd w trakcie gdy mamy ścieżki z parametarami jak :name. 
Należy je definiować możliwie jak najniżej kodu, aby nie mieszały innych ścieżek
*/
// app.get('/hello/new-user', (req) => {
//     console.log('Add new user ...');
// });

// app.get('/hello/:name', (req) => {
//     console.log('Welcome someone ...' + req.params.name);
// });

/*----- 5 -----*/
//Object Response
//res.send()
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
//     console.log("Hello, World!");
// });

// //res.send() array
// app.get('/array', (req, res) => {
//     const names = 'Szymon Piotr Rafał';
//     const array = names.split(' ');
//     res.send(array);
//     console.log("Send array with names");
// });

// //res.json()
// app.get('/send-json', (req, res) => {
//     const name = "Szymon";
//     res.json(name);
//     console.log("Send JSON");
// });

// //res.location()
// app.get('/relocation', (req, res) => {
//     res.location('https://google.com');
//     res.sendStatus(302);
//     console.log("Relocation to Google.com - res.location()");
// });

// //res.redirect()
// app.get('/redirection', (req, res) => {
//     res.redirect('https://google.com');
//     console.log("Relocation to Google.com  - res.redirect()");
// });

/*----- 6 -----*/
//Send files in Express.js

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
    <body>
    <img src="/logo">
    </body>
    </html>
    `);
});

app.get('/logo', (req, res) => {
    const fileName = path.join(__dirname, 'static/mountains.jpg');
    res.sendFile(fileName);
});

/*----- 7 -----*/
//Headers and cookies
//Cookie, that remembers the name of user
//Checkout in dev tools -> application -> cookies
app.get('/hi/:name', (req, res) => {
    const {
        name
    } = req.params;

    res.cookie('visitor_name', name);
    res.send('Name saved!');
});