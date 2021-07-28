//----- GLOBAL VARIABLES  -----
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
//Value to know if the score was calculated
let calculated = false;

//----- FUNCTIONS  -----
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

//Operation to calculate the result with eval() method
const calculateResult = function() {
    result.toString();
    score.textContent = eval(result);
    result = "";
    calculated = true;
}

//Operation to remove last element
const removeLastElement = function() {
    if (result[result.length - 1] == " ") {
        result = result.slice(0, -3);
    } else {
        result = result.slice(0, -1);
    }

    score.textContent = result;

}



//----- EVENTS  ----
//Event for all numbers
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        if (calculated == false) {
            score.textContent = result + numbers[i].textContent;
        } else {
            result = "";
            calculated = false;
        }
        score.textContent = result + numbers[i].textContent;
        result = score.textContent;
        //console.log(result);
    });
}
//Event for all operations
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', function() {
        if (operations[i].textContent == ".") {
            if (calculated == false) {
                score.textContent = result + "" + operations[i].textContent + "";
            } else {
                result = "";
                calculated = false;
                score.textContent = result + "" + operations[i].textContent + "";
            }




        } else if (operations[i].textContent == "=") {
            calculateResult();


        } else {
            score.textContent = result + " " + operations[i].textContent + " ";
            calculated = false;
        }

        result = score.textContent;
        console.log(result);
    });
}
//Event for reset 
reset.addEventListener('click', removeLastElement);