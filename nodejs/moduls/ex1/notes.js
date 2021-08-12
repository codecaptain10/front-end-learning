console.log("Modul notes.js");

/*What are wrapper function arguments*/
//exports = empty object
console.log('exports :', exports);
//dirname = path to order (dictionery)
console.log('dirname :', __dirname);
//filename = path to file
console.log('filename :', __filename);
//function require(path)
console.log('require :', require);
//Module instance
console.log('module :', module);


//Object to export to other module
module.exports = { txt: "Coś zwrócone z notes.js" }