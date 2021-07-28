//GLOBAL VARIABLES
//score
let score = document.querySelector(".score");
//numbers
let numbers = document.querySelectorAll('.number');
console.log(numbers);
//operations
let operations = document.querySelectorAll('.operation');
console.log(operations);
//reset
let reset = document.querySelector('.reset');
//result
let result = "";


//EVENTS
//Event for all numbers
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        score.textContent = result + numbers[i].textContent;
        result = score.textContent;
        console.log(result);
    });
}
//Event for all operations
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', function() {
        if (operations[i].textContent == ".") {
            score.textContent = result + "" + operations[i].textContent + "";


        } else if (operations[i].textContent == "=") {
            calcAB();

        } else {
            score.textContent = result + "" + operations[i].textContent + "";
        }

        result = score.textContent;
        console.log(result);
    });
}
//Event for reset 
reset.addEventListener('click', function() {
    score.textContent = "";
    result = score.textContent;
    console.log(result);
});

//Operation: argument operation argument
const calcAB = function() {
    result.toString();
    let x = result.length;
    score.textContent = x;
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);

}