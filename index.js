
//Main Function idea 
/*one.addEventListener("click",function(){
    if (screen.innerText > 0){
        screen.innerText += "1";
    }else{
        screen.innerText = "1";
    }
});*/


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

//Calculation Logic on operator click
let operator = [div,mul,minus,plus];
for( let sym of operator){
    sym.addEventListener("click",function(){
    //Assigning operators to variables
    if(sym == div){
        currentOperator = '/'
    }else if(sym == mul){
        currentOperator = '*'
    }else if(sym == minus){
        currentOperator = '-'
    }else if(sym == plus){
        currentOperator = '+'
    }        

    //Setting logic for initial storage
    if (Number(screen.innerText) > 0 && pastNumber == 0){
        pastNumber = Number(screen.innerText);
        currentNumber = 0;
        screen.innerText = 0;
    }else if(Number(screen.innerText) > 0 && pastNumber > 0){
        currentNumber = Number(screen.innerText)
        pastNumber = calc(pastNumber,currentNumber,currentOperator);
        screen.innerText = 0;
    }

 
    })
}

//Adding calculation Function
function calc(pastNumber,currentNumber,currentOperator){
    if(currentOperator == "+" && pastNumber > 0){
        result = pastNumber + currentNumber;
    }else if(currentOperator == "-" && pastNumber > 0){
        result = pastNumber - currentNumber;
    }else if(currentOperator == "*" && pastNumber > 0){
        result = pastNumber * currentNumber;
    }else if(currentOperator == "/" && pastNumber > 0){
        result = pastNumber / currentNumber;
    }

    pastNumber = result;
    return pastNumber, result;
}



const equal = document.querySelector(".equal");
equal.addEventListener("click",function(){
    //Setting logic for current number logic
    if(pastNumber > 0){
        currentNumber = Number(screen.innerText)
        result = calc(pastNumber,currentNumber,currentOperator);
        pastNumber = result;
        screen.innerText = result;
    }  
    //Assigning calculation to operators
    /*
    if(currentOperator == "+" && pastNumber > 0){
        result = pastNumber + currentNumber;
        pastNumber = result;

    }*/

})


const clear = document.querySelector(".clear");
clear.addEventListener("click",function(){
    screen.innerText = "0";
    currentNumber = 0;
    pastNumber = 0;
})



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
        if (screen.innerText > 0){
            screen.innerText += num.innerText;
        }else{
            screen.innerText = num.innerText;
        }
    })

}
