let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let equation = [];

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
}

const operate = function(firstNum, op, secondNum) {
    switch(op) {
        case "+":
            add(firstNum, secondNum)
            break;
        case "-":
            subtract(firstNum, secondNum)
            break;
        case "*":
            multiply(firstNum, secondNum)
            break;
        case "/":
            divide(firstNum, secondNum)
            break;
    }

}

