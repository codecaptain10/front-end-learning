//import module file system
const fs = require('fs');

console.log("--------- Example 1 ----------");
/*Example 1: ACCESS method*/
//Check if a file exist
//Access
fs.access('./names.txt', fs.constants.W_OK, (err) => {
    console.log(err ? 'File does not exist!' : 'File exist!');
});


console.log("--------- Example 2----------");
/*Example 2: RENAME method*/
//Rename - change file name
//DOCS!!!
fs.rename('./names.txt', 'users.txt', (err) => {
    if (err) {
        return console.log(err)
    } else {
        console.log("Change module name! names to users!");
    }
});

/* Synchronous rename solution*/
try {
    fs.renameSync('users.txt', 'names.txt'); //Without callback!
} catch (err) {
    console.log(err);
}

console.log("--------- Example 3 ----------");
/*Example 3: READ method*/
//
//Synchronous Read path to order
console.log(fs.readdirSync('./'));

//Asynchronous
fs.readdir('./', (err, files) => {
    console.log("Błąd: ", err);
    console.log("Zawartość: ", files);
});

console.log("--------- Example 4 ----------");
/*Example 4: READFILE method*/
//Asyncchronous
fs.readFile('names.txt', 'utf8', (err, data) => {
    console.log(data);
});
//Synchronous
const names = fs.readFileSync('names.txt', 'utf8');
console.log(names);

console.log("--------- Example 5 ----------");
/*Example 5: WRITEFILE method*/
// Write content to file
fs.writeFile('users.txt', "Nowy plik!", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Zapisano w pliku!");
    }
});

console.log("--------- Example 6 ----------");
/*Example 6: APPENDFILE method*/
const person = "Jan Jerzy Wojciech";
fs.appendFile('users.txt', person, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Udało sie dopisać!");
    }
});