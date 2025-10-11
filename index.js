
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



const div = document.querySelector(".div");
const mul = document.querySelector(".mul");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

let operator = [div,mul,minus,plus];


for( let sym of operator){
    sym.addEventListener("click",function(){
    if (screen.innerText > 0 && pastNumber == 0){
        pastNumber = Number(screen.innerText);
        screen.innerText = 0;
    }else if(screen.innerText > 0 && pastNumber > 0){
        currentNumber = Number(screen.innerText)
        screen.innerText = 0;
    }

    if(operator == div){

    }
    })
}

const equal = document.querySelector(".equal");


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
