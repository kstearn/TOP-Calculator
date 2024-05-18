let number1;
let number2;
let operator;
let displayVal = "";
const displayDiv = document.querySelector("#display");
let result;

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

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    displayVal = "";
    displayDiv.textContent = "0";
})