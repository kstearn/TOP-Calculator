let number1;
let number2;
let operator;
let displayVal = "";
const displayDiv = document.querySelector("#display");

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, op) {
    if (op == "+") {
        return add(num1, num2);
    }
    else if (op == "-") {
        return subtract(num1, num2);
    }
    else if (op == "*") {
        return multiply(num1, num2);
    }
    else if (op == "/") {
        return divide(num1, num2);
    }
    else {

    }
}

const numberButtons = document.querySelector("#numbers").childNodes;
numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // add clicked number to display
        displayVal += String(e.target.textContent);
        displayDiv.textContent = displayVal;
    })
})

const operatorButtons = document.querySelector("#operators").childNodes;
operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // set number1 to number entered so far
        number1 = parseInt(displayVal);
        // clear display val so it will be ready for next num
        displayVal = "";
        // update operator value with clicked operator
        operator = e.target.textContent;
    })
})

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    if (!number1 || !operator || !displayVal) {
        // prevent error if all values haven't been entered
        return;
    }
    // set number2 to number entered so far
    number2 = parseInt(displayVal);
    // get result and display
    displayVal = operate(number1, number2, operator);
    displayDiv.textContent = displayVal;
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    displayVal = "";
    displayDiv.textContent = "0";
    number1 = 0;
    number2 = 0;
    operator = "";
})