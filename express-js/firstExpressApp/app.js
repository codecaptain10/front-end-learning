// Import Express pckage
const express = require('express');

//Create web server
const app = express();

//Create web server listening
app.listen(3000, '127.0.0.1', (req, res) => {
    console.log("Hello Express.js");
});

//Answer to GET to '/' path
app.get('/', () => {
    console.log("Welcome!");
});

//Answer to GET to '/user' path
app.get('/user', () => {
    console.log("Welcome User!");
});