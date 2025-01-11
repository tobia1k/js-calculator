const display = document.getElementById("display");
let first = 0;
let op = "";
let second = 0;
let finishOp = false;

document.addEventListener("click", (event) => {

    if (event.target.id === "clear") {
        display.value = "";
        first = 0;
        op = "";
        second = 0;
        document.getElementById("decimal").disabled = false;
    }
    if (event.target.id === "backspace") {
        let text = display.value;
        text = text.substr(0, text.length - 1);
        display.value = text;
    }
    if (event.target.className === "number") {
        if (finishOp) {
            display.value = "";
            finishOp = false;
        }
        if (event.target.id === "decimal") {
            document.getElementById("decimal").disabled = true;
        }
        display.value += event.target.value;
    }
    else if (event.target.className === "operator") {
        document.getElementById("decimal").disabled = false;
        
        if (op === "") {
            first = Number(display.value);
            op = event.target.value;
            display.value = "";
        }
        else {
            if (display.value != "") {
                second = Number(display.value);
                let answer = operate(first, op, second)
                if (typeof answer === "number") {
                    display.value = +(answer).toFixed(8);
                }
                else {
                    display.value = answer;
                }
                first = Number(display.value);
                second = 0;
                op = event.target.value;
                display.value = "";
            }
            else {
                op = event.target.value;
            }
        }
        event.target.style['background'] = 'gray';
    }
    else if (event.target.id === "equals") {
        document.getElementById("decimal").disabled = false;
        if (op !== "") {
            second = Number(display.value);
            let answer = operate(first, op, second)
            if (typeof answer === "number") {
                display.value = +(answer).toFixed(8);
                first = Number(display.value);
                op = "";
                second = 0;
            }
            else {
                display.value = answer;
            }
        }
        else {
            if (first !== 0) {
                display.value = first;
            }
        }
        finishOp = true;
    }
});

function add(a, b) {
    document.getElementById("add").style['backgroundColor'] = null;
    return a + b;
}

function subtract(a, b) {
    document.getElementById("subtract").style['backgroundColor'] = null;
    return a - b;
}

function multiply(a, b) {
    document.getElementById("multiply").style['backgroundColor'] = null;
    return a * b;
}

function divide(a, b) {
    document.getElementById("divide").style['backgroundColor'] = null;
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