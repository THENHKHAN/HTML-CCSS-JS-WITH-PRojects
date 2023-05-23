var string = "";

function solve(val) {
  var v = document.getElementById("input");
  v.value += val;
}

function result() {
  var num1 = document.getElementById("input").value;
  var num2 = eval(num1);
  document.getElementById("input").value = num2;
}
function clearALL() {
  document.getElementById("input").value = "";
}
function DEL() {
  var display = document.getElementById("input");
  var currentValue = display.value;
  var newValue = currentValue.slice(0, -1); // Remove the last character
  display.value = newValue;
}
