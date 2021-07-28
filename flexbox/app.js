//global variables
let score = document.querySelector(".score");

let numbers = document.querySelectorAll('.number');
console.log(numbers);

let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let multi = document.querySelector(".multi");
let divide = document.querySelector(".divide");
let dott = document.querySelector(".dott");
let eq = document.querySelector(".eq");


//Events
let result = "";
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        score.textContent = result + numbers[i].textContent;
        result = score.textContent;
        console.log(result);
    });
}