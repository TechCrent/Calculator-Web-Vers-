
//Main Function
/*one.addEventListener("click",function(){
    if (screen.innerText > 0){
        screen.innerText += "1";
    }else{
        screen.innerText = "1";
    }
});*/

//Adding Function



const screen = document.querySelector(".scr");
let currentNumber = 0;
let pastNumber = 0;
let operator = '+'


const div = document.querySelector(".div");
const mul = document.querySelector(".mul");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

symbols=[div,mul,minus,plus]
for( let sym of symbols){
    sym.addEventListener("click",function(){
    if (screen.innerText > 0){
        if(){
            currentNumber = Number(screen.innerText);
            screen.innerText = "0"; 

        }
    }
    })
}


const equal = document.querySelector(".equal");
if(div){
    firstStore
}

const clear = document.querySelector(".clear");

const del = document.querySelector(".del");



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
