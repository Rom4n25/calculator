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

    if(n1.length > 15 || n2.length > 15) return;
    if(n1.length == 0 && n.textContent == ".") return;
    if(n2.length == 0 && n.textContent == ".") return;
    
    if(operator==""){ 
        if(n1.includes(".") && n.textContent == ".") return; 
        n1=n1+n.textContent;
        outputScreen.textContent = n1;
    }else{
        if(n2.includes(".") && n.textContent == ".") return; 
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

function calculate(o){
    previousOperator = operator;
    operator = o.id;
    
    if(operator == "="){
        if(n1 == ""){
            operator = "";
            return;
        } 
        result = operate(previousOperator,n1,n2);
        if(result % 1 != 0) result = result.toFixed(2);
        
    }else if(operator == "add" || operator == "divide" || operator == "sum" || operator == "subtract"){
        operator = "";
        return;
    }else if(n2 != ""){
        result = operate(operator,n1,n2);
    }else{
        return;
    }

    outputScreen.textContent = result;
    n1 = result;
    n2 = "";
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
operators.forEach((o) => o.addEventListener("click", () => {
    calculate(o);
    o.classList.add("click");
}));

let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("transitionend", (event) => {
    if(event.propertyName!="transform") return;
    btn.classList.remove("click")}));