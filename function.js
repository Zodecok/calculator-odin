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
                displayText("You dirty mungrel, never divide by zero");
                class Mungrel {
                    id;
                    type;
                    constructor() {
                        this.id = "clear";
                        this.type = "mungrel";
                    }
                }
                let mungrel = new Mungrel();
                // setTimeout(manipulatorEquator(mungrel), 4000);
                manipulatorEquator(mungrel);
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
    display.textContent = text;
}

function numberEquator(target) {
    if (!pastFirstValue) {
        if (equalsPressed) {
            lastValue = Number(target.id);
            equalsPressed = false;
        }
        lastValue = (lastValue * 10) + +target.id;
        displayText(lastValue);
    } else {
        currentValue = (currentValue * 10) + +target.id;
        displayText(currentValue);
    }
}
function operatorEquator(target) {
    if (!pastFirstValue) {
        pastFirstValue = true;
        pastOperation = target.id;
    } else {
        let operationAnswer = operate(lastValue, currentValue, pastOperation);
        displayText(operationAnswer);
        pastOperation = target.id;
        lastValue = operationAnswer;
        currentValue = 0;
    }
}
function manipulatorEquator(target) {
    switch (target.id) {
        case "decimal":
            
            break;

        case "equals":
            let operationAnswer = operate(lastValue, currentValue, pastOperation);
            displayText(operationAnswer);
            pastFirstValue = false;
            lastValue = operationAnswer;
            currentValue = 0;
            equalsPressed = true;
            break;

        case "clear":
            equalsPressed = false;
            pastFirstValue = false;
            lastValue = 0;
            currentValue = 0;
            pastOperation = NaN;
            displayText("");
            if (target.type == "mungrel") {
                displayText("you just got mungrelled");
            }
            break;

        case "negative":
            break;

    }
}

let equalsPressed = false;
let pastFirstValue = false;
let lastValue = 0;
let currentValue = 0;
let pastOperation;
let display = document.querySelector("#display");

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


