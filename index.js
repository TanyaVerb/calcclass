const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');

const result = document.querySelector(".result");

const clearBtn = document.querySelector(".clearBtn");



console.log (num1);
console.log (num2);
console.log (result);
console.log (clearBtn);

const sign ={
    sum: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
}

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

  clearBtn.addEventListener("click", function (event) {
    
    num1 = "";
    num2 = "";
    sign = "";
    result = "";
  });


  function calculate(num1, num2, sign) {
    switch (sign) {
      case sign.sum:
        calculateData.result = String(sum(num1, num2));
        break;
      case sign.subtract:
        calculateData.result = String(subtract(num1, num2));
        break;
      case sign.multiply:
        calculateData.result = String(multiply(num1, num2));
        break;
      case sign.divide:
        calculateData.result = String(divide(num1, num2));
        break;
    }
  }

  let num1 = ''
  let num2= ''
  let sign = '+'
  let result = ''

  result.addEventListener("change", function (event) {
    num1 = event.target.value


  });