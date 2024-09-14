function addToDisplay(value) {
    document.getElementById("screen").value += value; 
}
function clearDisplay() {
    document.getElementById('screen').value = "";
}
function calculate() {
    var x = document.getElementById("screen").value;
    var result = eval(x);
    document.getElementById("screen").value = result;
}
function oneClear() {
    docum
}