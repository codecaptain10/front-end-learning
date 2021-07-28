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
            calculateResult();

        } else {
            score.textContent = result + " " + operations[i].textContent + " ";
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

//Operation to calculate operation without eval() method
const doOperation = function() {
    result.toString();
    let finalScore;
    let parameters = result.split(" ")

    let number1 = parseFloat(parameters[0]);
    let operation = parameters[1];
    let number2 = parseFloat(parameters[2]);
    console.log(parameters[0]);
    console.log(parameters[1]);
    console.log(parameters[2]);

    if (operation == "+") {
        finalScore = number1 + number2;
    } else if (operation == "-") {
        finalScore = number1 - number2;
    } else if (operation == "*") {
        finalScore = number1 * number2;
    } else if (operation == "/") {
        finalScore = number1 / number2;
    }

    score.textContent = finalScore.toString();
    result = "";
}

//Operation to calculate the result
const calculateResult = function() {
    result.toString();
    score.textContent = eval(result);
    result = "";
}