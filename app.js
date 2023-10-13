// Calculator
// Display
function display(number) {
  var output = document.getElementById("calc");
  output.value += number;
  if (output.value.length > 10) {
    console("yes");
    output.value = "";
  }
}

// All Clear
function allClear() {
  var output = document.getElementById("calc");
  output.value = "";
}

// Delete
function del() {
  var output = document.getElementById("calc");
  output.value = output.value.slice(0, -1);
}

// Equals
function calculate() {
  var output = document.getElementById("calc");
  output.value = eval(output.value);
}
