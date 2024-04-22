function display(value) {
  document.getElementById("input").value += value;
}
function clearall() {
  document.getElementById("input").value = "";
}
function root() {
  var root1 = document.getElementById("input").value;
  var result = Math.sqrt(root1);
  document.getElementById("input").value = result;
}
function single() {
  var single = document.getElementById("input");
  single.value = single.value.slice(0, -1);
}
function calculator() {
  var equal = document.getElementById("input").value;
  var operator = equal.includes("+")
    ? "+"
    : equal.includes("-")
    ? "-"
    : equal.includes("*")
    ? "*"
    : equal.includes("/")
    ? "/"
    : equal.includes("%")
    ? "%"
    : null;
  if (operator === null) {
    return;
  }
  var opera = equal.split(operator);
  var num1 = parseFloat(opera[0]);
  var num2 = parseFloat(opera[1]);
  var result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "%") {
    result = num1 % num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      document.getElementById("input").value = "Cannot divide by zero";
      return;
    }
    result = num1 / num2;
  }
  document.getElementById("input").value = result;
}
