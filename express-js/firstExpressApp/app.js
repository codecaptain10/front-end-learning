// Import Express pckage
const express = require('express');

//Create web server
const app = express();

//Create web server listening
app.listen(3000, '127.0.0.1', (req, res) => {
    console.log("It works! Hello Express.js :)");
});

/*1*/
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

/*2*/
//Parameters from Requst object to console with req.query
// app.all('/', (req, res) => {
//     console.log(req.query);
//     console.log(`Hello ${req.query.name} + ${req.query.surname}`);
// });

/*3*/
//Routing
//GET - Information about user list
app.get('/', (req) => {
    console.log('User list');
});

//GET - Information about user nr.1
app.get('/:id', (req) => {
    console.log('Information abiut User nr.1');
});

//POST - Add new user
app.post('/', (req) => {
    console.log('Add new User');
});

//PATCH - Update selected elements of object
app.patch('/1', (req) => {
    console.log('Update selected elements of object');
});

//PUT - Replace/update old object with new object
app.put('/1', (req) => {
    console.log('Replace old object with new object');
});

//DELETE - Delete user
app.delete('/1', (req) => {
    console.log('Delete user with id 1');
});

/*4*/
//Parameters in URL 
/*
Może wystąpić błąd w trakcie gdy mamy ścieżki z parametarami jak :name. 
Należy je definiować możliwie jak najniżej kodu, aby nie mieszały innych ścieżek
*/
app.get('/hello/new-user', (req) => {
    console.log('Add new user ...');
});

app.get('/hello/:name', (req) => {
    console.log('Welcome someone ...' + req.params.name);
});