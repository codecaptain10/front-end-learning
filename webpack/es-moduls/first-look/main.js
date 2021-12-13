//Example 1: export and import from
import {
    add,
    users
} from './utils.js';

//Import function add from module utils.js
const result = add(2, 3);
console.log("Result: " + result);
//Using array variable from module utill.js
console.log("Person: " + users[0]);


//Example 2: export default 
import foo from './double.js'

console.log("Use function from module double.js: " + foo(14));