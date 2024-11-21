
function pressKey(keyValue){
    const screenElement = document.getElementById("input");
    screenElement.value = screenElement.value + keyValue;
}

function calculate(){
    const screenElement = document.getElementById("input");
    screenElement.value =eval(screenElement.value);
}
