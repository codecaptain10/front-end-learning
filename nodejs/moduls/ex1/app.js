/*Example 1:

This is a test file to work with modules

Node.js docs: https://nodejs.org/en/docs/
              docs -> modules 

*/

//module notes.js
const notes = require('./notes.js');

console.log(notes); // Object from module notes.js
console.log("Modul app.js");
console.log(notes.txt);

//Module module
const mod = require('module');
//Show how looks wrapper node function
console.log("Wrapper: " + mod.wrapper);