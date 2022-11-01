var currentNumberWrapper = document.getElementById('currentNumber');
var  currentNumber= 0;

function increment() {
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;

    alteraCorNumberNegative()
}

function decrement() {
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    alteraCorNumberNegative();
}

function alteraCorNumberNegative(){
    if(currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "#F29F05";

    }
    if(currentNumber >= 0) {
        document.getElementById("currentNumber").style.color = "#013A40";
    }
}
