//global variables
let score = document.querySelector(".score");

let num0 = document.querySelector('.num0');
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let num3 = document.querySelector('.num3');
let num4 = document.querySelector('.num4');
let num5 = document.querySelector('.num5');
let num6 = document.querySelector('.num6');
let num7 = document.querySelector('.num7');
let num8 = document.querySelector('.num8');
let num9 = document.querySelector('.num9');

let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let multi = document.querySelector(".multi");
let divide = document.querySelector(".divide");
let dott = document.querySelector(".dott");
let eq = document.querySelector(".eq");


//Events
let result = "";


num1.addEventListener('click', function() {
    score.textContent = result + "1";
    result = score.textContent;
    console.log(result)
})