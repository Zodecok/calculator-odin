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
            return a / b;
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
function numberEquator(target) {
    if (!pastFirstValue) {
        lastValue = (lastValue * 10) + +target.id;
        display.textContent = lastValue;
    } else {
        currentValue = (currentValue * 10) + +target.id;
        display.textContent = currentValue;
    }
}
function operatorEquator(target) {
    if (!pastFirstValue) {
        pastFirstValue = true;
        pastOperation = target.id;
    } else {
        let operationAnswer = operate(lastValue, currentValue, pastOperation);
        display.textContent = operationAnswer;
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

        
            break;

        case "clear":
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


