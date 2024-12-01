const button = document.querySelector("input[type=button]")
const display = document.getElementById("display");
let first = 0;
let op = "";
let second = 0;

document.addEventListener("click", (event) => {

    if (event.target.id === "clear") {
        display.value = "";
    }
    else if (event.target.className === "number") {
        display.value += event.target.value;
    }
    else if (event.target.className === "operator") {
        first = Number(display.value);
        op = event.target.value;
        display.value = "";
    }
    else if (event.target.id === "equals") {
        let second = Number(display.value);
        console.log(first + ", " + op + ", " + second);
        display.value = operate(first, op, second);
    }
});

function add(a, b) {
    console.log(typeof a);
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(num1, op, num2) {
    switch(op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            break;
    }
}