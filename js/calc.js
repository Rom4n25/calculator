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
        case "+" : return sum(numb1,numb2);
        case "-" : return subtract(numb1,numb2);
        case "*" : return multiply(numb1,numb2);
        case "/" : return divide(numb1,numb2);
    }

}

function assignNumbers(){

    if(operator==""){ 
        num1=num1+this.textContent;
        resultBox.textContent = num1;
    }else{
        num2=num2+this.textContent;
        resultBox.textContent = num2;
    }
    this.classList.add("click");
}

function clear(){
    num1 = "";
    num2 = "";
    result = "";
    operator = "";
    previousOperator = "";
    resultBox.textContent = 0;
}

function removeClickClass(){
    this.classList.remove("click");
}

let num1 = "";
let num2 = "";
let result = "";
let operator = "";
let previousOperator = "";

let resultBox = document.querySelector(".result");

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click",() => {
    clear();
    clearBtn.classList.add("click");
});

let numbers = document.querySelectorAll(".number");
numbers.forEach((number) => number.addEventListener("click", assignNumbers));

let operators = document.querySelectorAll(".operator");
operators.forEach((o) => o.addEventListener("click",() =>{
    previousOperator = operator;
    operator = o.textContent;

    if(operator=="="){
  
        result = operate(previousOperator,num1,num2);
        num1 = result;
        num2 = "";
        resultBox.textContent = result;
    }

    if(num2==""){
        result = num1;
    }else{
        result = operate(operator,num1,num2);
        resultBox.textContent = result;
        num2 = "";
    }

    num1 = result;
    o.classList.add("click");
}));

let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("transitionend", removeClickClass));