const firstNumInput = document.querySelector(".first-input");
const secondNumInput = document.querySelector(".second-input");
const signSelect = document.querySelector(".sign");
const resultTitle = document.querySelector(".result-value");
const resultBtn = document.querySelector(".result-btn");
const clearBtn = document.querySelector(".clear-btn");

console.log(firstNumInput);
console.log(secondNumInput);
console.log(signSelect);
console.log(resultTitle);
console.log(resultBtn);
console.log(clearBtn);

const OPERATION = {
  sum: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
};

const calculateData = {
  num1: "",
  num2: "",
  sign: "+",
  result: "",
};
function sum(num1, num2) {
  return +num1 + +num2;
}
function subtract(num1, num2) {
  return +num1 - +num2;
}
function multiply(num1, num2) {
  return +num1 * +num2;
}
function divide(num1, num2) {
  return +num1 / +num2;
}

function resetCalculate() {
  calculateData.num1 = "";
  calculateData.num2 = "";
  calculateData.sign = "+";
  calculateData.result = "";
  resultTitle.textContent = "...";
  firstNumInput.value = "";
  secondNumInput.value = "";
  signSelect.value = "+";
}

function calculate(num1, num2, sign) {
  switch (sign) {
    case OPERATION.sum:
      calculateData.result = sum(num1, num2);
      break;
    case OPERATION.subtract:
      calculateData.result = subtract(num1, num2);
      break;
    case OPERATION.multiply:
      calculateData.result = multiply(num1, num2);
      break;
    case OPERATION.divide:
      calculateData.result = divide(num1, num2);
      break;
  }
}

firstNumInput.addEventListener("keyup", function (e) {
  calculateData.num1 = e.target.value;
});
secondNumInput.addEventListener("keyup", function (e) {
  calculateData.num2 = e.target.value;
});

signSelect.addEventListener("change", function (e) {
  calculateData.sign = e.target.value;
});

resultBtn.addEventListener("click", function (e) {
  calculate(calculateData.num1, calculateData.num2, calculateData.sign);
  resultTitle.textContent = calculateData.result;
});

clearBtn.addEventListener("click", resetCalculate);
