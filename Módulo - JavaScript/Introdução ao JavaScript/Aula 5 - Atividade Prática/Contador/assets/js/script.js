var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    } else {
        currentNumberWrapper.style.color = "white";
    }
    
}
function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    } else {
        currentNumberWrapper.style.color = "white";
    }
}

