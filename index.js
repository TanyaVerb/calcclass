const firstNumInput = document.querySelector(".first-input");
const secondNumInput = document.querySelector(".second-input");
const signSelect = document.querySelector(".sign");
const resultTitle = document.querySelector(".result-value");
const resultBtn = document.querySelector(".result-btn");
const clearBtn = document.querySelector(".clear-btn");
const checkName = document.querySelector(".user-name");
console.log(checkName);

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

// let calculate={
//   sum (num1,num2){
//     console.log(arguments)
//   }
// }
// calculate.sum

let obj = {
  name: "Tanya",
  someFoo: function (param1, param2, param3) {
    console.log(obj.someFoo.name); //
    console.log(param1); //
    console.log(param2); //
    console.log(param3); //
    console.log(obj.someFoo.arguments); //
  },
  someFoo2: () => {
    console.log(obj.someFoo2.name);
  },
  someFoo3() {
    console.log(obj.someFoo3.name); // укороченная запись первой функции
  },
};

obj.someFoo(1, "ggg", false);

//
const someFoo = function () {
  console.log(someFoo.name);
};
const someFooArrow = function () {
  console.log(someFooArrow.name);
};

function someFoo3() {
  console.log(someFoo3.name);
}
function sum1(num1, num2, num3, num4, num5, num6, num7) {
  return num1 + num2 + num3 + num4 + num5 + num6 + num7;
}
function sum2() {
  console.log(sum2.arguments);
  // return arguments[5]
  const paramIndexLength = arguments.length - 1; //8
  let result = 0; //0

  for (let i = 0; i <= paramIndexLength; i++) {
    const el = arguments[i]; // arguments[1]
    result += el; // result =
  }
  return result;
}

// let result1 = sum1(1,2,3,4,5,6,7 )
let result2 = sum2(1, 2, 3, 4, 5, 6, 7, 8, 9);

//  console.log (result1);
console.log(result2);

//У функции ключ name и arguments
//К ним мы можем обратиться через название функции и точку. При этом, к arguments может просто по слову
//Typeof функции возвращает 'function', на функции это объекты
// у стрелочных функций нет key arguments

// window.someFoo3()
// someFoo ()
// someFooArrow()
// console.log (obj.name); //undefined

const str = "Hello";
const arr = ["Hello", "car", "green"];
console.log(arr[1]);
console.log(arr.toString());
const myName = "vlad";
console.log(myName.length);

let index = 1;

console.log(myName[index]);
console.log(myName.toUpperCase()); //метод возвращает новое значение не изменяя текущее
console.log(myName);
const upperCaseMyName = myName.toUpperCase();

function formatUserName(str) {
  const lowerCase = str.toLowerCase().slice(1);
  const firstLetter = str[0].toUpperCase();
  console.log(lowerCase);
  console.log(firstLetter);
  return firstLetter + lowerCase;
}

console.log(formatUserName("VLAD"));

// num1 - пользователи вводят свои имена в разных регистрах
//на дополнительную кнопку (которую нужно создать)
// в то место где показывался результат расчета - нужно выводить значение имени в формате того чтобы первый символ Анна, Света

checkName.addEventListener("click", () => {
  let data = firstNumInput.value;
  const resultData = formatUserName(data);

  resultTitle.innerHTML = resultData;
});
