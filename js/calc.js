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
    let numb1 = parseInt(n1);
    let numb2 = parseInt(n2);

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
    }else{
        num2=num2+this.textContent;
    }

}

let num1 = "";
let num2 = "";
let result = "";
let operator = "";
let previousOperator = "";

let resultBox = document.querySelector(".result");

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
        num2 = "";
    }

    num1 = result;
}));
