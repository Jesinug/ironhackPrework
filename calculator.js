

function addition(num1, num2) {
    let result = num1 + num2;
    console.log(result);
};


function substraction(num1, num2) {
    let result = num1 - num2;
    console.log(result);
};

function multiplication(num1, num2) {
    let result = num1 * num2; 
    console.log(result);
};

 
function division(num1, num2) {
    let result = num1 / num2;
    console.log(result);
};

function addValue(someNumber) {
    document.getElementById("previous-operand-display").innerHTML += someNumber;
}

// INVOKING  FUNCTIONS
addition(2, 67);
substraction(8, 4);
multiplication(2, 3);
division(10, 5);
