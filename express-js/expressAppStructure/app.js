/*
Example Express.js Application Structure

    |- app.js
    |- package.json
    |- public
    |  |- index.html
    |  |- images
    |  |- javascripts
    |  |- stylesheets
    |     |- style.css
    |
    |- routes
       |- index.js
       |- users.js
 */

const express = require('express');
const path = require('path');
//const cookieParser = require('cookie-parser');
const usersRoutes = require('./routes/users');

const app = express();

app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000');
});

app.use(express.json());
//app.use(cookieParser());

usersRoutes(app);