//Function for Clicking buttons
function buttonClick(value){
    console.log(value);
}
//Calc function
function init(){
    document.querySelector('.calc-buttons')
            .addEventListener("click",function(event){
                buttonClick(event.target.innerText);
            });
}

init();