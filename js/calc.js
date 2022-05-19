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
    let numb1 = parseFloat(n1);
    let numb2 = parseFloat(n2);

    switch(operator){
        case "add" : return sum(numb1,numb2);
        case "subtract" : return subtract(numb1,numb2);
        case "multiply" : return multiply(numb1,numb2);
        case "divide" : return divide(numb1,numb2);
    }
}

function assignNumber(n){
    
    if(operator==""){ 
        if(n1.length>15) return;
        n1=n1+n.textContent;
        outputScreen.textContent = n1;
    }else{
        if(n2.length>15) return;
        n2=n2+n.textContent;
        outputScreen.textContent = n2;
    }
}

function clearScreen(){
    n1 = "";
    n2 = "";
    result = "";
    operator = "";
    previousOperator = "";
    outputScreen.textContent = 0;
}

let n1 = "";
let n2 = "";
let result = 0;
let operator = "";
let previousOperator = "";

let outputScreen = document.querySelector(".result");

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click",() => {
    clearScreen();
    clearBtn.classList.add("click");
});

let numbers = document.querySelectorAll(".number");
numbers.forEach((n) => n.addEventListener("click", () => {
    assignNumber(n);
    n.classList.add("click");
}));

let operators = document.querySelectorAll(".operator");
operators.forEach((o) => o.addEventListener("click",() => {
    previousOperator = operator;
    operator = o.id;
    o.classList.add("click");

    if(operator == ""){
        result = operate(previousOperator,n1,n2);
        if(result % 1 != 0) result = result.toFixed(2);
    }else if(n2 !=""){
        result = operate(operator,n1,n2);
    }else{
        return;
    }

    outputScreen.textContent = result;
    n1 = result;
    n2 = "";
  
}));

let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("transitionend", (event) => {

    if(event.propertyName!="transform") return;
    btn.classList.remove("click")}));