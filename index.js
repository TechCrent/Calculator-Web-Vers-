const screen = document.querySelector(".scr");


//Declaration of Symbols
const div = document.querySelector(".div");
const mul = document.querySelector(".mul");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

//Calculation Declarations
let currentNumber = 0;
let pastNumber = 0;
let currentOperator = '';
let result = 0;
let justCalculated = false;
let expectingNewNumber = false;

//Calculation Logic on operator click
let operator = [div,mul,minus,plus];
for( let sym of operator){
    sym.addEventListener("click",function(){
    const numberOnScreen = Number(screen.innerText)
    let newOperator = '';

    //Assigning operators to variables
    if(sym == div){
        newOperator = '/'
    }else if(sym == mul){
        newOperator = '*'
    }else if(sym == minus){
        newOperator = '-'
    }else if(sym == plus){
        newOperator = '+'
    }        

    if (justCalculated){
        screen.innerText = '0';
    }
    //Setting logic for initial storage
    //If Past Number is empty
    if (pastNumber == 0 && !justCalculated){
        pastNumber = numberOnScreen;
        screen.innerText = "0";
    //If Past Number is not empty(Chain calculation)
    }else if(!expectingNewNumber){
        currentNumber = numberOnScreen;
        pastNumber = calc(pastNumber,currentNumber,currentOperator);
        screen.innerText = '0';


    }

    currentOperator = newOperator;
    expectingNewNumber = true;
    justCalculated = false;

    })
}

//Adding calculation Function
function calc(pastNumber,currentNumber,currentOperator){
    if(currentOperator == "+"){
        result = pastNumber + currentNumber;
    }else if(currentOperator == "-"){
        result = pastNumber - currentNumber;
    }else if(currentOperator == "*"){
        result = pastNumber * currentNumber;
    }else if(currentOperator == "/"){
        result = pastNumber / currentNumber;
    }

    return  result;
}


//Equal button
const equal = document.querySelector(".equal");
equal.addEventListener("click",function(){
    //Setting logic for current number logic
    if(pastNumber !== null && currentOperator !== null && !expectingNewNumber){
        currentNumber = Number(screen.innerText) 
        result = calc(pastNumber,currentNumber,currentOperator);
        screen.innerText = result;
        pastNumber = result;
        justCalculated = true;
        expectingNewNumber = true;
    }  
})

//Clear Button
const clear = document.querySelector(".clear");
clear.addEventListener("click",function(){
    screen.innerText = "0";
    currentNumber = 0;
    pastNumber = 0;
    currentOperator = '';
    expectingNewNumber = false;
    result = 0;
    justCalculated = false;
})


//Delete Button
const del = document.querySelector(".del");
del.addEventListener("click",function(){
    if (screen.innerText > 0 && screen.innerText.length > 1){
        screen.innerText = screen.innerText.slice(0, -1) ;
    }else{
        screen.innerText = "0";
    }
});



const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zer");

//Array Idea
numbers=[zero,one,two,three,four,five,six,seven,eight,nine];
for(let num of numbers){
    num.addEventListener("click",function(){
        if (screen.innerText == "0" || expectingNewNumber){
            screen.innerText = num.innerText;
            expectingNewNumber = false;
        }else{
            screen.innerText += num.innerText;

        }
        justCalculated = false;
    })

}
