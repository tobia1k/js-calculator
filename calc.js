const display = document.getElementById("display");
let first = 0;
let op = "";
let second = 0;
let displayToBeCleared = false;

document.addEventListener("click", (event) => {

    if (event.target.id === "clear" || displayToBeCleared) {
        display.value = "";
        first = 0;
        op = "";
        second = 0;
        displayToBeCleared = false;
    }
    if (event.target.className === "number") {
        display.value += event.target.value;
    }
    else if (event.target.className === "operator") {
        if (op === "") {
            first = Number(display.value);
            op = event.target.value;
            display.value = "";
        }
        else {
            // Working on catching divide by zero error
            second = Number(display.value);
            console.log("abogus");
            display.value = operate(first, op, second);
            first = Number(display.value);
            second = 0;
            op = event.target.value;
            displayToBeCleared = true;
        }
    }
    else if (event.target.id === "equals") {
        if (op !== "") {
            second = Number(display.value);
            console.log(first + ", " + op + ", " + second);
            display.value = +(operate(first, op, second)).toFixed(8);
            displayToBeCleared = true;
        }
        else {
            if (first !== 0) {
                display.value = first;
            }
        }
    }
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero."
    }
    else {
        return a / b;
    }
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