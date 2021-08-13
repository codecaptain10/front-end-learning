/*Moduls: path and os*/

/*Modul path*/
// This modul helps us to create paths
// Import modul
const path = require('path');

/*Method: join()*/
const pathToFile = path.join(__dirname, 'index.js');
console.log(pathToFile);

const anotherPath = path.join('users/pl', 'active', 'users.json');
console.log(anotherPath);

/*Method: parse()*/
const parse = path.parse(__filename);
console.log(parse);


/*Modul os */
//Information about operating system
//Import module os 
const os = require('os');

/*Method uptime() */
const uptime = os.uptime();
console.log(uptime);


/*All information about moduls => DOCS */