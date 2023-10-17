// Calculator
// Display
var output = document.getElementById("calc");
function display(number) {
  output.value += number;
}

// All Clear
function allClear() {
  output.value = "";
}

// Operator
function Operator() {
  if (
    output.value.charAt(output.value.length - 1) === "*" ||
    output.value.charAt(output.value.length - 1) === "/" ||
    output.value.charAt(output.value.length - 1) === "%" ||
    output.value.charAt(output.value.length - 1) === "." ||
    output.value.charAt(output.value.length - 1) === "+" ||
    output.value.charAt(output.value.length - 1) === "-"
  ) {
  }
}

// Delete
function del() {
  output.value = output.value.slice(0, -1);
}

// Equals
function calculate() {
  output.value = eval(output.value);
}
