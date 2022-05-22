function sum(n1,n2){
    return n1+n2;
}

function subtract(n1,n2){
    return n1-n2;
}

function multiply(n1,n2){
    return n1*n2;
}

function divide(n1,n2){
    return n1/n2;
}

function operate(operator,n1,n2){
    const firstNumber = parseFloat(n1);
    const secondNumber = parseFloat(n2);

    switch(operator){
        case "+" : return sum(firstNumber,secondNumber);
        case "-" : return subtract(firstNumber,secondNumber);
        case "*" : return multiply(firstNumber,secondNumber);
        case "/" : return divide(firstNumber,secondNumber);
    }
}

function assignNumber(n){
    const currentNumber = n.textContent;

    if(firstNumber.length > 15 || secondNumber.length > 15) return;
    if(firstNumber.length == 0 && currentNumber == "."){
        firstNumber = 0 + n.textContent;
        outputScreen.textContent = firstNumber;
    };
    
    if(operator == "="){
        if(currentNumber == ".") return; 
        clearScreen();
        firstNumber =  currentNumber;
        outputScreen.textContent = firstNumber;

    }else if(operator == ""){ 
        if(firstNumber.includes(".") && currentNumber == ".") return; 
        firstNumber = firstNumber + currentNumber;
        outputScreen.textContent = firstNumber;

    }else{
        if(secondNumber.length == 0 && currentNumber == "."){
            secondNumber = 0 + n.textContent;
            outputScreen.textContent += secondNumber;
        };
        if(secondNumber.includes(".") && currentNumber == ".") return; 
        secondNumber = secondNumber + currentNumber;
        outputScreen.textContent += currentNumber;
    }
}

function clearScreen(){
    firstNumber = "";
    secondNumber = "";
    result = "";
    operator = "";
    previousOperator = "";
    outputScreen.textContent = 0;
}

function assignOperator(o){
    if(firstNumber == "") return;

    const previousOperator = operator;
    operator = o.id;

    const allOperators = "+-/*="
    const lastOutputScreenSymbol = outputScreen.textContent.charAt(outputScreen.textContent.length-1);
    
    if(!allOperators.includes(lastOutputScreenSymbol) ){
        if(operator != "="){
            outputScreen.textContent += operator;
        }
    }else{
        if(operator != "="){
        outputScreen.textContent = outputScreen.textContent.slice(lastOutputScreenSymbol,this.length-1) + operator;
        }else{
            clearScreen();
        }
    }

    if(secondNumber == "") return;

    if(operator == "="){
        result = operate(previousOperator,firstNumber,secondNumber);
        if(result % 1 != 0) result = result.toFixed(2);
        outputScreen.textContent = result;
       
    }else{
        result = operate(previousOperator,firstNumber,secondNumber);
    }

    firstNumber = result;
    secondNumber = "";
}

function deleteLastInput(){
    const allOperators = "+-/*"
    let lastOutputScreenSymbol = outputScreen.textContent.charAt(outputScreen.textContent.length-1);

    if(outputScreen.textContent.length>1){
        outputScreen.textContent = outputScreen.textContent.slice(0,this.length-1);
    }else{
        clearScreen();
    }

    if(allOperators.includes(lastOutputScreenSymbol)){
        operator = "";
    }else{
        if(operator == "" || operator == "="){
            firstNumber = firstNumber.toString();
            firstNumber = firstNumber.slice(0,firstNumber.length-1);
            console.log(firstNumber);
            
        }else{
            secondNumber = secondNumber.slice(0,secondNumber.length-1);
            console.log(secondNumber);
        }
    }
}

let firstNumber = "";
let secondNumber = "";
let result = 0;
let operator = "";

let outputScreen = document.querySelector(".result");

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click",() => {
    clearScreen();
    clearBtn.classList.add("click");
});

let deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click",() => {
    deleteLastInput();
    deleteBtn.classList.add("click");
});

let numbers = document.querySelectorAll(".number");
numbers.forEach((n) => n.addEventListener("click", () => {
    assignNumber(n);
    n.classList.add("click");
}));

let operators = document.querySelectorAll(".operator");
operators.forEach((o) => o.addEventListener("click", () => {
    assignOperator(o);
    o.classList.add("click");
}));

let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("transitionend", (event) => {
    if(event.propertyName!="transform") return;
    btn.classList.remove("click")}));