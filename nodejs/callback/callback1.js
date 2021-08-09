/*What is callback function?

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

*/

//-----Example 1-----
const add = (x, y) => x + y;
const division = (number1, number2) => number1 / number2;

//calback function
const math = (a, b, callback) => {
    console.log(callback(a, b));
};

math(11, 5, add); // 16