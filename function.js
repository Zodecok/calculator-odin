function operate(a, b, operator) {
    // a = Number(a);
    // b = Number(b);
    switch (operator) {
        case "add":
            return a + b;
            break;

        case "subtract":
            return a - b;
            break;

        case "divide":
            if (b == 0) {
                clear();
                displayText("You dirty mungrel, never divide by zero");
            } else {
                return a / b;
            }
            break;

        case "multiply":
            return a * b;
            break;
    }
}

// function addEvents() {
//     let numbers = document.querySelectorAll(".number");
//     numbers.forEach(button => button.addEventListener("click", ))
// }
// function buttonAdder(e) {
//     e.target.
// }
function displayText(text) {
    let display = document.querySelector("#display");
    if (Number(text) !== NaN) {
        text = Math.round(Number(text) * 10000) / 10000;
    }
    display.textContent = text;
}

function numberEquator(target) {
    if (!pastFirstValue) {
        if (equalsPressed) {
            lastValue = Number(target.id);
            equalsPressed = false;
        }
        if (isDecimal) {
            let lastValueString = String(lastValue);
            if (lastValueString.includes(".")) {
                lastValueString += target.id;
            } else {
                lastValueString += "." + target.id;
            }
            lastValue = Number(lastValueString);
        } else {
            lastValue = (lastValue * 10) + +target.id;
        }
        displayText(lastValue);
        lastButtonPressed = "number";
    } else {
        if (isDecimal) {
            let currentValueString = String(currentValue);
            if (currentValueString.includes(".")) {
                currentValueString += target.id;
            } else {
                currentValueString += "." + target.id;
            }
            currentValue = Number(currentValueString);
        } else {
            currentValue = (currentValue * 10) + +target.id;
        }
        lastButtonPressed = "number";
        displayText(currentValue);
    }
}
function operatorEquator(target) {
    if (!pastFirstValue) {
        pastFirstValue = true;
        lastButtonPressed= "operator";
        pastOperation = target.id;
        isDecimal= false;
    } else if (lastButtonPressed == "operator") {
        clear();
        displayText("You messed up man");
    } else {
        let operationAnswer = operate(lastValue, currentValue, pastOperation);
        displayText(operationAnswer);
        pastOperation = target.id;
        lastValue = operationAnswer;
        lastButtonPressed = "operator";
        currentValue = 0;
        isDecimal = false;
    }
}

function clear() {
    equalsPressed = false;
    pastFirstValue = false;
    lastValue = 0;
    currentValue = 0;
    pastOperation = NaN;
    isDecimal = false;
    displayText("");
}

function manipulatorEquator(target) {
    switch (target.id) {
        case "decimal":
            if (lastButtonPressed == "number") {
                isDecimal = true;
                displayText(document.querySelector("#display").textContent + ".");

            } else if (lastButtonPressed == "operator" || isDecimal) {
                clear();
                displayText("You tried to a do wrong");
            } else {
                clear();
                displayText("This is your own error cooper");
            }
            break;

        case "equals":
            let operationAnswer = operate(lastValue, currentValue, pastOperation);
            displayText(operationAnswer);
            pastFirstValue = false;
            lastValue = operationAnswer;
            currentValue = 0;
            equalsPressed = true;
            isDecimal = false;
            break;

        case "clear":
            clear();
            if (target.type == "mungrel") {
                displayText("you just got mungrelled");
            }
            break;

        case "negative":
            break;

    }
}

let isDecimal = false;
let equalsPressed = false;
let pastFirstValue = false;
let lastValue = 0;
let currentValue = 0;
let pastOperation;
let display = document.querySelector("#display");
let lastButtonPressed;
let numbers = document.querySelectorAll("button");

numbers.forEach(button => button.addEventListener("click", function buttonAdder(e) {
    let classOf = Array.from(this.classList);
    classOf = Array.from(classOf)
    if (classOf.includes("number")) {
        numberEquator(this);
    } else if (classOf.includes("operator")) {
        operatorEquator(this);
    } else if (classOf.includes("manipulator")) {
        manipulatorEquator(this);
    }

}))


