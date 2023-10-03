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

const shekelsToUSD = 0.28;
const usdToShekels = 3.6;
const shekelsToEuros = 0.24;
const eurosToShekels = 4.2;

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

function clearFields() {
  number1.value = "";
  number2.value = "";
  operation.value = "";
  
}

function convertShekelsToUSD() {
  const amountInShekels = parseFloat(number1.value);
  if (!isNaN(amountInShekels)) {
    result.value = (amountInShekels * shekelsToUSD).toFixed(2);
    clearFields();
  }else {
    alert("Please enter valid number.");
  }
}

function convertUSDToShekels() {
  const amountInUSD = parseFloat(number1.value);
  if (!isNaN(amountInUSD)) {
    result.value = (amountInUSD * usdToShekels).toFixed(2);
    clearFields();
  } else {
    alert("Please enter valid number.");
  }
}

function convertShekelsToEuros() {
  const amountInShekels = parseFloat(number1.value);
  if (!isNaN(amountInShekels)) {
    result.value = (amountInShekels * shekelsToEuros).toFixed(2);
    clearFields();
  }else {
    alert("Please enter valid number.");
  }
}

function convertEurosToShekels() {
  const amountInEuros = parseFloat(number1.value);
  if (!isNaN(amountInEuros)) {
    result.value = (amountInEuros * eurosToShekels).toFixed(2);
    clearFields();
  }else {
    alert("Please enter valid number.");
  }
}

document.getElementsByName("STOD")[0].addEventListener("click", function () {
  convertShekelsToUSD();
});

document.getElementsByName("DTOS")[0].addEventListener("click", function () {
  convertUSDToShekels();
});

document.getElementsByName("STOE")[0].addEventListener("click", function () {
  convertShekelsToEuros();
});

document.getElementsByName("ETOS")[0].addEventListener("click", function () {
  convertEurosToShekels();
});

inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    inputs.forEach((i) => i !== this && i.blur());
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
    clearFields();
    operation.value = "";
    result.value="";
  },
  false
);

equal.addEventListener("click", function () {
  console.log(number1.value + "sss" + number2.value + "dddd" + operation.value);
  if (number1 !== "" && number2 !== "" && operation !== "") {
    switch (operation.value) {
      case "+":
        result.value = parseFloat(number1.value) + parseFloat(number2.value);
        clearFields();
        break;
      case "-":
        result.value = parseFloat(number1.value) - parseFloat(number2.value);
        clearFields();
        break;
      case "*":
        result.value = parseFloat(number1.value) * parseFloat(number2.value);
        clearFields();
        break;
      case "/":
        if (parseFloat(number2.value) === 0) {
          alert("Cannot divide by zero");
        } else {
          result.value = parseFloat(number1.value) / parseFloat(number2.value);
          clearFields();
        }
        break;
      default:
        alert("Invalid operation");
    }
  } else {
    alert("Please enter valid numbers and select an operation.");
  }
});
