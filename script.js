const inputs = document.querySelectorAll(".calculator form input[type='text']");

var divide = document.getElementsByName("divide")[0];
var multiply = document.getElementsByName("multiply")[0];
var subtract = document.getElementsByName("subtract")[0];
var add = document.getElementsByName("add")[0];

var equal = document.getElementsByName("equal")[0];
var result = document.getElementsByName("result")[0];
var operation = document.getElementsByName("operation")[0];

var AD = document.getElementsByName("AD")[0];

var number1 = document.getElementsByName("number1")[0];
var number2 = document.getElementsByName("number2")[0];

var one = document.getElementsByName("one")[0];
var two = document.getElementsByName("two")[0];
var three = document.getElementsByName("three")[0];
var four = document.getElementsByName("four")[0];
var five = document.getElementsByName("five")[0];
var six = document.getElementsByName("six")[0];
var seven = document.getElementsByName("seven")[0];
var eight = document.getElementsByName("eight")[0];
var nine = document.getElementsByName("nine")[0];
var zero = document.getElementsByName("zero")[0];

var point = document.getElementsByName("point")[0];

function putNumbers(num) {
  if (operation.value !== "") {
    number2.value += num;
  } else {
    if (!number1.value.includes(".") || num !== ".") {
      number1.value += num;
    }
  }
  console.log(number1.value);
}

function clearFileds() {
  number1.value = "";
  number2.value = "";
  operation.value = "";
}


inputs.forEach(input => {
    input.addEventListener("focus", function () {
        // Remove focus from all inputs except the current one
        inputs.forEach(i => i !== this && i.blur());
    });
});

add.addEventListener("click", function () {
  if (number1 !== "") {
    operation.value = "+";
  } else {
    alert("Must enter the first number for this operation");
  }
});
subtract.addEventListener("click", function () {
  operation.value = "-";
});
multiply.addEventListener("click", function () {
  operation.value = "*";
});
divide.addEventListener("click", function () {
  operation.value = "/";
});

zero.addEventListener("click", function () {
  putNumbers(0);
});

one.addEventListener("click", function () {
  putNumbers(1);
});
two.addEventListener("click", function () {
  putNumbers(2);
});
three.addEventListener("click", function () {
  putNumbers(3);
});
four.addEventListener("click", function () {
  putNumbers(4);
});
five.addEventListener("click", function () {
  putNumbers(5);
});
six.addEventListener("click", function () {
  putNumbers(6);
});
seven.addEventListener("click", function () {
  putNumbers(7);
});
eight.addEventListener("click", function () {
  putNumbers(8);
});
nine.addEventListener("click", function () {
  putNumbers(9);
});

point.addEventListener("click", function () {
  putNumbers(".");
});

AD.addEventListener(
  "click",
  function () {
    clearFileds();
  },
  false
);

equal.addEventListener("click", function () {
  console.log(number1.value + "sss" + number2.value + "dddd" + operation.value);
  if (number1 !== "" && number2 !== "" && operation !== "") {
    switch (operation.value) {
      case "+":
        result.value = parseFloat(number1.value) + parseFloat(number2.value);
        clearFileds();
        break;
      case "-":
        result.value = parseFloat(number1.value) - parseFloat(number2.value);
        clearFileds();
        break;
      case "*":
        result.value = parseFloat(number1.value) * parseFloat(number2.value);
        clearFileds();
        break;
      case "/":
        if (parseFloat(number2.value) === 0) {
          alert("Cannot divide by zero");
        } else {
          result.value = parseFloat(number1.value) / parseFloat(number2.value);
          clearFileds();
        }
        break;
      default:
        alert("Invalid operation");
    }
  } else {
    alert("Please enter valid numbers and select an operation.");
  }
});
