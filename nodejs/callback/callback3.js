//-----Example 3-----
//import modul fs 
const fs = require('fs');
fs.readFile('./text.txt', 'utf8', (error, file) => { console.log(file) })