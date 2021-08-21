// Import Express pckage
const express = require('express');

//Create web server
const app = express();

//Create web server listening
app.listen(3000, '127.0.0.1', (req, res) => {
    console.log("It works! Hello Express.js :)");
});

//Answer to GET to '/' path
app.get('/', (req, res) => {
    console.log("Welcome Star Page!");
    res.send("<h1>Hello World</h1>");
});

//Answer to GET to '/user' path
app.get('/user', (req, res) => {
    console.log("Welcome User Page!");
    res.send("<h1>Hello User!</h1>");
});